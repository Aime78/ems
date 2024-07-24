import dbConnect from '@/db/connectionDb';
import { getDataFromToken } from '@/lib/getDataFromToken';
import { User } from '@/model/user.model';

export async function GET(request: Request) {

  // Find the user by their ID in the database
  await dbConnect();
  try {
    const usersDoc = await User.find({ });
    const users = usersDoc?.map((user) => ({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      skills: user.skills || [],
      address: user.address,
      phone: user.phone,
      department: user.department,
      manager: user.manager,
    })
    
    );
    // const users = usersDoc?.toObject();

    const response = Response.json({
      data: users,
      success: true,
      status: 200,
    });
    return response;
  } catch (error) {
    throw new Error('User not found');
  }
}
