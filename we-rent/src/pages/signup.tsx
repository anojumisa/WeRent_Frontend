import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Address:", address);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="form-control w-full px-3 py-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="form-control w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="form-control w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">
              Address:
            </label>
            <input
              type="text"
              id="address"
              className="form-control w-full px-3 py-2 border rounded"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
        <div className="mt-4 text-center">
          <button className="w-full bg-gray-400 text-white py-2 rounded hover:bg-red-600 flex items-center justify-center">
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
