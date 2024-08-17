'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { ISalary } from '@/types/salary.interface';
import { ITask } from '@/types/task.interface';
import { getTime } from '@/lib/getTime';
const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Task';
    const getTasks = async () => {
      try {
        const response = await axios.get('/api/task');
        setTasks(response.data.data);

        setLoading(false);
      } catch (error) {
        throw new Error(error as string);
      }
    };
    getTasks();
  }, []);
  return (
    <>
      <h1 className="text-lg font-semibold md:text-xl ml-2 mb-4">Tasks</h1>
      {loading ? (
        <>
          <Skeleton className="w-full h-[50px]" />
          <Skeleton className="w-full h-[500px] mt-2" />
        </>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="text-sm">
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Assigned</TableHead>
              <TableHead>Created by</TableHead>
              <TableHead>Created at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task: ITask) => (
              <TableRow key={task?._id}>
                <TableCell className="max-w-[150px] truncate">
                  {task?.title}
                </TableCell>
                <TableCell className="max-w-[150px] truncate">
                  {task?.description}
                </TableCell>
                <TableCell>{task?.status}</TableCell>
                <TableCell>{task?.priority}</TableCell>
                <TableCell>{task?.assignedTo?.firstName || '-'}</TableCell>
                <TableCell>{task?.createdBy?.firstName}</TableCell>
                <TableCell>{getTime(task?.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default Task;
