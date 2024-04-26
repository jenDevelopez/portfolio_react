import nodemailer from 'nodemailer';
// const process = require('process');

interface EmailResponse {
  success: boolean;
  error?: string;
}

interface DataProps {
  name:string
  email:string
  message:string
}
export const sendEmail = async (email:string, name:string, message:string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.es",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.SERVICE_EMAIL,
      pass: process.env.SERVICE_PASSWORD
    },
  });

  const mailOptions = {
    from: process.env.SERVICE_EMAIL,
    to: email,
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p><p>Message: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false};
  }
};

export const onSubmitEmail = async (data:DataProps) => {
  const response: EmailResponse = await sendEmail(data.email,data.name,data.message)

  if(response.success) {
    alert('Email enviado correctamente')
  } else {
    alert('Ha ocurrido al enviar el correo')
  }
}