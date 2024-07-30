import dbConnect from '@/db/connectionDb';
import { getDataFromToken } from '@/lib/getDataFromToken';
import { Goal } from '@/model/goal.model';
import { User } from '@/model/user.model';

export async function POST(request: Request) {
  const userDecoded = getDataFromToken(request);
  const { title, description } = await request.json();

  // Find the user by their ID in the database
  await dbConnect();
  const userDoc = await User.findOne({ _id: userDecoded?.id });
  try {
    const goal = new Goal({
      createdBy: userDoc?._id,
      title: title,
      description: description,
    });
    await goal.save();
    return Response.json({
      data: goal,
      success: true,
      status: 200,
    });
  } catch (error) {
    throw new Error('Goal not created');
  }
}

export async function GET(request: Request) {
  await dbConnect();
  try {
    const goalDoc = await Goal.find({}).populate('createdBy', 'firstName lastName');
    return Response.json({
      data: goalDoc,
      success: true,
      status: 200,
    });
  } catch (error) {
    throw new Error('Goal not found');
  }
}
