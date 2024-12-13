import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase"; // Ensure the correct import path
import logoImg from "../assets/logo-1.png"
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("A password reset email has been sent to your inbox.");
      setError("");
    } catch (err) {
      setMessage("");
      setError("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-300">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <img
            src={logoImg} // Replace with the path to your logo
            alt="Vutoria Logo"
            className="mx-auto h-12 w-36 mb-4"
          />
          <h2 className="text-3xl font-bold text-violet-600">
            Forgot Your Password?
          </h2>
          <p className="text-gray-600 mt-2">
            Enter your email, and we'll send you a link to reset your password.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-6">
          {message && (
            <p className="text-green-500 bg-green-100 p-2 rounded mb-4">
              {message}
            </p>
          )}
          {error && (
            <p className="text-red-500 bg-red-100 p-2 rounded mb-4">{error}</p>
          )}
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
              className="w-full mt-1 p-3 border rounded-lg focus:ring-violet-500 focus:border-violet-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-6 text-center">
          <a
            href="/login"
            className="text-violet-600 font-semibold hover:underline"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
