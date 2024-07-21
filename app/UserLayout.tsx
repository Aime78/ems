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
  User,
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Bell,
  CircleUser,
  Menu,
  Package,
  Package2,
  ShoppingCart,
  Settings,
  LifeBuoy,
  LogOut,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const UserLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <SideBarLayout />
      </div>
      <div className="flex flex-col">
        <HeaderLayout />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 h-screen">
          <ScrollArea className="h-[430px] 2xl:h-full">{children}</ScrollArea>
        </main>
      </div>
    </div>
  );
};

const SideBarLayout = () => {
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
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 mt-6 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Timer className="h-4 w-4" />
                Attendance
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <TimerOff className="h-4 w-4" />
                Leave tracking
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Target className="h-4 w-4" />
                Goals and objectives
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Axis3D className="h-4 w-4" />
                Performance reviews
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Calculator className="h-4 w-4" />
                Salary calculation
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <List className="h-4 w-4" />
                Task assignment
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <RefreshCw className="h-4 w-4" />
                Progress tracking
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
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

const HeaderLayout = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Infinity className="h-6 w-6" />
              <span className="sr-only">EMS</span>
            </Link>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {' '}
                  <h1 className="font-semibold 2xl:text-xl mt-2">Overview</h1>
                </AccordionTrigger>
                <AccordionContent>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  {' '}
                  <h1 className="font-semibold 2xl:text-xl mt-2">
                    Work Management
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Timer className="h-5 w-5" />
                    Attendance
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                  >
                    <TimerOff className="h-5 w-5" />
                    Leave tracking
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Target className="h-5 w-5" />
                    Goals and objectives
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Axis3D className="h-5 w-5" />
                    Performance reviews
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Calculator className="h-5 w-5" />
                    Salary calculation
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  {' '}
                  <h1 className="font-semibold 2xl:text-xl mt-2">
                    Project Management
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <List className="h-5 w-5" />
                    Task assignment
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                  >
                    <RefreshCw className="h-5 w-5" />
                    Progress tracking
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    Analytics
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1"></div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
          <Link href="/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default UserLayout;
