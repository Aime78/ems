export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  title: string;
  department: string;
  hireDate: string;
  manager: string;

  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;

    skills: string[];
  };
}
