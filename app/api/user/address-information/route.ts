import dbConnect from '@/db/connectionDb';
import { getDataFromToken } from '@/lib/getDataFromToken';
import { User } from '@/model/user.model';

export async function PATCH(request: Request) {
  const userDecoded = getDataFromToken(request);
  const { street, city, postalCode, state, country } = await request.json();

  // Find the user by their ID in the database
  await dbConnect();
  try {
    const userDoc = await User.findOne({ _id: userDecoded?.id });
    if (userDoc) {
      userDoc.address.street = street;
      userDoc.address.city = city;
      userDoc.address.postalCode = postalCode;
      userDoc.address.state = state;
      userDoc.address.country = country;
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
        address: userDoc?.address,
      },
      success: true,
      status: 200,
    });
    return response;
  } catch (error) {
    throw new Error('User not found');
  }
}
