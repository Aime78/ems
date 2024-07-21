import AuthLayout from "../AuthLayout";

const LoginLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <AuthLayout>{children}</AuthLayout>
  )
}

export default LoginLayout