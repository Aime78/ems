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
import { addressInfoSchema } from '@/lib/schemaValidations';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Edit, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const AddressInfo = () => {
  const { user, setUser } = useProfile();
  const [editInfo, setEditInfo] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // set address information form default values
    addressInfoform.setValue('street', `${user?.address?.street || ' '}`);
    addressInfoform.setValue('city', `${user?.address?.city || ' '}`);
    addressInfoform.setValue(
      'postalCode',
      `${user?.address?.postalCode || ' '} `
    );
    addressInfoform.setValue('state', `${user?.address?.state || ' '}`);
    addressInfoform.setValue('country', `${user?.address?.country || ' '} `);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editInfo, user]);

  const onSubmitInfo = async (values: z.infer<typeof addressInfoSchema>) => {
    setIsSubmitting(true);
    try {
      // update address information
      const updateInfo = {
        street: values.street,
        city: values.city,
        postalCode: values.postalCode,
        state: values.state,
        country: values.country,
      };
      const res = await axios.patch(
        '/api/user/address-information',
        updateInfo
      );
      setIsSubmitting(false);
      setEditInfo(false);
      const newUser = { ...user, address: { ...user.address, ...updateInfo } };
      setUser(newUser);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      setEditInfo(false);
    }
    console.log(values);
  };

  // 1. Define your address information form.
  const addressInfoform = useForm<z.infer<typeof addressInfoSchema>>({
    resolver: zodResolver(addressInfoSchema),
    defaultValues: {
      street: '',
      city: '',
      postalCode: '',
      state: '',
      country: '',
    },
  });
  return (
    <div className="my-8">
      {/* Address information */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold">Address information</h2>
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
                onClick={addressInfoform.handleSubmit(onSubmitInfo)}
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
      <Form {...addressInfoform}>
        <form
          //   onSubmit={personalInfoform.handleSubmit(onSubmitPersonalInfo)}
          className="space-y-0 md:w-[70%] xl:60%"
        >
          <div className="flex">
            <p className="text-sm mt-10 mb-4 block">
              Street
              {!editInfo && (
                <span className="ml-[80px]">
                  {user?.address?.street || '-'}
                </span>
              )}
            </p>
            {editInfo && (
              <div className="self-end mb-2 ml-[80px]">
                <FormField
                  control={addressInfoform.control}
                  name="street"
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
              City
              {!editInfo && (
                <span className="ml-[80px]">{user?.address?.city || '-'}</span>
              )}
            </p>
            {editInfo && (
              <div className="self-end mb-2 ml-[80px]">
                <FormField
                  control={addressInfoform.control}
                  name="city"
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
              Postal Code
              {!editInfo && (
                <span className="ml-[80px]">
                  {user?.address?.postalCode || '-'}
                </span>
              )}
            </p>
            {editInfo && (
              <div className="self-end mb-2 ml-[80px]">
                <FormField
                  control={addressInfoform.control}
                  name="postalCode"
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
              State
              {!editInfo && (
                <span className="ml-[80px]">{user?.address?.state || '-'}</span>
              )}
            </p>
            {editInfo && (
              <div className="self-end mb-2 ml-[80px]">
                <FormField
                  control={addressInfoform.control}
                  name="state"
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
              Country
              {!editInfo && (
                <span className="ml-[80px]">
                  {user?.address?.country || '-'}
                </span>
              )}
            </p>
            {editInfo && (
              <div className="self-end mb-2 ml-[80px]">
                <FormField
                  control={addressInfoform.control}
                  name="country"
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

export default AddressInfo;
