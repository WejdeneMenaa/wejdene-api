const nodemailer = require('nodemailer');


const sendEmail = (receiver, subject, text) => {
    // TODO: send email logic
    
    var transporter = nodemailer.createTransport({
        service: "hotmail",                             // service name                                      // SMTP port
        auth: {
          user: process.env.EMAIL_ADDRESS,              // email address
          pass: 'Pass1234*#'              // email password
        }
    });

    var mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: receiver,
        subject: subject,
        text: text
    };
      
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.log(error);
      else console.log('Email sent: ' + info.response);
    }); 
}

module.exports = { sendEmail }
