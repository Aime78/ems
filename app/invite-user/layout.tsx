import AppLayout from "../AppLayout";

const InviteUserLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <AppLayout>{children}</AppLayout>
  )
}

export default InviteUserLayout