import dbConnect from '@/db/connectionDb';
import { getDataFromToken } from '@/lib/getDataFromToken';
import { User } from '@/model/user.model';

export async function PATCH(request: Request) {
  const userDecoded = getDataFromToken(request);
  const { firstName, lastName, email, role, skills } = await request.json();

  // Find the user by their ID in the database
  await dbConnect();
  try {
    const userDoc = await User.findOne({ _id: userDecoded?.id });
    if (userDoc) {
      userDoc.firstName = firstName;
      userDoc.lastName = lastName;
      userDoc.email = email;
      userDoc.role = role;
      userDoc.skills = skills;
      await userDoc?.save();
    }

    const response = Response.json({
      data: {
        firstName: userDoc?.firstName,
        lastName: userDoc?.lastName,
        email: userDoc?.email,
        phone: userDoc?.phone,
        role: userDoc?.role,
        skills: userDoc?.skills || [],
      },
      success: true,
      status: 200,
    });
    return response;
  } catch (error) {
    throw new Error('User not found');
  }
}
