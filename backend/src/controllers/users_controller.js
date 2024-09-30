import User from "../models/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { name, email_phone, password } = req.body;

  console.log(req.body);
  try {
    let user = await User.findOne({ name });

    if (user) {
      return res.status(400).json({ message: "User exists already!" });
    }
    if (!email_phone) {
      return res.status(400).json({ message: "Email or Phone is required" });
    }

    const emailOrPhone = isNaN(email_phone)
      ? { email: email_phone }
      : { phone: email_phone };
    console.log(emailOrPhone);
    user = new User({
      ...emailOrPhone,
      name,
      password,
    });
    await user.save();
    console.log("Success1");

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });
    console.log("Success");
    return res.status(200).json({ message: "User was created successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error + "in cerfer" });
  }
};

export const login = async (req, res) => {
  const { email_phone, password } = req.body;
  const emailOrPhone = isNaN(email_phone)
    ? { email: email_phone }
    : { phone: email_phone };
  try {
    let user = await User.findOne(emailOrPhone);
    if (!user) {
      return res.status(400).json({ message: "Invalid details" });
    }
    const isMatching = await bcrypt.compare(password, user.password);
    if (!isMatching) {
      return res.status(400).json({ message: "Invalid details" });
    }

    const token = await jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });
    res.status(200).json({ userId: user.id });
  } catch (error) {
    console.log(error, "dawdaw");
    res.status(500).json({ message: error + "errrrrrr internal" });
  }
};

export const validateToken = (req, res) => {
  res.status(200).send({ userId: req.userId });
};

export const logout = (req, res) => {
  res.cookie("auth_token", "", {
    expires: new Date(0),
  });
  res.send();
};
//////////////////////////////
//////////////////////////////
//////////////////////////////

export const signInGoogle = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Credentials", "true"); // Allow credentials
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); // Allow specific methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  console.log("Meow");
  // console.log("meow");
  // const token = jwt.sign({ userId: req.user.id }, process.env.JWT_SECRET_KEY, {
  //   expiresIn: "1d",
  // });
  // console.log("meow");
  // res.cookie("auth_token", token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  //   maxAge: 86400000,
  // });
  res.redirect("/");
};

// export const logoutInGoogle
