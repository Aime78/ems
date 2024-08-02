import { IUser } from '@/types/user.interface';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useProfile = () => {
  const [user, setUser] = useState<Partial<IUser>>({});

  useEffect(() => {
    const value = document.cookie;
    const parts = value.split('=');
    const userString = parts[2];
    const user = JSON.parse(userString);

    const getUser = async () => {
      try {
        const response = await axios.get(`/api/user?id=${user?.id}`);
        setUser(response.data.data);
      } catch (error) {
        throw new Error(error as string);
      }
    };
    getUser();
  }, []);

  return {
    user,
    setUser,
  };
};
