import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
export const getDataFromToken = (request: Request) => {
  try {
    // Retrieve the token from the cookies
    const token = cookies().get('token')?.value;
    // const token = request.cookies.get("token")?.value || '';

    // Verify and decode the token using the secret key
    const decodedToken: any = jwt.verify(
      token as string,
      process.env.TOKEN_SECRET!
    );

    // const tokenFromCookie = cookies().get('token')?.value;

    // const decodedToken:any = jwt.verify(tokenFromCookie as string, process.env.TOKEN_SECRET!);

    // Return the user ID from the decoded token
    return decodedToken;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

