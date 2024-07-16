import { userSchema } from '@/schema/user.schema';
import { IUser } from '@/types/user.interface';
import mongoose from 'mongoose';

export const User = mongoose.model<IUser>('user', userSchema, 'users');