import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
const router = express.Router();

router.post("/register" , async(req , res) =>{
    // res.status(200).send("ok")
    try {
        const {name, email , password , isAdmin} = req.body;
        console.log(req.body);
        if(!name || !email  || !password ) return res.status(400).send("Insufficient Data");
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt);
        
        const newUser = new User({
             name ,  
             email , hashedPassword, isAdmin
        });
        await newUser.save();
        res.status(200).json(newUser);
        
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;