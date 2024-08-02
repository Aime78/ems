import dbConnect from '@/db/connectionDb';
import { getDataFromToken } from '@/lib/getDataFromToken';
import { User } from '@/model/user.model';

export async function GET(request: Request) {
  const params = new URLSearchParams(request.url.split('?')[1]);
  const userId = params.get('id');


  // Find the user by their ID in the database
  await dbConnect();
  try {
    const userDoc = await User.findOne({ _id: userId});
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
