import AppLayout from '../AppLayout';
import UserLayout from '../UserLayout';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (false? <AppLayout>{children}</AppLayout> : <UserLayout>{children}</UserLayout>);
};

export default DashboardLayout;
