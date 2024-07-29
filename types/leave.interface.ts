import { IUser } from './user.interface';

export interface ILeave {
  _id?: string;
  user: Partial<IUser>;
  startDate: string;
  endDate: string;
  reason: string;
  status: string;
  requestedAt: Date;
  approvedBy: Partial<IUser>;
}
