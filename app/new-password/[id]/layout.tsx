import AuthLayout from '@/app/AuthLayout';

const NewPasswordLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default NewPasswordLayout;
