import dbConnect from '@/db/connectionDb';
import { getDataFromToken } from '@/lib/getDataFromToken';
import { User } from '@/model/user.model';

export async function GET(request: Request) {
  const userDecoded = getDataFromToken(request);

  // Find the user by their ID in the database
  await dbConnect();
  try {
    const userDoc = await User.findOne({ _id: userDecoded?.id });
    const user = userDoc?.toObject();

    const response = Response.json({
      data: {
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        phone: user?.phone,
        role: user?.role,
        skills: user?.skills || [],
        address: user?.address,
      },
      success: true,
      status: 200,
    });
    return response;
  } catch (error) {
    throw new Error('User not found');
  }
}
