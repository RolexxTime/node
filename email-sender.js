const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "rolexxtime77@gmail.com",
    pass: "Craggyfishy01",
  },
});

const mailOptions = {
  from: "rolexxtime77@gmail.com",
  to: "dindjipierre77@gmail.com",
  subject: "Test Email",
  text: "Message de test avec nodemailer",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});






