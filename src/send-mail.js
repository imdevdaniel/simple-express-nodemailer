"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");
const path = require("path");

const sendEmail = async (mailObj) => {
  const { from, to, subject, body } = mailObj;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text: body,
      html: {
        path: path.resolve(__dirname, "../templates/mail.html"),
      },
    });

    console.log(`Message sent: ${info.messageId}`);
    return `Message sent: ${info.messageId}`;
  } catch (error) {
    throw new Error(`Somethig went wrong: ${error.message}`);
  }
};

module.exports = sendEmail;
