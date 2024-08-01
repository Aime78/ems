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
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Infinity,
  ShoppingCart,
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
  Settings,
  LifeBuoy,
  LogOut,
  User,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

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
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                  >
                    <Users className="h-5 w-5" />
                    Users
                    {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
        6
      </Badge> */}
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Send className="h-5 w-5" />
                    Invite user{' '}
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  {' '}
                  <h1 className="font-semibold 2xl:text-xl mt-2">
                    Employee Management
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
                    {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
        6
      </Badge> */}
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
                    {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
        6
      </Badge> */}
                  </Link>
                  <Link
                    href="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <CalendarCheck2 className="h-5 w-5" />
                    Employee reports
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
          <div className="mt-auto">
            {/* <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our
                support team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card> */}
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        {/* <form>
  <div className="relative">
    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    <Input
      type="search"
      placeholder="Search products..."
      className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
    />
  </div>
</form> */}
      </div>
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
          <Link href="/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
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

export default HeaderLayout;
