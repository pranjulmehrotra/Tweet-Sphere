import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        from: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true, // The sender of the notification is required
        },
        to: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true, // The recipient of the notification is required
        },
        type: {
            type: String,
            required: true,
            enum: ["follow", "like", "comment", "mention", "message"], // You can add more types as needed
        },
        content: {
            type: String,
            required: false, // Optional content field for storing messages or additional details
        },
        read: {
            type: Boolean,
            default: false, // Default value for unread notifications
        },
        deleted: {
            type: Boolean,
            default: false, // Soft delete flag to allow "deleting" without removing the record
        },
    },
    { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

// Index for performance optimization, especially for unread notifications
notificationSchema.index({ to: 1, read: 1 });

// Optional TTL index for auto-deleting notifications after 30 days (if needed)
notificationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2592000 }); // 30 days in seconds

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
