import AppLayout from '../AppLayout';

const TaskLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AppLayout>{children}</AppLayout>;
};

export default TaskLayout;
