const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')

router.get('/',(req,res)=>{
    res.send("hello")
})

router.get('/protected',requireLogin,(req,res)=>{
    res.send("hello user")
})

router.post('/signup',(req,res)=>{
    const {name,email,password,ProjectId,Business_Unit} = req.body
    if(!email || !password || !name || !ProjectId || !Business_Unit){
       return res.status(422).json({error:"pls add all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user already present"})
        }
        const user = new User({
            email,
            password,
            name,
            ProjectId,
            Business_Unit
        })
        user.save()
        .then(user=>{
            res.json({message:"saved"})
        })
        .catch(err=>{
            console.log(err);
        })
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:"pls add all the fields"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"invalid"})
        }
        else if(password!=savedUser.password){
            return res.status(422).json({error:"invalid password"})
        }
        else{
            const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
            const {_id,name,email} = savedUser
            res.json({token,user:{_id,name,email}})
        }
        
    })
    .catch(err=>{
        console.log(err);
    })
})

module.exports = router