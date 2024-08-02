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
const Salary = () => {
  const [salaries, setSalaries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Salary';
    const getSalaries = async () => {
      try {
        const response = await axios.get('/api/salary');
        setSalaries(response.data.data);
        setLoading(false);
      } catch (error) {
        throw new Error(error as string);
      }
    };
    getSalaries();
  }, []);
  return (
    <>
      <h1 className="text-lg font-semibold md:text-xl ml-2 mb-4">Salary</h1>
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
              <TableHead>Salary</TableHead>
              <TableHead>Start</TableHead>
              <TableHead>End</TableHead>
              <TableHead>Bonus</TableHead>
              <TableHead>Net pay</TableHead>
              <TableHead>Deductions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salaries.map((salary: ISalary) => (
              <TableRow key={salary?._id}>
                <TableCell>{`${salary?.user?.firstName} ${salary?.user?.lastName}`}</TableCell>
                <TableCell>{salary?.salary}</TableCell>
                <TableCell>{salary?.payPeriodStart}</TableCell>
                <TableCell>{salary?.payPeriodEnd}</TableCell>
                <TableCell>{salary?.bonus}</TableCell>
                <TableCell>{salary?.netPay}</TableCell>
                <TableCell>{salary?.deductions}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default Salary;
