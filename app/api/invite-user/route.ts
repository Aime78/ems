import dbConnect from "@/db/connectionDb";
import { sendMail } from "@/lib/mail";
import { TempUser } from "@/model/tempUser.model";
import { IUser } from "@/types/user.interface";

export async function POST(request: Request) {
  const body: Partial<IUser> = await request.json();

  // Check that all required fields are there
  const { firstName, lastName, email, role, title, department, manager } = body;
  if (!firstName || !lastName) {
    return Response.json({ message: "Names are required" });
  }

  if (!email) {
    return Response.json({ message: "email is required" });
  }
  if (!role) {
    return Response.json({ message: "role is required" });
  }

  // Save the user in the temporary user collection before the confirm their email
  await dbConnect();
  const tempUser = new TempUser({
    firstName,
    lastName,
    email,
    role,
    title,
    department,
    manager,
  });
  try {
    await tempUser.save();
  } catch (error) {
    throw new Error("User not created");
  }
  // Send a confirmation email to the new user
  try {
   
    const tempUserDoc = await TempUser.findOne({ email: email });
    const tempUserObj = tempUserDoc?.toObject();
    const userId = tempUserObj?._id;

    await sendMail({
      to: email,
      subject: "verify your email!",
      body: `
      <div>
      <p style='margin-bottom: 20px'>Hey ${
        firstName.charAt(0).toUpperCase() + firstName.slice(1)
      }</p>
      <p style='margin-bottom: 20px'>You are welcome to our platform! Just click the button below and
      you’ll be on your way.</p>
      <button style="background-color: #18181B; padding: 10px 20px; border-radius: 4px; border: none; color:white">
          <a style="text-decoration: none; color: white; font-weight: 600" href=${
            process.env.domain
          }/new-password/${userId}>Verify email</a>
      </button>
      </div>
      `,
    });
  } catch (error) {
    throw new Error("Email not sent");
  }

  // Add the user to the database

  return Response.json({ message: "Invite user" });
}
