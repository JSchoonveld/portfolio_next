let nodemailer = require('nodemailer')
require('dotenv').config()

export default function (req, res) {

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
    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info)
        res.status(200)
    })
    res.status(200)
}
