'use client';
import { useRouter } from 'next/navigation';
import axios from 'axios';
// import { signIn } from '@/app/auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { signInSchema } from '@/lib/schemaValidations';

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signInSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    try {
      setLoading(true);
      // const result = await login(values);
      // console.log(result)
      const response = await axios.post('/api/login', values);
      const { data } = response;
      console.log(data);
      router.push('/dashboard');
    } catch (error: any) {
      console.log('login failed', error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign in to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default Login;
