import mongoose, { Schema } from 'mongoose';

export const leaveSchema: Schema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
  },
  requestedAt: {
    type: Date,
    required: true,
  },
  approvedBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  } || null,
});
