
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

Create a `.env` file in the `frontend/` folder:

```env
REACT_APP_SERVICE_ID=your_service_id
REACT_APP_TEMPLATE_ID=your_template_id
REACT_APP_API_KEY=your_api_key
REACT_APP_CLIENT_SECRET=your_client_secret
REACT_APP_CLIENT_ID=your_client_id
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
- Double-check your **OAuth credentials** if Google or Apple login fails.

## 💡 Contributing

Contributions are welcome! Feel free to fork the repo, make changes, and submit a PR.

🔥 **Developed by Pranjul Mehrotra** 🚀

![Screenshot 2025-02-22 163818](https://github.com/user-attachments/assets/f96572d9-6f25-4a28-9ada-751d03aa8257)
![Screenshot 2025-02-22 163835](https://github.com/user-attachments/assets/7f6a712a-6c2b-4ffb-9fff-cf7152464ee6)
![Screenshot 2025-02-22 163407](https://github.com/user-attachments/assets/3595546b-c089-4c53-9141-9087ef46c82c)
![Screenshot 2025-02-22 163425](https://github.com/user-attachments/assets/21b47a4e-cd18-4a29-ae0b-791fb228d7af)
![Screenshot 2025-02-22 163513](https://github.com/user-attachments/assets/66646bdc-bc0d-46f1-9746-1c9acde5f240)
![Screenshot 2025-02-22 163549](https://github.com/user-attachments/assets/27ccca01-0380-43da-920e-57f6a6d01064)
![Screenshot 2025-02-22 163621](https://github.com/user-attachments/assets/de7af78d-48c6-4871-b497-dad21f914577)
