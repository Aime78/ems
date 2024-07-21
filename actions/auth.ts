import { cookies } from 'next/headers';

export const isAuthenticated = () => {
  const tokenFromCookie = cookies().get('token')?.value;
  return !!tokenFromCookie;
};

