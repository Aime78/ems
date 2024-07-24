import { attendanceSchema } from '@/schema/attendance.schema';
import { IAttendance } from '@/types/attendance.interface';
import mongoose from 'mongoose';

export const Attendance = mongoose.model<IAttendance>(
  'attendance',
  attendanceSchema,
  'attendances'
);
