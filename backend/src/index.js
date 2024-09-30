import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import passport from "passport";
import users_route from "./routes/users.js";
import auth_google_route from "./routes/authGoogle.js";
import session from "express-session";
import cookieParser from "cookie-parser";
const app = express();
import "./utils/google_auth.js";
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected successfully to mongodb");
  })
  .catch((err) => {
    console.log(err, "connecting to mongo");
  });
app.use(
  cors({
    // origin: "*",
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "cats",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", users_route);
app.use("/", auth_google_route);
app.listen(5000, () => {
  console.log("listening on localhost:5000");
});
app.get("/", (req, res) => res.send("Express on Vercel"));
// app.get("*", (req, res) => {
//   res.send({ message: "invalid path" });
// });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internoooool Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

export default app;
