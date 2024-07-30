import { IUser } from './user.interface';

export interface ITask {
  _id?: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  assignedTo: Partial<IUser>;
  createdBy: Partial<IUser>;
  createdAt: Date;
}
