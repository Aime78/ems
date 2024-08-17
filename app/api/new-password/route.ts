import dbConnect from '@/db/connectionDb';
import { TempUser } from '@/model/tempUser.model';
import { User } from '@/model/user.model';
import { IUser } from '@/types/user.interface';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  const body = await request.json();

  // Hash the password before saving it to the database
  const { password, userId } = body;
  if (!password) {
    return Response.json({ message: 'Password is required' });
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
      title: tempUser?.title,
      department: tempUser?.department,
      manager: tempUser?.manager,
      phone: null,
      password: hashedPassword,
      skills: [],
      address: {
        street: null,
        city: null,
        state: null,
        postalCode: null,
        country: null,
      },
    });

    await user.save();
    await tempUserDoc?.deleteOne();

    const tokenData = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };
    // Create a token with expiration of 1 day
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: '1d',
    });
    const response = Response.json({
      data: token,
      message: 'Account created successfully',
      success: true,
      status: 201,
    });

    // Set the token as an cookie
    response.headers.append(
      'Set-Cookie',
      `token=${token}; Path=/; Max-Age=86400; SameSite=strict; Secure`
    );

    return response;
  } catch (error) {
    throw new Error('Password not updated');
  }
}
