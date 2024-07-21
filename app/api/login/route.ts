import dbConnect from '@/db/connectionDb';
import { User } from '@/model/user.model';
import { IUser } from '@/types/user.interface';
import { compareSync } from 'bcrypt-ts';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const body: Partial<IUser> = await request.json();

  const { email, password } = body;

  if (!email) {
    return Response.json({ message: 'Email is required' });
  }

  if (!password) {
    return Response.json({ message: 'Password is required' });
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
      //create token data
      // A JavaScript object (tokenData) is created to store essential user
      // information. In this case, it includes the user's unique identifier (id),
      // username, and email.
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
        message: 'Login successful',
        success: true,
      });

      // Set the token as an cookie
      response.headers.append('Set-Cookie', `token=${token}; Path=/; Max-Age=86400; SameSite=strict; Secure`);
     
      // const tokenFromCookie = cookies().get('token')?.value;
     
      // const decodedToken:any = jwt.verify(tokenFromCookie as string, process.env.TOKEN_SECRET!);
      // console.log(decodedToken);
     
      return response;
    }
  } catch (error) {
    throw new Error('User credentials not found');
  }

  return Response.json({ message: 'User credentials not found' });
}
