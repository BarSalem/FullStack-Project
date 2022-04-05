const nodemailer = require("nodemailer");
const dotenv=require('dotenv').config()

const user = process.env.EMAIL_USER;
const pass = process.env.PASS;

const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: user,
    pass: pass,
  },
});

module.exports.sendConfirmationEmail = (name, email, confirmationCode) => {
    transport.sendMail({
      from: user,
      to: email,
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://theowebrotem.herokuapp.com/confirm/${confirmationCode}> Click here</a>
          </div>`,
    }).catch(err => console.log(err));
  };