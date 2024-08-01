'use client';
import { useEffect, useState } from 'react';
import AppLayout from '../AppLayout';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import axios from 'axios';
import { IUser } from '@/types/user.interface';
import { Skeleton } from '@/components/ui/skeleton';

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <AppLayout>
      <h1 className="text-lg font-semibold md:text-xl ml-2 mb-4">Users</h1>
      {loading ? (
        <>
          <Skeleton className="w-full h-[50px]" />
          <Skeleton className="w-full h-[500px] mt-2" />
        </>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Manager</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user?._id}>
                <TableCell>{`${user?.firstName} ${user?.lastName}`}</TableCell>
                <TableCell>{user?.lastName}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.phone || '-'}</TableCell>
                <TableCell>{user?.department}</TableCell>
                <TableCell>{user?.manager}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </AppLayout>
  );
};

export default Users;
