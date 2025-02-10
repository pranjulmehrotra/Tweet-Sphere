import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getNotifications, deleteAllNotifications, deleteNotification } from "../controllers/notification.controller.js";

const router = express.Router();

// Fetch all notifications
router.get("/", protectRoute, getNotifications);

// Delete all notifications
router.delete("/", protectRoute, deleteAllNotifications);

// Delete a specific notification
router.delete("/:id", protectRoute, deleteNotification);

export default router;
