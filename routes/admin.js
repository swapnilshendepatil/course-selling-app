const { Router } = require("express");
const adminRouter = Router();
const { AdminModel } = require("../db");
require('dotenv').config();
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


adminRouter.post("/signup", async(req, res) => {
  const {email,password,firstName,lastName}=req.body;
  const hashPassword=await bcrypt.hash(password,5)
  AdminModel.create({
    email:email,
    password:hashPassword,
    firstName:firstName,
    lastName:lastName
  })
  res.json({
    message: "Admin Signup endpoint",
  });
});

adminRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const admin = await AdminModel.findOne({
        email: email
    });

    if (!admin) {
        return res.status(403).json({
            message: "Invalid credentials"
        });
    }

    const comparePassword = await bcrypt.compare(
        password,
        admin.password
    );

    if (!comparePassword) {
        return res.status(403).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        {
            id: admin._id
        },
        process.env.JWT_SECRET_ADMIN
    );

    res.json({
        token
    });
});

adminRouter.post("/", (req, res) => {
  res.json({
    message: "Admin signin endpoint",
  });
});

adminRouter.put("/", (req, res) => {
  res.json({
    message: "Admin signin endpoint",
  });
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "Admin signin endpoint",
  });
});

module.exports = {
  adminRouter,
};
