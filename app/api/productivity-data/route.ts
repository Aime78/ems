export async function GET() {
  const chartData = [
    { month: 'January', hoursWorked: 186, hoursNotWorked: 80 },
    { month: 'February', hoursWorked: 305, hoursNotWorked: 200 },
    { month: 'March', hoursWorked: 237, hoursNotWorked: 120 },
    { month: 'April', hoursWorked: 73, hoursNotWorked: 190 },
    { month: 'May', hoursWorked: 209, hoursNotWorked: 130 },
    { month: 'June', hoursWorked: 214, hoursNotWorked: 140 },
  ];

  const totals = [
    {
      _id: 'total-salaries',
      title: 'Total Salaries',
      number: '$12000',
      comment: '+20.1% from last month',
    },
    {
      _id: 'total-employees',
      title: 'Total employees',
      number: '300',
      comment: '+5.1% from last month',
    },
    {
      _id: 'total-employees-present',
      title: 'Employees present',
      number: '180',
      comment: '+12.0% from last month',
    },
    {
      _id: 'total-employees-absent',
      title: 'Employees absent',
      number: '120',
      comment: '+14.5% from last month',
    },
  ];
  return Response.json({ chartData, totals, success: true, status: 200 });
}
