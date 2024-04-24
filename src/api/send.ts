
import nodemailer from 'nodemailer';

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
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_password',
    },
  });

  const mailOptions = {
    from: 'your_email@gmail.com',
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