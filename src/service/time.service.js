export default async function (req, res) {

  var convert = require('xml-js');
  var xml = require('fs').readFileSync('./rs202320.xml', 'utf8');

    var result = convert.xml2json(xml, {compact: true, spaces: 4});
console.log(result);
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: "velobos.ik26@yandex.ru",
      pass: "fvepvxrjabcuflqd",
    },
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: "velobos.ik26@yandex.ru",
    to: "velobos.ik26@yandex.com",
    subject: `Message From`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: Object.values(req.body.allAnswers).reduce(
      (acc, answer) =>
        acc + ` <div>${answer.question} <br/> ${answer.answer}</div> <br/> `,
      [
        `<div> ${req.body.message}</div>
      <p>Sent from: ${req.body.email}</p> 
      <p>Площадь:  ${req.body.name}</p> 
      `
      ]
    ),
  };
  await new Promise((resolve, reject) => {
    //       // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });


  console.log(req.body);
  console.log(mailData);
  res.send("success");
  res.status(200).json({ status: "OK" });
}