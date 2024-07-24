import { object, string } from 'zod';

export const signInSchema = object({
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export const personalInfoSchema = object({
  name: string({ required_error: 'names are required' }).min(
    1,
    'names are required'
  ),
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  phone: string({ required_error: 'Phone is required' })
    .min(4, 'Phone must be more than 10 characters')
    .max(11, 'Phone must be less than 11 characters'),
  role: string({ required_error: 'Role is required' }).min(
    1,
    'Role is required'
  ),
 skills: string({ required_error: 'Skills are required' }).min(
    1,
    'Skills are required'
  ),
});

export const addressInfoSchema = object({
  street: string({ required_error: 'street are required' }).min(
    1,
    'street is required'
  ),
  city: string({ required_error: 'City is required' })
    .min(1, 'Cuty is required')
    ,
  state: string({ required_error: 'State is required' }).min(
    1,
    'State is required'
  ),
  postalCode: string({ required_error: 'Postal code is required' }).min(
    1,
    'Postal code is required'
  ),
 country: string({ required_error: 'country are required' }).min(
    1,
    'country are required'
  ),
});

export const jobInfoSchema = object({
  title: string({ required_error: 'title is required' }).min(
    1,
    'title is required'
  ),
  department: string({ required_error: 'department is required' })
    .min(1, 'department is required')
    ,
  manager: string({ required_error: 'manager is required' }).min(
    1,
    'manager is required'
  ),
});