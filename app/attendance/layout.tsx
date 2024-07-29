import AppLayout from '../AppLayout';

const AttendanceLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AppLayout>{children}</AppLayout>;
};

export default AttendanceLayout;
