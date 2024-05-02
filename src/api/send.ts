import nodemailer from 'nodemailer'

interface FormData {
  email:string
  message:string,
  subject:string
}
export async function sendEmail(formData:FormData) {
  // Configure email transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Replace with your SMTP host
    port: 587, // Replace with your SMTP port
    secure: true, // Use TLS encryption
    auth: {
      user: 'your_email@example.com', // Replace with your email address
      pass: 'your_password' // Replace with your email password
    }
  });

  // Prepare email message
  const message = {
    from: formData.email, // Use the sender's email from the form
    to: 'recipient_email@example.com', // Replace with recipient's email
    subject: formData.subject, // Use the subject from the form
    text: formData.message // Use the message content from the form
  };

  // Send the email
  try {
    await transporter.sendMail(message);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}
