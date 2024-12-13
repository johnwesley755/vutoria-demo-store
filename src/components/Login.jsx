import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logoImg from "../assets/logo-1.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(email, password);
      navigate("/"); // Redirect to home on successful login
    } catch (err) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-200">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <img
            src={logoImg} // Replace with the path to your logo
            alt="Vutoria Logo"
            className="mx-auto h-12 w-36 mb-4"
          />
          <h2 className="text-3xl font-bold text-purple-700">
            Welcome Back to Vutoria
          </h2>
          <p className="text-gray-600 mt-2">
            Log in to your account to continue
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 border rounded-lg focus:ring-purple-500 focus:border-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-purple-600 font-medium hover:underline"
            >
              Sign up here
            </a>
          </p>
          <a
            href="/forgot-password"
            className="text-sm text-purple-600 font-medium hover:underline mt-4 block"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
