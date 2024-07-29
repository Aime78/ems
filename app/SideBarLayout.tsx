'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Home,
  LineChart,
  Infinity,
  Users,
  Send,
  Timer,
  TimerOff,
  Target,
  Axis3D,
  Calculator,
  List,
  RefreshCw,
  CalendarCheck2,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const SideBarLayout = () => {
  const pathname = usePathname();
  console.log(pathname);
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Infinity className="h-6 w-6" />
            <span>EMS</span>
          </Link>
        </div>
        <div className="flex-1">
          <ScrollArea className="h-[450px] 2xl:h-full">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <h1 className="text-lg font-semibold 2xl:text-xl px-3 mt-2">
                Overview
              </h1>
              <Link
                href="/dashboard"
                className={`${
                  isActive('/dashboard') ? 'bg-muted text-primary' : ''
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="users"
                className={`${
                  isActive('/users') ? 'bg-muted text-primary' : ''
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <Users className="h-4 w-4" />
                Users
              </Link>
              <Link
                href="/invite-user"
                className={`${
                  isActive('/invite-user') ? 'bg-muted text-primary' : ''
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <Send className="h-4 w-4" />
                Invite user{' '}
              </Link>

              <h1 className="text-lg font-semibold 2xl:text-xl px-3 mt-4 mb-2 ">
                Employee Management
              </h1>
              <Link
                href="/attendance"
                className={`${
                  isActive('/attendance') ? 'bg-muted text-primary' : ''
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <Timer className="h-4 w-4" />
                Attendance
              </Link>
              <Link
                href="/leave"
                className={`${
                  isActive('/leave') ? 'bg-muted text-primary' : ''
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <TimerOff className="h-4 w-4" />
                Leave tracking
              </Link>
              <Link
                href="#"
                className={`${
                  isActive('/goals') ? 'bg-muted text-primary' : ''
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <Target className="h-4 w-4" />
                Goals and objectives
              </Link>
              <Link
                href="/performance"
                className={`${
                  isActive('/performance') ? 'bg-muted text-primary' : ''
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <Axis3D className="h-4 w-4" />
                Performance reviews
              </Link>
              <Link
                href="/salary"
                className={`${
                  isActive('/salary') ? 'bg-muted text-primary' : ''
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <Calculator className="h-4 w-4" />
                Salary calculation
              </Link>
              <h1 className="text-lg font-semibold 2xl:text-xl px-3 mt-4 mb-2">
                Project Management
              </h1>
              <Link
                href="#"
                className={`${
                  isActive('/task-assignment') ? 'bg-muted text-primary' : ''
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <List className="h-4 w-4" />
                Task assignment
              </Link>
              <Link
                href="#"
                className={`${
                  isActive('/progress-tracking') ? 'bg-muted text-primary' : ''
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <RefreshCw className="h-4 w-4" />
                Progress tracking
              </Link>
              <Link
                href="#"
                className={`${
                  isActive('/employee-reports') ? 'bg-muted text-primary' : ''
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <CalendarCheck2 className="h-4 w-4" />
                Employee reports
              </Link>
              <Link
                href="#"
                className={`${
                  isActive('/analytics') ? 'bg-muted text-primary' : ''
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </ScrollArea>
        </div>
      </div>
    </>
  );
};

export default SideBarLayout;
