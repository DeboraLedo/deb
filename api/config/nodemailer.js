const nodemailer = require('nodemailer');

const sendEmail = function(name,message,email){

const transporter = nodemailer.createTransport({
 host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  }
});

const mailOptions =  {
  from: "ledo.debora@gmail.com",
  to: `"ledo.debora@gmail.com"`,
  subject: `Hola, tenés un mensaje de ${name} `,
  text: `${message}. Su mail es ${email}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log("Email enviado");
  }
}); 
}

module.exports = {sendEmail}