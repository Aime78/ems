import AppLayout from '../AppLayout';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AppLayout>{children}</AppLayout>;
};

export default DashboardLayout;
