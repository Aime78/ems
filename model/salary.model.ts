import { salarySchema } from "@/schema/salary.schema";
import { ISalary } from "@/types/salary.interface";
import mongoose from 'mongoose';

export const Salary = mongoose.model<ISalary>('salary', salarySchema, 'salaries')