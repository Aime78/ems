import dbConnect from "@/db/connectionDb";
import { TempUser } from "@/model/tempUser.model";
import { User } from "@/model/user.model";
import { IUser } from "@/types/user.interface";
import { genSaltSync, hashSync } from "bcrypt-ts";

export async function POST(request: Request) {
    const body = await request.json();

    // Hash the password before saving it to the database
    const { password, userId } = body;
    if (!password) {
        return Response.json({ message: "Password is required" });
    }
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password, salt);
    

    // Save the new user and password in the users collection and remove the user in the tempUser collection from the database
    await dbConnect();
    try {
        const tempUserDoc = await TempUser.findOne({ _id: userId });
        const tempUser = tempUserDoc?.toObject();
        const user = new User({
            firstName: tempUser?.firstName,
            lastName: tempUser?.lastName,
            email: tempUser?.email,
            role: tempUser?.role,
            password: hashedPassword
        })

        await user.save();
        await tempUserDoc?.deleteOne();
        return Response.json({ message: "Password updated successfully" });
    } catch (error) {
        throw new Error("Password not updated");
    }
}