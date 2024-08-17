export async function GET() {
  const chartData = [
    { month: 'January', hoursWorked: 4800, hoursNotWorked: 1600 },
    { month: 'February', hoursWorked: 5600, hoursNotWorked: 3000 },
    { month: 'March', hoursWorked: 3370, hoursNotWorked: 3000 },
    { month: 'April', hoursWorked: 4800, hoursNotWorked: 1600 },
    { month: 'May', hoursWorked: 5600, hoursNotWorked: 3000  },
    { month: 'June', hoursWorked: 5600, hoursNotWorked: 3000 },
  ];

  const totals = [
    {
      _id: 'total-salaries',
      title: 'Total Salaries',
      number: '€108000',
      comment: '+20.1% from last month',
    },
    {
      _id: 'total-employees',
      title: 'Total employees',
      number: '32',
      comment: '+5.1% from last month',
    },
    {
      _id: 'total-employees-present',
      title: 'Employees present',
      number: '21',
      comment: '+12.0% from last month',
    },
    {
      _id: 'total-employees-absent',
      title: 'Employees absent',
      number: '12',
      comment: '+14.5% from last month',
    },
  ];
  return Response.json({ chartData, totals, success: true, status: 200 });
}
