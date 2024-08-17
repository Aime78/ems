'use client';
import { useEffect, useState } from 'react';
import AppLayout from '../AppLayout';
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
import { IAttendance } from '@/types/attendance.interface';
import { formatDate, getTime } from '@/lib/getTime';
const Attendance = () => {
  const [attendance, setAttendance] = useState<Partial<IAttendance>[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Attendance';
    const getAttendance = async () => {
      try {
        const response = await axios.get('/api/attendance');
        setAttendance(response.data.data);
        setLoading(false);
      } catch (error) {
        throw new Error(error as string);
      }
    };
    getAttendance();
  }, []);

  return (
    <>
      <h1 className="text-lg font-semibold md:text-xl ml-2 mb-4">Attendance</h1>
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
              <TableHead>Date</TableHead>
              <TableHead>Clock In</TableHead>
              <TableHead>Clock Out</TableHead>
              <TableHead>Daily</TableHead>
              <TableHead>Weekly</TableHead>
              <TableHead>Overtime</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendance.map((attendance) => (
              <TableRow key={attendance?._id}>
                <TableCell>{`${attendance?.user?.firstName} ${attendance?.user?.lastName}`}</TableCell>
                <TableCell>{formatDate(attendance?.date)}</TableCell>
                <TableCell>{getTime(attendance?.clockIn)}</TableCell>
                <TableCell>{getTime(attendance?.clockOut)}</TableCell>
                <TableCell>{attendance?.dailyHoursWorked}</TableCell>
                <TableCell>{attendance?.weeklyHoursWorked}</TableCell>
                <TableCell>{attendance?.overtimeHours}</TableCell>
                <TableCell>{attendance?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default Attendance;
