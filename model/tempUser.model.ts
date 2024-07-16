import { tempUserSchema } from "@/schema/tempUser.schema";
import { IUser } from "@/types/user.interface";
import mongoose from "mongoose";

export const TempUser = mongoose.model<Partial<IUser>>(
  "tempUser",
  tempUserSchema,
  "tempUsers"
);
