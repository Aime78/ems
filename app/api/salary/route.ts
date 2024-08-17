import dbConnect from '@/db/connectionDb';
import { Salary } from '@/model/salary.model';
import { User } from '@/model/user.model';

export async function POST(request: Request) {
  const { email, payPeriodStart, payPeriodEnd, salary, deductions, bonus } =
    await request.json();

  // Find the user by their email in the database
  await dbConnect();
  const userDoc = await User.findOne({ email: email });
  try {
    const salaryObj = new Salary({
      user: userDoc?._id,
      payPeriodStart: payPeriodStart,
      payPeriodEnd: payPeriodEnd,
      salary: salary,
      bonus: bonus,
      deductions: deductions,
      netPay: salary - (deductions || 0) + (bonus || 0),
      generatedAt: new Date(),
    });
    await salaryObj.save();
    return Response.json({
      data: salaryObj,
      success: true,
      status: 200,
    });
  } catch (error) {
    throw new Error('Salary not created');
  }
}

export async function GET(request: Request) {

  await dbConnect();
  try {
    const salaryDoc = await Salary.find({}).populate('user', 'firstName lastName');
    return Response.json({
      data: salaryDoc,
      success: true,
      status: 200,
    });
  } catch (error) {
    throw new Error('Salary not found');
  }
}