import express from "express";
import { signup, login, logout, getMe } from "../controllers/auth.controllers.js";
import { protectRoute } from '../middleware/protectRoute.js';  // Ensure correct path and export

const router = express.Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

// Logout route
router.post("/logout", logout);

// Me route with protection
router.get("/me", protectRoute, getMe);

export default router;
