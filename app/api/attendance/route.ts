import dbConnect from '@/db/connectionDb';
import { getDataFromToken } from '@/lib/getDataFromToken';
import { Attendance } from '@/model/attendance.model';
import { User } from '@/model/user.model';

export async function POST(request: Request) {
  const userDecoded = getDataFromToken(request);
  const { dailyHoursWorked, weeklyHoursWorked, overtimeHours, status } =
    await request.json();
    
  // Find the user by their ID in the database
  await dbConnect();
  const userDoc = await User.findOne({ _id: userDecoded?.id });
  try {
    const newAttendance = new Attendance({
      user: userDoc?._id,
      date: new Date(),
      clockIn: new Date(),
      clockOut: new Date(),
      dailyHoursWorked: 8,
      weeklyHoursWorked: 40,
      overtimeHours: 0,
      status: 'present',
    });
    await newAttendance.save();
    return Response.json({
      data: newAttendance,
      success: true,
      status: 200,
    });
  } catch (error) {
    throw new Error('Attendance not created');
  }
}

export async function GET(request: Request) {

  await dbConnect();
  try {
    const attendanceDoc = await Attendance.find({}).populate('user', 'firstName lastName');
    return Response.json({
      data: attendanceDoc,
      success: true,
      status: 200,
    });
  } catch (error) {
    throw new Error('Attendance not found');
  }
}
