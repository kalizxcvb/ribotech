const nodemailer = require('nodemailer');
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

let transporter;

function getMailer() {
  if (!transporter) {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error('Missing GMAIL_USER or GMAIL_APP_PASSWORD');
    }
       transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST_IP || 'smtp.gmail.com',
     port: 587,
     secure: false,
     requireTLS: true,
     tls: { servername: 'smtp.gmail.com' },
     auth: {
       user: process.env.GMAIL_USER,
       pass: process.env.GMAIL_APP_PASSWORD,
     },
     connectionTimeout: 10000,
     greetingTimeout: 10000,
     socketTimeout: 10000,
   });
  }
  return transporter;
}

module.exports = { getMailer };
