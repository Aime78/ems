import AppLayout from "../AppLayout";

const ProfileLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <AppLayout>{children}</AppLayout>
  )
}

export default ProfileLayout