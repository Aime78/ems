import { IUser } from "./user.interface";

export interface IAttendance {
  _id?: string;
  user: Partial<IUser>;
  firstName: string;
  lastName: string;
  date: Date ;
  clockIn: Date;
  clockOut: Date;
  dailyHoursWorked: number;
  weeklyHoursWorked: number;
  overtimeHours: number;
  status: string;
}
