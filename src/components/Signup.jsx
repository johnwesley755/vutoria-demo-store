import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import VuforiaLogo from "../assets/logo-1.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [accepted, setAccepted] = useState(false); // For terms acceptance
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accepted) {
      setError("Please accept the terms and conditions and privacy policy.");
      return;
    }
    setError(null);
    try {
      await signup(email, password);
      navigate("/"); // Redirect to home on successful signup
    } catch (err) {
      setError("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-200">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="text-center mb-6">
          <img src={VuforiaLogo} alt="Vuforia Logo" className="w-36 h-12 mx-auto" />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            Welcome to Vutoria
          </h1>
          <p className="text-gray-600 mt-2">
            Sign up to experience the future of virtual try-ons!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-1 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-purple-600"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <span className="ml-2 text-sm text-gray-600">
                I accept the{" "}
                <a
                  href="/terms-and-conditions"
                  className="text-purple-600 underline"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="text-purple-600 underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </div>
          <button
            type="submit"
            className={`w-full text-white py-3 rounded-lg font-medium shadow transition-all ${
              accepted
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!accepted}
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-purple-600 font-semibold hover:underline"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
