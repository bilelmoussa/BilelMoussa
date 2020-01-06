const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require("../../config/keys");

// mongoose user module 
const User = require('../../models/user');


//log
router.post("/login", (req, res, next)=>{
    
    const user_name = req.body.user_name;
    const password = req.body.password;

    User.getUserByUsername(user_name, (err, user)=>{
        if(err){
            console.log(`Error: `, err);
            return res.status(400).json({success: false, msg: err});
        }else if(!user){
            return res.status(404).json({success: false, msg: 'user not found'});
        }else{

        User.camparePassword(password, user.password, (err, isMatch) => {
            if(err){
                console.log(`Error: `, err);
                return res.status(400).json({success: false, msg:err.message})
            }else{
            if(isMatch){
					let user_token = {
                        _id: user._id,
						user_name: user.user_name,
						name: user.name,
						role: user.role,
					}
                    const token = jwt.sign(user_token, config.secret, {
                    expiresIn: 90000, 
                    });
               return res.json({
                    success: true,
                    token: 'bearer ' +token,
                    user: {
                        userId: user.id,
                        user_name: user.user_name,
						userRole: user.role,
                    } 
                })   
            }else{
                return res.status(400).json({success: false, msg: 'wrong password'});
            }
        }
        });
    }     
    })

});

router.post('/profile', (req, res, next)=>{
    passport.authenticate('jwt', {session: false}, function(err, user){
        if (err) { return next(err); }
        if (!user) { return res.json('Unauthorised'); }})
        if(user){
            let user_name = req.body.user_name;
            User.findOne(user_name).then(user =>{res.json({success: true, 
                user_data:{user_name: user.user_name,
                            id: user._id,
                            email: user.email,
                            full_name : user.full_name,
                            role: user.role,
                            created_at: user.created_at
                }
            })}).catch(err =>{console.log(err); res.json({errors: err})})
        }else{
            return res.json('Unauthorised')  
        }
})

module.exports = router;