import AppLayout from '../AppLayout';

const GoalsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AppLayout>{children}</AppLayout>;
};

export default GoalsLayout;
