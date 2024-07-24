import { leaveSchema } from '@/schema/leave.schema';
import { ILeave } from '@/types/leave.interface';
import mongoose from 'mongoose';

export const Leave = mongoose.model<ILeave>('leave', leaveSchema, 'leaves');
