//models
import User from "../models/usermodel.js"; // Ensure the correct file extension (.js or .ts)
import Notification from "../models/notification.model.js";

import bcrypt from 'bcryptjs';
import { v2 as cloudinary } from "cloudinary";

export const getUserProfile = async (req, res) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username }).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" }); // Fixed syntax
        }
        res.status(200).json(user);
    } catch (error) {
        console.log("Error in getUserProfile:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const followUnfollowUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userToModify = await User.findById(id);
        const currentUser = await User.findById(req.user._id);

        if (id === req.user._id) {
            return res.status(400).json({ message: "You can't follow/unfollow yourself" });
        }

        if (!userToModify || !currentUser) {
            return res.status(400).json({ error: "User not found" });
        }

        const isFollowing = currentUser.following.includes(id);

        if (isFollowing) {
            // Unfollow the user
            await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
             //TODO return the id of the user as a response
            res.status(200).json({ message: "User unfollowed successfully" });
        } else {
            // Follow the user
            await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
            //Send notification to the user
            const newNotification = new Notification({
                type:"follow",
                from:req.user._id,
                to: userToModify._id,
            });
            //TODO return the id of the user as a response 
            res.status(200).json({ message: "User followed successfully" });
        }
    } catch (error) {
        console.log("Error in followUnfollowUser:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const getSuggestedUsers = async(req,res)=>{
    try {
        const userId = req.user._id;

        const userFollowedByMe = await User.findById(userId).select("following");

        const users = await User.aggregate([
            {
                $match:{
                    _id:{$ne:userId}
                }
            },
            {$sample:{size:10}}
        ])
        // 1,2,3,4,5,6,7,8,9,10
        const filteredUsers = users.filter(user=>!userFollowedByMe.following.includes(user._id))
        const SuggestedUsers = filteredUsers.slice(0,4);


        SuggestedUsers.forEach((user) => (user.password = null));


        res.status(200).json(SuggestedUsers);
    } catch (error) {
        console.log("Error in getSuggestedUsers:",error.message);
        res.status(500).json({error:error.message});
    }
};

export const updateUserProfile = async (req, res) => {
    const { fullName, email, username, currentPassword, bio, link, newPassword } = req.body;
    let { profileImg, coverImg } = req.body;
    const userId = req.user._id; // Use the authenticated user's ID

    try {
        let user = await User.findById(userId); // Fetch the user
        if (!user) return res.status(404).json({ message: "User not found" });

        // Check password update conditions
        if ((!newPassword && currentPassword) || (!currentPassword && newPassword)) {
            return res.status(400).json({ error: "Please provide both current password and new password" });
        }

        if (currentPassword && newPassword) {
            const isMatch = await bcrypt.compare(currentPassword, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: "Invalid Password" });
            }
            if (newPassword.length < 6) {
                return res.status(400).json({ error: "Password must be at least 6 characters long" });
            }
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(newPassword, salt);
        }

        // Handle profile image update
        if (profileImg) {
            if (user.profileImg) {
                await cloudinary.uploader.destroy(user.profileImg.split("/").pop().split(".")[0]);
            }
            const uploadResponse = await cloudinary.uploader.upload(profileImg);
            profileImg = uploadResponse.secure_url;
        }

        // Handle cover image update
        if (coverImg) {
            if (user.coverImg) {
                await cloudinary.uploader.destroy(user.coverImg.split("/").pop().split(".")[0]);
            }
            const uploadResponse = await cloudinary.uploader.upload(coverImg);
            coverImg = uploadResponse.secure_url;
        }

        // Update user fields
        user.fullName = fullName || user.fullName;
        user.email = email || user.email;
        user.username = username || user.username;
        user.bio = bio || user.bio;
        user.link = link || user.link;
        user.profileImg = profileImg || user.profileImg;
        user.coverImg = coverImg || user.coverImg;

        // Save the updated user
        user = await user.save();

        // Remove the password from the response
        user.password = null;

        return res.status(200).json(user);
    } catch (error) {
        console.error("Error in updateUserProfile:", error.message);
        res.status(500).json({ error: error.message });
    }
};
