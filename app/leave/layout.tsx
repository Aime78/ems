import React from 'react'
import AppLayout from '../AppLayout'

const LeaveLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <AppLayout>{children}</AppLayout>
  )
}

export default LeaveLayout