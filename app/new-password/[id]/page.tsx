'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  password: z
    .string({ required_error: 'confirm password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  confirmPassword: z
    .string({ required_error: 'confirm password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

const NewPassword = () => {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'New Password';
  }, []);
  
  //   // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  //   // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { id } = params;
    // ✅ This will be type-safe and validated.

    try {
      setLoading(true);
      // const result = await login(values);
      const response = await axios.post('/api/new-password', {
        userId: id,
        password: values.password,
      });
      const { data } = response;
      router.push('/dashboard');
    } catch (error: any) {
      throw new Error(error as string);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Set up a new account</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input placeholder="confirm password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Create account
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default NewPassword;
