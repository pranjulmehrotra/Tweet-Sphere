import HomePage from "./pages/home/HomePage.jsx";
import SignUpPage from "./pages/signup/SignUpPage.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import NotificationPage from "./pages/Notifications/NotificationPage.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar.jsx";
import RightPanel from "./components/common/RightPanel.jsx";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/common/LoadingSpinner.jsx";

function App() {
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await fetch("/api/auth/me", { credentials: "include" });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      return data;
    },
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}/>
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to="/" />}/>
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}/>
        <Route
          path="/notifications"
          element={authUser ? <NotificationPage /> : <Navigate to="/login" />}/>
        <Route
          path="/profile/:username"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}/>
      </Routes>
      <RightPanel />
      <Toaster />
    </div>
  );
}

export default App;

