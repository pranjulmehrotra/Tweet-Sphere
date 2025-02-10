import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { createPost, deletePost, commentOnPost, likeUnlikePost, getUserPosts, getAllPosts, getlikedPosts, getFollowingPosts } from '../controllers/post.controller.js'; // Only one import statement

const router = express.Router();

router.get("/all",protectRoute, getAllPosts);
router.get("/following",protectRoute,getFollowingPosts);
router.get("/likedPosts/:id", protectRoute, getlikedPosts);
router.get("/user/:username", protectRoute, getUserPosts);
router.post("/create",protectRoute,createPost);
router.post("/like/:id",protectRoute,likeUnlikePost);
router.post("/comment/:id",protectRoute,commentOnPost);
router.delete("/:id",protectRoute,deletePost);


export default router;