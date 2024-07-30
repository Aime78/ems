import { IUser } from "./user.interface";

export interface ISalary {
    _id?: string;
    user: Partial<IUser>;
    payPeriodStart: string;
    payPeriodEnd: string;
    salary: number;
    bonus: number;
    deductions: number;
    netPay: number;
    generatedAt: Date;
}