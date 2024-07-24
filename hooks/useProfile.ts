import { IUser } from '@/types/user.interface';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useProfile = () => {
  const [user, setUser] = useState<Partial<IUser>>({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('/api/user');
        setUser(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return {
    user,
    setUser,
  };
};
