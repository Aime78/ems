'use client';
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import axios from 'axios';
import { Skeleton } from '@/components/ui/skeleton';
import { formatDate, getTime } from '@/lib/getTime';
import { ILeave } from '@/types/leave.interface';

const Leave = () => {
  const [leave, setLeave] = useState<Partial<ILeave>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Leave';
    const getLeave = async () => {
      try {
        const response = await axios.get('/api/leave');
        setLeave(response.data.data);
        setLoading(false);
      } catch (error) {
        throw new Error(error as string);
      }
    };
    getLeave();
  }, []);
  return (
    <>
      <h1 className="text-lg font-semibold md:text-xl ml-2 mb-4">Leave</h1>
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
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>requested At</TableHead>
              <TableHead>status</TableHead>
              <TableHead>reason</TableHead>
              <TableHead>Approved By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leave.map((leave) => (
              <TableRow key={leave?._id}>
                <></>
                <TableCell>{`${leave?.user?.firstName} ${leave?.user?.lastName}`}</TableCell>
                <TableCell>{formatDate(leave?.startDate) || '-'}</TableCell>
                <TableCell>{formatDate(leave?.endDate) || '-'}</TableCell>{' '}
                <TableCell>{getTime(leave?.requestedAt)}</TableCell>
                <TableCell>{leave?.status}</TableCell>
                <TableCell>{leave?.reason}</TableCell>
                <TableCell>{(leave?.approvedBy as string) || '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default Leave;
