'use client';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'first name must be at least 2 characters.',
  }),

  lastName: z.string().min(2, {
    message: 'last name must be at least 2 characters.',
  }),
  email: z.string().min(2, {
    message: 'email must be at least 2 characters.',
  }),
  title: z.string().min(2, {
    message: 'title must be at least 2 characters.',
  }),
  department: z.string().min(2, {
    message: 'department must be at least 2 characters.',
  }),
  manager: z.string().min(2, {
    message: 'manager must be at least 2 characters.',
  }),
  role: z.string({
    required_error: 'Please select a role.',
  }),
});

const InviteUser = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      title: '',
      department: '',
      manager: '',
    },
  });

  useEffect(() => {
    document.title = 'Invite user'
  }, []);

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsSubmitting(true);
    try {
      const response = await axios.post('api/invite-user', values);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
    }
    form.reset();
  }
  return (
    <>
      <div className="">
        <div className="">
          <h1 className="text-lg font-semibold md:text-2xl">Invite user</h1>
          <p className="font-regular text-sm my-2">
            These are the main informations we need from the user you are going
            to invite
          </p>
        </div>
        <div className='rounded-lg shadow-sm" x-chunk="dashboard-02-chunk-1 md:my-12 md:py-4'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 md:w-[70%] xl:60%"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                    <FormDescription>
                      This is the email that will need to be verified.
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Junior" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <FormControl>
                      <Input placeholder="Service centre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="manager"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Manager</FormLabel>
                    <FormControl>
                      <Input placeholder="Joe Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full my-6">
                          <SelectValue placeholder="Select the role of the user to invite" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="admin">Administrator</SelectItem>
                        <SelectItem value="employee">Employee</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      The role will determine the access level the user will get{' '}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Select>
                <SelectTrigger className="w-full my-6">
                  <SelectValue placeholder="Select the role of the user to invite" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrator</SelectItem>
                  <SelectItem value="employee">Employee</SelectItem>
                </SelectContent>
              </Select> */}
              {isSubmitting ? (
                <Button disabled className="w-32">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading
                </Button>
              ) : (
                <div className="mt-6">
                  <Button type="submit" className="w-32">
                    Send Invite
                  </Button>
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default InviteUser;
