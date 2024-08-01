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
import { personalInfoSchema } from '@/lib/schemaValidations';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Edit, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const PersonalInfo = () => {
  const { user, setUser } = useProfile();
  const [editPersonalInfo, setEditPersonalInfo] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    // set personal information form default values
    personalInfoform.setValue('name', `${user?.firstName} ${user?.lastName}`);
    personalInfoform.setValue('email', `${user?.email}`);
    personalInfoform.setValue('phone', `${user?.phone || ' '} `);
    personalInfoform.setValue('role', `${user.role}`);
    personalInfoform.setValue(
      'skills',
      `${
        user?.skills?.map((skill: string, index) => {
          if (index < user?.skills?.length! - 1) {
            return `${skill} `;
          }
          return skill;
        }) || ' '
      } `
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editPersonalInfo, user]);

  const onSubmitPersonalInfo = async (
    values: z.infer<typeof personalInfoSchema>
  ) => {
    setIsSubmitting(true);
    try {
      // update personal information
      const updateInfo = {
        firstName: values.name.split(' ')[0],
        lastName: values.name.split(' ')[1],
        email: values.email,
        phone: values.phone,
        role: values.role,
        skills: values.skills.split(',').map((skill) => skill.trim()),
      };
      const res = await axios.patch(
        '/api/user/personal-information',
        updateInfo
      );

      setIsSubmitting(false);
      setEditPersonalInfo(false);
      setUser({ ...user, ...updateInfo });
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      setEditPersonalInfo(false);
    }
    console.log(values);
  };

  // 1. Define your personal information form.
  const personalInfoform = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      role: '',
      skills: '',
    },
  });
  return (
    <div className="my-8">
      {/* Personal information */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold">Personal information</h2>
        {editPersonalInfo ? (
          <div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setEditPersonalInfo(false)}
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
                onClick={personalInfoform.handleSubmit(onSubmitPersonalInfo)}
              >
                Save
              </Button>
            )}
          </div>
        ) : (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setEditPersonalInfo(true)}
          >
            <span className="mr-2">Edit</span>
            <Edit className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...personalInfoform}>
        <form
          //   onSubmit={personalInfoform.handleSubmit(onSubmitPersonalInfo)}
          className="space-y-0 md:w-[70%] xl:60%"
        >
          <div className="flex">
            <p className="text-sm mt-10 mb-4 block ">
              Name
              {!editPersonalInfo && (
                <span className="ml-[80px]">
                  {user?.firstName} {user?.lastName}
                </span>
              )}
            </p>
            {editPersonalInfo && (
              <div className=" self-end mb-2 ml-[80px]">
                <FormField
                  control={personalInfoform.control}
                  name="name"
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
          <div className="flex  ">
            <p className="text-sm mt-10 mb-4 block ">
              Email
              {!editPersonalInfo && (
                <span className="ml-[80px]">{user?.email}</span>
              )}
            </p>
            {editPersonalInfo && (
              <div className=" self-end mb-2 ml-[80px]">
                <FormField
                  control={personalInfoform.control}
                  name="email"
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
          <div className="flex  ">
            <p className="text-sm mt-10 mb-4 block ">
              Phone
              {!editPersonalInfo && (
                <span className="ml-[80px]">{user?.phone || '-'}</span>
              )}
            </p>
            {editPersonalInfo && (
              <div className=" self-end mb-2 ml-[80px]">
                <FormField
                  control={personalInfoform.control}
                  name="phone"
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
          <div className="flex  ">
            <p className="text-sm mt-10 mb-4 block ">
              Role
              {!editPersonalInfo && (
                <span className="ml-[80px]">{user?.role}</span>
              )}
            </p>
            {editPersonalInfo && (
              <div className=" self-end mb-2 ml-[80px]">
                <FormField
                  control={personalInfoform.control}
                  name="role"
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
          <div className="flex  ">
            <p className="text-sm mt-10 mb-4 block ">
              Skills
              {!editPersonalInfo && (
                <span className="ml-[80px]">
                  {user?.skills?.map((skill: string, index) => {
                    if (index < user?.skills?.length! - 1) {
                      return `${skill}, `;
                    }
                    return skill;
                  })}
                </span>
              )}
            </p>
            {editPersonalInfo && (
              <div className=" self-end mb-2 ml-[80px]">
                <FormField
                  control={personalInfoform.control}
                  name="skills"
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

export default PersonalInfo;
