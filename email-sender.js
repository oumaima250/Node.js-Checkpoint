const nodemailer = require("nodemailer");

// Create a transporter using your email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "habachioumaima519@gmail.com",
    pass: "Dono",
  },
});

// Define the email options
const mailOptions = {
  from: "habachioumaima519@gmail.com",// sender address
  to: "anyone@gmail.com",// list of receivers
  subject: "Email test by me using Node.js", // Subject line
  text: "Hello, this is a test email from Node.js", // HTML body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
