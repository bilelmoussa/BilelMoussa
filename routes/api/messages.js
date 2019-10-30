const express = require('express');
const router = express.Router();
const passport = require('passport');
const isEmpty = require('../../validations/isEmpty');
const isEmail = require('../../validations/isEmail');
const nodemailer = require('nodemailer');

// Get an instance of `PhoneNumberUtil`.
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

//Mongoose Message Module
const Message = require('../../models/message');

//POST MESSGAES
router.post("/post_message", (req, res, next)=>{


    if(isEmpty(req.body.name.trim())){
        return res.status(400).json({success: false, msg: 'Name is Required'});
    }


    if(isEmpty(req.body.phone_number)){
        return res.status(400).json({success: false, msg: 'Phone Number is Required'});
    }

    
    if(isEmpty(req.body.email.trim())){
        return res.status(400).json({success: false, msg: 'Email is Required'});
    }


    if(isEmpty(req.body.message.trim())){
        return res.status(400).json({success: false, msg: 'Message is Required'});
    }

    if(typeof req.body.phone_number !=  "object"){
        return res.status(400).json({success: false, msg: 'Phone Number Must be an Object with country(ZZ), countryCallingCode, nationalNumber and number(with country code at the start)'}); 
    }

    if( typeof req.body.phone_number ===  "object"){

        if(!req.body.phone_number.country){
            return res.status(400).json({success: false, msg: 'country in Phone Number is Required'});  
        }
        if(req.body.phone_number.country){
            if(isEmpty(req.body.phone_number.country.trim())){
                return res.status(400).json({success: false, msg: 'country in Phone Number is Required'}); 
            }
        }

        if(!req.body.phone_number.countryCallingCode){
            return res.status(400).json({success: false, msg: 'countryCallingCode in Phone Number is Required'});  
        }
        if(req.body.phone_number.countryCallingCode){
            if(isEmpty(req.body.phone_number.countryCallingCode.trim())){
                return res.status(400).json({success: false, msg: 'countryCallingCode in Phone Number is Required'}); 
            }
        }
        
        if(!req.body.phone_number.nationalNumber){
            return res.status(400).json({success: false, msg: 'nationalNumber in Phone Number is Required'});  
        }
        if(req.body.phone_number.nationalNumber){
            if(isEmpty(req.body.phone_number.nationalNumber.trim())){
                return res.status(400).json({success: false, msg: 'nationalNumber in Phone Number is Required'}); 
            }
        }

        if(!req.body.phone_number.number){
            return res.status(400).json({success: false, msg: 'number in Phone Number is Required'});  
        }
        if(req.body.phone_number.number){
            if(isEmpty(req.body.phone_number.number.trim())){
                return res.status(400).json({success: false, msg: 'number in Phone Number is Required'});  
            }
        }

    }


    const number = phoneUtil.parseAndKeepRawInput(req.body.phone_number.nationalNumber, req.body.phone_number.country);

    if(!phoneUtil.isValidNumber(number)){
        return res.status(400).json({success: false, msg: 'Phone Number is Not Valid !'});
    }

    if(!isEmail(req.body.email)){
        return res.status(400).json({success: false, msg: 'Email is Not Valid !'});
    };
    
    if(req.body.message.trim().length < 30){
        return res.status(400).json({success: false, msg: 'At least 30 character in Message !'});
    }

    let newMessage = new Message({
        name: req.body.name,
        phone_number: {
            country: req.body.phone_number.country,
            countryCallingCode: req.body.phone_number.countryCallingCode,
            nationalNumber: req.body.phone_number.nationalNumber,
            number: req.body.phone_number.number,
        },
        email: req.body.email,
        message: req.body.message
    })

    let myAccount = {
        user: "",
        pass: ""
    };

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: myAccount.user, 
            pass: myAccount.pass 
        },
        tls: {
            rejectUnauthorized: false
          }
    });

    const mailOptions = {
        from: `"${req.body.name}" <${myAccount.user}>`, 
        to: `${myAccount.user}`, 
        subject: 'My Website Contact Message', 
        text: `${req.body.message}`, 
        html: `<b>${req.body.message}</b>`,
        replyTo: `${req.body.email}`
    }

    
    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            console.log(err);
        }
     });
    

     newMessage.save()
     .then(msg => {
         return res.status(200).json({success: true, message: msg});
     })
     .catch(err => {
         console.log(err);
         return res.status(400).json({success: false, errors: "Server Error !"});
     });

     


     
     
})


module.exports = router;