export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;

  contactInfo: {
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };

    jobInfo: {
      title: string;
      department: string;
      hireDate: string;
      manager: string;
    };
    skills: string[];
  };
}
