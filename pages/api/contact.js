let nodemailer = require('nodemailer')
require('dotenv').config()

export default function (req, res) {

        return new Promise((resolve, reject) => {

            if (req.body.name !== '' && req.body.email !== '' && req.body.message !== '') {

                const transporter = nodemailer.createTransport({
                    port: 465,
                    host: "smtp.gmail.com",
                    auth: {
                        user: 'schoonveld.dev@gmail.com',
                        pass: process.env.password,
                    },
                    secure: true,
                })
                const mailData = {
                    from: `${req.body.email}`,
                    to: 'schoonveld.dev@gmail.com',
                    subject: `Message From ${req.body.name}`,
                    text: req.body.message + " | Sent from: " + req.body.email,
                    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
                }
                let resp = false;

                transporter.sendMail(mailData, function (error, info) {
                    if (error) {
                        console.log("error is " + error);
                        res.status(405)
                        resolve(false); // or use reject(false) but then you will have to handle errors
                    } else {
                        console.log('Email sent: ' + info.response);
                        res.status(200).send({data: 'success'});

                        resolve(true);
                    }
                    console.log(info)
                });
            } else {
                res.status(405).end()
                resolve(false); // or use reject(false) but then you will have to handle errors
            }

        })

}
