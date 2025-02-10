import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import cors from 'cors';
import { v2 as cloudinary } from "cloudinary";

import authRoutes from "./routes/auth.route.js";
import connectMongoDB from "./db/connectMongoDB.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "../backend/routes/post.route.js"
import notificationRoutes from "../backend/routes/notification.route.js";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const PORT = process.env.PORT||5000;
  

const app = express();


// CORS Configuration
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, // Allow cookies to be sent with requests
  };
  app.use(cors(corsOptions));
  


// Your other backend configurations and routes



console.log(process.env.MONGO_URI);
app.use(express.json());// to parse the req.body

app.use(express.urlencoded({extended: true}));//to parse form data(urlencoded)

app.use(cookieParser());

app.use("/api/auth", authRoutes); // Ensure this line exists and points to the correct auth routes

app.use("/api/users",userRoutes);
app.use("/api/post",postRoutes);
app.use("/api/notifications",notificationRoutes);



app.listen(PORT, ()=>{
    console.log("server is running on port ${PORT}");
    connectMongoDB();
});