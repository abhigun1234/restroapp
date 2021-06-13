const { DemoUser } = require('../models/demouser');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
var nodemailer = require('nodemailer');
router.post('/', async (req, response) => {

    user = new DemoUser({ name: req.body.name, email: req.body.email, subject: req.body.subject , timeings: req.body.timeings,phoneno:req.body.phoneno })
    user.save().then(res => {
        console.log("res", res)
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: 'justolearnpune@gmail.com',
                   pass: 'justo.007'
               }
           });
        const mailOptions = {
            from: 'justolearnpune@gmail.com', // sender address
            to: 'justolearnpune@gmail.com', // list of receivers
            subject: 'new user registerd', // Subject line
            Text: req.body.name+'registerd'+'email id'+req.body.name// plain text body
          };
          transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log("error",err)
            else
              console.log(info);
         });
        response.json({
            status: true, message: 'Record inserted...'

        })
    }).catch(error => {
        console.log("error", error)
    });
})

module.exports = router;