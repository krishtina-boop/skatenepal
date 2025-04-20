import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const mailer = {
  pass: process.env.MAILPASS,
  mail: process.env.MAILID,
  URL: process.env.URL,
};
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "LOGIN",
    user: mailer.mail,
    pass: mailer.pass,
  },
} as SMTPTransport.Options);

type SendEmail = {
  senderEmail: string;
  senderName: string;
  senderPhone: string;
  senderMessage: string;
};

export const sendEmail = async (dto: SendEmail) => {
  const { senderEmail, senderName, senderPhone, senderMessage } = dto;

  const mailOptions = {
    from: senderEmail,
    to: mailer.mail,
    subject: "Test test!",
    text: "Forgot password!",
    html: `<body style="padding: 0; margin: 0; box-sizing:border-box;">
                                  <h1>${senderName}</h1>
                                  <h1>${senderEmail}</h1>
                                  <h1>${senderPhone}</h1>
                                  <h1>${senderMessage}</h1>
                              </body>`,
  };

  return await transporter.sendMail(mailOptions);
};
