import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  // res.status(200).send("ok")
  try {
    const { name, email, password, isAdmin } = req.body;
    // console.log(req.body);
    if (!name || !email || !password)
      return res.status(400).send("Insufficient Data");
    const salt =  bcrypt.genSaltSync(10);
    const hashedPassword =  bcrypt.hashSync(password, salt);
    console.log("LINE AT 16" , hashedPassword);

    const newUser = new User({
      name,
      email,
      password:hashedPassword,
      isAdmin,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body);
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json("User not found!");
    } else {
      const validPassord = bcrypt.compareSync(password, user.password);
      if (!validPassord) return res.status(401).json("Wrong Password");
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT,
        { expiresIn: "1d" }
      );
    //   const { oriPassword:password ,  ...otherDetails } = user._doc;
      return res
        .cookie("access", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;
