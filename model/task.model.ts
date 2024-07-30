import { taskSchema } from '@/schema/task.schema';
import mongoose from 'mongoose';

export const Task = mongoose.model('task', taskSchema, 'tasks');
