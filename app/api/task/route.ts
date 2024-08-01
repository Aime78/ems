import dbConnect from '@/db/connectionDb';
import { getDataFromToken } from '@/lib/getDataFromToken';
import { Task } from '@/model/task.model';
import { User } from '@/model/user.model';

export async function POST(request: Request) {
  const userDecoded = getDataFromToken(request);
  const { title, description, priority, status, assignedTo } =
    await request.json();

  // Find the user by their ID in the database
  await dbConnect();
  const userDoc = await User.findOne({ _id: userDecoded?.id });
  try {
    const task = new Task({
      createdBy: userDoc?._id,
      title: title,
      description: description,
      priority: priority,
      status: status,
      assignedTo: assignedTo || null,
      createdAt: new Date(),
    });
      await task.save();
    return Response.json({
      data: task,
      success: true,
      status: 200,
    });
  } catch (error) {
    throw new Error('Task not created');
  }
}

export async function GET(request: Request) {

    await dbConnect();
    try {
      const taskDoc = await Task.find({}).populate('createdBy', 'firstName lastName');
      return Response.json({
        data: taskDoc,
        success: true,
        status: 200,
      })
    } catch (error) {
      throw new Error('Task not found');
    }
  }