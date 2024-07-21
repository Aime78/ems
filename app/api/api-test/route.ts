import dbConnect from "@/db/connectionDb";
import { User } from "@/model/user.model";

export async function GET() {
    await dbConnect();
    const user = await User.find();
    return Response.json(user)
}
