# TweetSphere

TweetSphere is a full-stack social media application that allows users to create, like, and share posts. Built with React (Vite) for the frontend and Node.js/Express with MongoDB for the backend.

## 🌟 Features

- 🔐 **User authentication** (Google & Apple OAuth, JWT-based login)
- 📝 **Create, like, and delete posts**
- 📸 **Upload images using Cloudinary**
- 🔔 **Real-time notifications**
- 🔍 **Search & filter posts**
- 🎨 **Responsive UI with Tailwind CSS & DaisyUI**

## 🚀 Tech Stack

### **Frontend:**
- React (Vite)
- Tailwind CSS
- React Router

### **Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)

### **Authentication:**
- Passport.js
- JWT

### **Storage:**
- Cloudinary (for images)

### **State Management:**
- React Context API

## 📂 Folder Structure

```
TweetSphere/
│── backend/          # Express.js server & API
│   ├── routes/       # API routes (auth, posts, users)
│   ├── models/       # Mongoose models
│   ├── controllers/  # Request handlers
│   ├── db/           # MongoDB connection
│── frontend/         # React (Vite) application
│   ├── src/
│   │   ├── components/  # UI Components
│   │   ├── pages/       # Page components
│   │   ├── context/     # State management
│── .env               # Environment variables
│── package.json       # Dependencies & scripts
│── README.md          # Project documentation
```

## 🛠️ Setup & Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/TweetSphere.git
cd TweetSphere
```

### **2️⃣ Setup Backend (Node.js & Express)**
```sh
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend server:
```sh
npm run dev
```

### **3️⃣ Setup Frontend (React & Vite)**
```sh
cd ../frontend
npm install
```

Run the frontend development server:
```sh
npm run dev
```

✅ **Frontend runs on:** `http://localhost:5173`  
✅ **Backend runs on:** `http://localhost:5000`

## ✅ Running Both Frontend & Backend Together
From the root folder, run:
```sh
npm run dev --prefix frontend & npm run dev
```

## 🐛 Troubleshooting

- If **frontend doesn’t start**, ensure **PostCSS & Tailwind** are configured properly.
- If **MongoDB isn’t connecting**, check the **MONGO_URI** in `.env`.
- Ensure **Cloudinary API keys** are correct for image uploads.

## 💡 Contributing

Contributions are welcome! Feel free to fork the repo, make changes, and submit a PR.

🔥 **Developed by Pranjul Mehrotra** 🚀

