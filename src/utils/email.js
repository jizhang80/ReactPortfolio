//import nodemailer from "nodemailer";
//import 'dotenv/config';

/**
 * mailData {
 *  from: from@mail.com
 *  to: to@mail.com
 *  subject: mail subject
 *  text: mail text body
 *  html: mail html body
 * }
 */

// const smtpData = {
//     host: "smtp-relay.brevo.com",
//     port: 587,
//     secure: true,
//     auth: {
//         user: "zhangji80@outlook.com",
//         pass: "xsmtpsib-63b0dcf2a05e4a565a9f9cc0da69e12e2a34d6eaa9aecf4b9eb3dad5bd4487e0-JpEMXLOb7FdHB8RT",
//     },
// }

export default async function sendMail(mailData) {
    //validation mailData
    console.log(mailData);
    // const { name, email, subject, message} = mailData;
    // if (!name || !email || !subject || !message) {
    //     console.log("mailData issue, need name, email, mail subject and body.")
    //     return false;
    // }
    // const html = `<p>${message}</p>`;
    // const from = "zhangji80@outlook.com";

    // // send mail by smtp transport
    // const transporter = nodemailer.createTransport(smtpData);
    // const info = await transporter.sendMail({
    //     from: from,
    //     to: email,
    //     subject: subject,
    //     text: message,
    //     html: html,
    // });
    // console.log(`message sent: ${info}`)
    // return true;
}