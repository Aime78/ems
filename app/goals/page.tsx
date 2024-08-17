'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { IGoal } from '@/types/goal.interface';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Goals';
    const getGoals = async () => {
      try {
        const response = await axios.get('/api/goal');
        setGoals(response.data.data);
        setLoading(false);
      } catch (error) {
        throw new Error(error as string);
      }
    };
    getGoals();
  }, []);

  return (
    <div>
      <h1 className="text-lg font-semibold md:text-2xl mb-4">Goals</h1>
      {loading ? (
        <div className="flex gap-4">
          <Skeleton className="w-1/3 h-[200px]" />
          <Skeleton className="w-1/3 h-[200px]" />
          <Skeleton className="w-1/3 h-[200px]" />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {goals?.map((goal: IGoal) => (
            <Card key={goal._id} >
              <CardHeader className="font-semibold">{goal.title}</CardHeader>
              <CardContent>{goal.description}</CardContent>
            </Card>
          ))}
          {/* <Card>
        <CardHeader>Title</CardHeader>
        <CardContent>Description</CardContent>
      </Card> */}
        </div>
      )}
    </div>
  );
};

export default Goals;
