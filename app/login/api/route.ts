import dbConnect from "@/db/connectionDb";
import { User } from "@/model/user.model";
import { IUser } from "@/types/user.interface";
import { compareSync } from "bcrypt-ts";

export async function POST(request: Request) {
  const body: Partial<IUser> = await request.json();

  const { email, password } = body;

  if (!email) {
    return Response.json({ message: "Email is required" });
  }

  if (!password) {
    return Response.json({ message: "Password is required" });
  }

  console.log(body);
  await dbConnect();

  try {
    const userDoc = await User.findOne({ email: email });
    const user = userDoc?.toObject();

    if (
      user?.email === email &&
      compareSync(password, user?.password as string)
    ) {
      return Response.json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      });
    }
  } catch (error) {
    throw new Error("User credentials not found");
  }

  return Response.json({ message: "User credentials not found" });
}
