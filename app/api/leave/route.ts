import dbConnect from '@/db/connectionDb';
import { getDataFromToken } from '@/lib/getDataFromToken';
import { formatDate } from '@/lib/getTime';
import { Leave } from '@/model/leave.model';
import { User } from '@/model/user.model';

export async function POST(request: Request) {
  const userDecoded = getDataFromToken(request);
  const { startDate, endDate, reason } = await request.json();

  // Find the user by their ID in the database
  await dbConnect();
  const userDoc = await User.findOne({ _id: userDecoded?.id });
  try {
    const leave = new Leave({
      user: userDoc?._id,
      startDate: startDate,
      endDate: endDate,
      status: 'pending',
      requestedAt: new Date(),
      approvedBy: null,
      reason,
    });
    await leave.save();
    return Response.json({
      data: leave,
      success: true,
      status: 200,
    });
  } catch (error) {
    throw new Error('Leave not created');
  }
}
