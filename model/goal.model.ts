import { goalSchema } from "@/schema/goal.schema";
import { IGoal } from "@/types/goal.interface";
import mongoose from "mongoose";

export const Goal = mongoose.model<IGoal>('goal', goalSchema, 'goals')