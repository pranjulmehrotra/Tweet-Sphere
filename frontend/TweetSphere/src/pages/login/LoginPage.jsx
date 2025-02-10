import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMail, MdPassword } from "react-icons/md";
import XSvg from "../../components/svgs/X";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


// Set default Axios base URL
axios.defaults.baseURL = "http://localhost:5000"; // Replace with your backend URL if different

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const queryclient =useQueryClient();

  const { mutate: loginMutation, isPending, isError, error } = useMutation({
    mutationFn: async ({ username, password }) => {
      const { data } = await axios.post("/api/auth/login", {
        username,
        password,
      });
      return data;
    },
    onSuccess: () => {
      //refetch the authUser 
      queryclient.invalidateQueries({queryKey:["authUser"]})
    },
    onError: (err) => {
      const message = err.response?.data?.error || "Something went wrong";
      toast.error(message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-screen-xl mx-auto flex h-screen">
      {/* Logo section on the left */}
      <div className="flex-1 hidden lg:flex items-center justify-center">
        <XSvg className="w-52 fill-white" />
      </div>

      {/* Login form on the right */}
      <div className="flex-1 flex flex-col justify-center items-center px-6">
        <style>
          {`
            @keyframes fadeInUp {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animated-text {
              animation: fadeInUp 1.5s ease-out;
            }
          `}
        </style>
        <form className="flex gap-6 flex-col w-full max-w-md" onSubmit={handleSubmit}>
          <h1 className="text-5xl font-extrabold text-white text-center animated-text">
            {"Let's"} Go.
          </h1>

          <label className="input input-bordered rounded-lg flex items-center gap-3 px-4 py-3 text-lg">
            <MdOutlineMail size={24} />
            <input
              type="text"
              className="grow bg-transparent outline-none"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
              value={formData.username}
            />
          </label>

          <label className="input input-bordered rounded-lg flex items-center gap-3 px-4 py-3 text-lg">
            <MdPassword size={24} />
            <input
              type="password"
              className="grow bg-transparent outline-none"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
            />
          </label>
          <button
            type="submit"
            className={`btn rounded-full btn-primary text-white text-lg py-3 `}
            
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
          {isError && <p className="text-red-500">{error.response?.data?.error || error.message}</p>}
        </form>
        <div className="flex flex-col gap-4 mt-6">
          <p className="text-white text-xl text-center">{"Don't"} have an account?</p>
          <Link to="/signup">
            <button className="btn rounded-full btn-primary text-white btn-outline w-full text-lg py-3">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
