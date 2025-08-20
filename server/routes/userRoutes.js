// routes/userRoutes.js

import express from "express";
const router = express.Router();
// Import both registerUser and loginUser from the controller
import { registerUser, loginUser } from "../controllers/userController.js";

// Route for registering a user
router.post("/", registerUser);
// Route for logging in a user
router.post("/login", loginUser);

export default router;
