'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useProfile } from '@/hooks/useProfile';
import { addressInfoSchema, jobInfoSchema } from '@/lib/schemaValidations';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Edit, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const JobInfo = () => {
  const { user, setUser } = useProfile();
  const [editInfo, setEditInfo] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // set job information form default values
    jobInfoform.setValue('title', `${user?.title || ' '}`);
    jobInfoform.setValue('department', `${user?.department || ' '}`);
    jobInfoform.setValue('manager', `${user?.manager || ' '} `);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editInfo, user]);

  const onSubmitInfo = async (values: z.infer<typeof jobInfoSchema>) => {
    setIsSubmitting(true);
    try {
      // update address information
      const updateInfo = {
        title: values.title,
        department: values.department,
        manager: values.manager,
      };
      const res = await axios.patch('/api/user/job-information', updateInfo);
      setIsSubmitting(false);
      setEditInfo(false);
      setUser({ ...user, ...updateInfo });
    } catch (error) {
      setIsSubmitting(false);
      setEditInfo(false);
    }
  };

  // 1. Define your job information form.
  const jobInfoform = useForm<z.infer<typeof jobInfoSchema>>({
    resolver: zodResolver(jobInfoSchema),
    defaultValues: {
      title: '',
      department: '',
      manager: '',
    },
  });
  return (
    <div className="my-8">
      {/* Job information */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold">Job information</h2>
        {editInfo ? (
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setEditInfo(false)}
            >
              Cancel
            </Button>
            {isSubmitting ? (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving
              </Button>
            ) : (
              <Button
                size="sm"
                className="ml-2"
                onClick={jobInfoform.handleSubmit(onSubmitInfo)}
              >
                Save
              </Button>
            )}
          </div>
        ) : (
          <Button variant="outline" size="sm" onClick={() => setEditInfo(true)}>
            <span className="mr-2">Edit</span>
            <Edit className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...jobInfoform}>
        <form
            onSubmit={jobInfoform.handleSubmit(onSubmitInfo)}
          className="space-y-0 md:w-[70%] xl:60%"
        >
          <div className="flex">
            <p className="text-sm mt-10 mb-4 block">
              Title
              {!editInfo && (
                <span className="ml-[80px]">{user?.title || '-'}</span>
              )}
            </p>
            {editInfo && (
              <div className="border-2 self-end mb-2 ml-[80px]">
                <FormField
                  control={jobInfoform.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>
          <div className="flex ">
            <p className="text-sm mt-10 mb-4 block">
              Department
              {!editInfo && (
                <span className="ml-[80px]">{user?.department || '-'}</span>
              )}
            </p>
            {editInfo && (
              <div className="self-end mb-2 ml-[80px]">
                <FormField
                  control={jobInfoform.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>
          <div className="flex ">
            <p className="text-sm mt-10 mb-4 block">
              Manager
              {!editInfo && (
                <span className="ml-[80px]">{user?.manager || '-'}</span>
              )}
            </p>
            {editInfo && (
              <div className="self-end mb-2 ml-[80px]">
                <FormField
                  control={jobInfoform.control}
                  name="manager"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default JobInfo;
