'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { Skeleton } from '@/components/ui/skeleton';
import { chartConfig } from '@/lib/chartConfig';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [totals, setTotals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Dashboard'
    const getData = async () => {
      try {
        const response = await axios.get('/api/productivity-data');
        setData(response.data.chartData);
        setTotals(response.data.totals);
        setLoading(false);
      } catch (error) {
        throw new Error(error as string);
      }
    };
    getData();
  }, []);
  return (
    <>
      <h1 className="text-lg font-semibold md:text-xl ml-2 mb-4">Dashboard</h1>
      {loading ? (
        <div className="flex gap-4">
          <Skeleton className="w-1/3 h-[200px]" />
          <Skeleton className="w-1/3 h-[200px]" />
          <Skeleton className="w-1/3 h-[200px]" />
        </div>
      ) : (
        <div className="flex gap-4">
          {totals?.map((total: any) => (
            <Card className="w-1/3" key={total?._id}>
              <CardHeader className="py-4">
                <div>
                  <h2 className="text-sm my-0 py-0 font-semibold">
                    {total?.title}
                  </h2>
                </div>
              </CardHeader>
              <CardContent className="">
                <p className="text-2xl font-bold">{total?.number}</p>
                <p className="text-xs">{total?.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      {loading ? (
        <Skeleton className="w-full h-[300px] mt-4" />
      ) : (
        <div className="flex gap-4">
          <div className="mt-4 xl:w-1/2">
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] w-full"
            >
              <BarChart accessibilityLayer data={data || []}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar
                  dataKey="hoursWorked"
                  fill="var(--color-desktop)"
                  radius={4}
                />
                <Bar
                  dataKey="hoursNotWorked"
                  fill="var(--color-mobile)"
                  radius={4}
                />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="mt-4 xl:w-1/2">
            <Card>
              <CardHeader className="flex">
                <h2 className="font-bold py-0 my-0">Recent salaries</h2>
                <p className="text-sm py-0 my-0">
                  You made 32 recent salaries transactions
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-sm font-semibold">Roberto Marchetti</h2>
                    <p className="text-sm">robertomarchetti@gmail.com</p>
                  </div>
                  <p className="text-xl font-bold block">&euro;3250</p>
                </div>
              </CardContent>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-sm font-semibold">Giovanni Moretti</h2>
                    <p className="text-sm">giovannimoretti@gmail.com</p>
                  </div>
                  <p className="text-xl font-bold block">&euro;6600</p>
                </div>
              </CardContent>
              <CardContent>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-sm font-semibold">Emily Davis</h2>
                    <p className="text-sm">emilydavis@gmail.com</p>
                  </div>
                  <p className="text-xl font-bold block">&euro;6000</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
