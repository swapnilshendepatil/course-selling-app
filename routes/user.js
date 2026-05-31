const { Router } = require('express')
const { UserModel } = require('../db')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
require('dotenv').config();

const userRouter=Router()

userRouter.post('/signup',async(req,res)=>{
    const {email,password,firstName,lastName}=req.body
    const hashPassword=await bcrypt.hash(password,5)
    await UserModel.create({
        email:email,
        password:hashPassword,
        firstName:firstName,
        lastName:lastName
    })
    res.json({
        message:'Signup endpoint'
    })
})

userRouter.post('/signin',async(req,res)=>{
    const { email, password } = req.body;

    const user = await UserModel.findOne({
        email: email
    });

    if (!user) {
        return res.status(403).json({
            message: "Invalid credentials"
        });
    }

    const comparePassword = await bcrypt.compare(
        password,
        user.password
    );

    if (!comparePassword) {
        return res.status(403).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET_USER
    );

    res.json({
        token
    });
});

userRouter.post('/purchases',(req,res)=>{
    res.json({
        message:'Purchases course endpoint'
    })
})

module.exports={
    userRouter
}