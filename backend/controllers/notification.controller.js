import Notification from "../models/notification.model.js";

// Fetch notifications for a user
export const getNotifications = async (req, res) => {
    try {
        const userId = req.user._id;

        // Fetch notifications for the logged-in user
        const notifications = await Notification.find({ to: userId }).populate({
            path: "from",
            select: "username profileImg",
        });

        // Mark all notifications as read
        await Notification.updateMany({ to: userId }, { read: true });

        res.status(200).json(notifications);
    } catch (error) {
        console.error("Error in getNotifications function:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete all notifications for a user
export const deleteAllNotifications = async (req, res) => {
    try {
        const userId = req.user._id;

        // Delete all notifications for the logged-in user
        await Notification.deleteMany({ to: userId });

        res.status(200).json({ message: "All notifications deleted successfully" });
    } catch (error) {
        console.error("Error in deleteAllNotifications function:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete a specific notification
export const deleteNotification = async (req, res) => {
    try {
        const notificationId = req.params.id;
        const userId = req.user._id;

        // Find the notification
        const notification = await Notification.findById(notificationId);

        if (!notification) {
            return res.status(404).json({ error: "Notification not found" });
        }

        // Check if the notification belongs to the user
        if (notification.to.toString() !== userId.toString()) {
            return res.status(403).json({ error: "You are not allowed to delete this notification" });
        }

        // Delete the notification
        await Notification.findByIdAndDelete(notificationId);

        res.status(200).json({ message: "Notification deleted successfully" });
    } catch (error) {
        console.error("Error in deleteNotification function:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
