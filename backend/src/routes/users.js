import express from "express";
import {
  register,
  login,
  validateToken,
  logout,
  signInGoogle,
} from "../controllers/users_controller.js";
import { verifyToken } from "../utils/verifyToken.js";
import passport from "passport";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/validate-token", verifyToken, validateToken);
router.post("/logout", logout);

export default router;
