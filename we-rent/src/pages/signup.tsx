import React, { useState } from "react";
import * as yup from "yup";
import { registerUser } from "../utils/api";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    phone_number: yup.string().matches(/^\d+$/, "Phone must be a valid number").required("Phone is required"),
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      // Validate input fields
      await validationSchema.validate({ username, email, password, phone_number }, { abortEarly: false });

      // Call registerUser API
      const response = await registerUser({ username, email, password, phone_number });
      alert("Registration successful! Please log in.");

      // Clear form fields on success
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (errors) {
      if (errors instanceof yup.ValidationError) {
        // Display the first validation error
        setErrorMessage(errors.errors[0]);
      } else {
        // Handle API error
        setErrorMessage("Registration failed. Please try again later.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h2>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-black">Username:</label>
            <input
              type="text"
              id="username"
              className="form-control w-full px-3 py-2 border rounded text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control w-full px-3 py-2 border rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone number" className="block text-black">Phone:</label>
            <input
              type="tel"
              id="phone"
              className="form-control w-full px-3 py-2 border rounded text-black"
              value={phone_number}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-black">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control w-full px-3 py-2 border rounded text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-800"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-black">
          Already have an account?{" "}
          <a href="/signin" className="text-teal-700 hover:underline">
            Log in
          </a>
        </p>
        <div className="mt-4 text-center">
          <button className="w-full bg-gray-700 text-white py-2 rounded hover:bg-red-800 flex items-center justify-center">
            Login with Google
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Google icon"
              className="mr-2 ml-2 bg-white rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;