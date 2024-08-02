import nodemailer from 'nodemailer';
interface IEmail {
  to: string;
  // name: string;
  subject: string;
  body: string;
}
export async function sendMail({ to, subject, body }: IEmail) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
  } catch (error) {
    throw new Error(error as string);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
  } catch (error) {
    throw new Error(error as string);
  }
}
