// ******************************************************************************
//apiControllers.js - This file holds the api controller
//
// ******************************************************************************
// *** Dependencies
// ==============================================================================
const fs = require("fs")
const nodemailer = require('nodemailer')

//api controller 
module.exports =
{
    sendMail: function(req, res)
    {
        let { firstName } = req.body.payload
        let { lastName } = req.body.payload
        let { email } = req.body.payload
        let { howHear } = req.body.payload
        let { textBody } = req.body.payload
        console.log("firstName", firstName)
        console.log("lastName", lastName)
        console.log("email", email)
        console.log("howHear", howHear)
        console.log("textBody", textBody)

        // // create reusable transporter object using the default SMTP transport
        // let transporter = nodemailer.createTransport({
        //     service:'smtp.gmail.com',
        //     port: 465,
        //     secure: true, // use TLS
        //     auth: {
        //         user: 'noreply.gordonsbbq@gmail.com',
        //         pass: 'D1meb@g86n87'
                
        //     }
        // });

        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
                user: 'noreply.gordonsbbq@gmail.com',
                pass: 'D1meb@g86n87'
            }

        });

        message = 
            `***DO NOT RESPOND TO THIS EMAIL ADDRESS, USE THE SENDER'S ADDRESS LISTED BELOW TO RESPOND***

            New contact from Message from Gordonbbq.net, 
            Sender's Name: ${firstName} ${lastName}
            Sender's Email (Use this to respond): ${email}
            How they found Gordon's BBQ: ${howHear}

            Message
            ---------------------------------------------
            ${textBody}
            ---------------------------------------------`

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Gordons BBQ", <noreply.gordonsbbq@gmail.com>', // sender address
            to: '"Corey", <coreyrodems@gmail.com>', // list of receivers
            subject: "New Message from Gordonsbbq.com", // Subject line
            text: message // plain text body
        };

        transporter.verify(function(error, success) {
            if (error) {
                 console.log(error);
            } else {
                 console.log('Server is ready to take our messages');
            }
         });

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return 
                console.log(error);
            }
            res.json(info);
        });
    }, 
}