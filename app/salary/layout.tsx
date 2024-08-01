import AppLayout from "../AppLayout";

const SalaryLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <AppLayout>{children}</AppLayout>
  )
}

export default SalaryLayout