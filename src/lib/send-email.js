import nodemailer from 'nodemailer';

export async function sendEmail({ name, email, company, service, format, message }) {
  if (!name || !email || !service) {
    throw new Error('Missing required fields');
  }

  const transporter = nodemailer.createTransport({
    host: process.env.BREVO_HOST,
    port: process.env.BREVO_PORT,
    secure: false,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASS,
    },
  });

  return transporter.sendMail({
    from: `"Website Booking" <${process.env.FROM_EMAIL}>`,
    to: process.env.TO_EMAIL,
    subject: `Booking Request: ${service}`,
    text: `
      Name: ${name}
      Email: ${email}
      Company: ${company || '-'}
      Service: ${service}
      Format: ${format || '-'}
      Message: ${message || '-'}
    `,
    html: `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || '-'}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Format:</strong> ${format || '-'}</p>
      <p><strong>Message:</strong> ${message || '-'}</p>
    `,
  });
}
