import express from "express";
import passport from "../utils/google_auth.js";
import { signInGoogle } from "../controllers/users_controller.js";
const router = express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
  async (req, res) => {
    console.log("raewdwwwdwd");
  }
);
router.get(
  "/auth/google/callback",
  passport.authenticate(
    "google",
    {
      successRedirect: "/",
      failureRedirect: "/login",
    },
    signInGoogle
  )
);

export default router;
