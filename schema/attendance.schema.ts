import mongoose, { Schema } from 'mongoose';

export const attendanceSchema: Schema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  date: {
    type: Date,
    required: true,
  },
  clockIn: {
    type: Date,
    required: true,
  },
  clockOut: {
    type: Date,
    required: true,
  },
  dailyHoursWorked: {
    type: Number,
    required: true,
  },
  weeklyHoursWorked: {
    type: Number,
    required: true,
  },
  overtimeHours: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
