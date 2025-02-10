import { Link } from "react-router-dom";
import { useState } from "react";
import XSvg from "../../components/svgs/X";
import X1 from "../../components/svgs/X1";  // Import your X1 component
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaUser } from "react-icons/fa";
import { MdPassword, MdDriveFileRenameOutline, MdOutlineMail } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";  // Import axios
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    fullName: "",
    password: "",
  });

  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async () => {
      try {
        const res = await axios.post("http://localhost:5000/api/auth/signup", {
          email: formData.email,
          username: formData.username,
          fullName: formData.fullName,
          password: formData.password,
        });
        console.log(res.data);  // Check the response data
      } catch (err) {
        console.error("Error: ", err);
        toast.error("An error occurred");
      }
    },
    onSuccess:()=>{
      toast.success("Account created successfully")
    }
  });
  
  const [showSmallForm, setShowSmallForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();  // page won't reload
    mutate(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleSmallForm = () => {
    setShowSmallForm(!showSmallForm);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col relative">
      {/* Add the animation styles */}
      <style>
        {`
          @keyframes bounceIn {
            0% {
              transform: scale(0.5) translateY(-20px);
              opacity: 0;
            }
            60% {
              transform: scale(1.1) translateY(10px);
              opacity: 1;
            }
            100% {
              transform: scale(1) translateY(0);
              opacity: 1;
            }
          }

          @keyframes fadeInZoom {
            0% {
              opacity: 0;
              transform: scale(0.8) rotate(-30deg);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.1) rotate(15deg);
            }
            100% {
              opacity: 1;
              transform: scale(1) rotate(0);
            }
          }

          .bounce-in {
            animation: bounceIn 1.5s ease-out forwards;
          }

          .fade-in-zoom {
            animation: fadeInZoom 1.5s ease-out forwards;
          }

          .fade-in-zoom-delay {
            animation: fadeInZoom 1.5s ease-out forwards;
            animation-delay: 0.5s;
          }

          /* Add animation for single characters appearing */
          .char {
            display: inline-block;
            opacity: 0;
            animation: fadeInChar 1s forwards;
          }

          @keyframes fadeInChar {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .fade-in-char-delay {
            animation-delay: var(--char-delay);
          }
        `}
      </style>

      {/* Top Section */}
      <div className="flex flex-1 flex-wrap lg:flex-nowrap">
        {/* Left Section: X logo inside form */}
        <div className="flex-1 hidden lg:flex items-center justify-center">
          <XSvg className="w-24 lg:w-2/3 fill-white" />
        </div>

        {/* Right Section: Form */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-12">
          <div className="max-w-md mx-auto">
            {/* Title with enhanced animations */}
            <h1 className="text-5xl font-extrabold text-gradient mb-8 bounce-in">
              {"Happening Now".split("").map((char, index) => (
                <span
                  key={index}
                  className="char fade-in-char-delay"
                  style={{ "--char-delay": `${index * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </h1>
            <h2 className="text-2xl font-semibold mb-6 fade-in-zoom fade-in-zoom-delay">
              {"Join today.".split("").map((char, index) => (
                <span
                  key={index}
                  className="char fade-in-char-delay"
                  style={{ "--char-delay": `${index * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </h2>

            {/* Sign Up Buttons */}
            <div className="flex flex-col gap-4">
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium border hover:bg-gray-700 transition-all">
                <FcGoogle size={24} />
                Sign up with Google
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-black to-gray-700 text-white rounded-full font-medium border hover:bg-gray-700 transition-all">
                <FaApple size={24} />
                Sign up with Apple
              </button>
            </div>

            {/* Separator */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-gray-600"></div>
              <span className="px-4 text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-600"></div>
            </div>

            {/* Create Account Button */}
            <button
              type="button"
              onClick={toggleSmallForm}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition-colors"
            >
              Create Account
            </button>

            {/* Agreement Text */}
            <p className="text-gray-400 mt-4 text-sm text-center">
              By signing up, you agree to the{" "}
              <Link to="/terms" className="text-blue-400 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy-policy" className="text-blue-400 hover:underline">
                Privacy Policy
              </Link>
              , including Cookie Use.
            </p>

            {/* Already Have an Account */}
            <p className="text-gray-400 mt-8 text-center text-lg">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Sign in
              </Link>
            </p>

            {/* Small Form Modal */}
            {showSmallForm && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-10">
                <div className="bg-gray-900 p-8 rounded-lg w-1/2 shadow-lg relative">
                  {/* Close Button */}
                  <button
                    onClick={toggleSmallForm}
                    className="absolute top-3 right-3 text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                  {/* X1 Component and large text */}
                  <div className="flex items-center gap-2 mb-6">
                    <X1 className="text-white" />
                    <h2 className="text-2xl font-bold text-white">Create Your Account</h2>
                  </div>
                  {/* Text after the logo */}
                  <div className="mb-4 text-white text-lg">
                    Please fill in the details below to create your account.
                  </div>
                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <label className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-2 transition-all focus-within:ring-2 focus-within:ring-blue-500">
                      <MdOutlineMail className="text-gray-400" />
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleInputChange}
                        value={formData.email}
                        className="flex-1 bg-transparent text-white border-none focus:outline-none"
                      />
                    </label>
                    <div className="flex gap-4 flex-wrap">
                      <label className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-2 flex-1 transition-all focus-within:ring-2 focus-within:ring-blue-500">
                        <FaUser className="text-gray-400" />
                        <input
                          type="text"
                          placeholder="Username"
                          name="username"
                          onChange={handleInputChange}
                          value={formData.username}
                          className="flex-1 bg-transparent text-white border-none focus:outline-none"
                        />
                      </label>
                      <label className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-2 flex-1 transition-all focus-within:ring-2 focus-within:ring-blue-500">
                        <MdDriveFileRenameOutline className="text-gray-400" />
                        <input
                          type="text"
                          placeholder="Full Name"
                          name="fullName"
                          onChange={handleInputChange}
                          value={formData.fullName}
                          className="flex-1 bg-transparent text-white border-none focus:outline-none"
                        />
                      </label>
                    </div>
                    <label className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-2 transition-all focus-within:ring-2 focus-within:ring-blue-500">
                      <MdPassword className="text-gray-400" />
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleInputChange}
                        value={formData.password}
                        className="flex-1 bg-transparent text-white border-none focus:outline-none"
                      />
                    </label>
                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition-colors"
                    >
                      {isPending ? "loading...." : "Sign up"}
                    </button>
                    {isError && <p className="text-red-500">{error.message}</p>}
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-black py-6 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
          <span>About</span>
          <span>Help Center</span>
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Accessibility</span>
          <span>Ads info</span>
          <span>Blog</span>
          <span>Careers</span>
          <span>Brand Resources</span>
          <span>Advertising</span>
          <span>Marketing</span>
          <span>X for Business</span>
          <span>Developers</span>
          <span>Directory</span>
          <span>Settings</span>
        </div>
        <p className="mt-4 text-gray-500 text-sm">© 2025 X Corp.</p>
      </footer>
    </div>
  );
};

export default SignUpPage;
