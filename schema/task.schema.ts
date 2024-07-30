import mongoose, { Schema } from 'mongoose';

export const taskSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
  },
  assignedTo:
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
    } || null,
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  createdAt: {
    type: Date,
    required: true,
  },
});
