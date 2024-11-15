import React, { useState } from "react";
import * as yup from "yup";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    address: yup.string().required("Address is required"),
    phone: yup.string().required("Phone is required"),
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await validationSchema.validate({ name, email, password, address, phone }, { abortEarly: false });
      // Handle form submission logic here
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Address:", address);
      console.log("Phone:", phone);
      alert("Thank you for signing up!");
      // Reset fields after alert
      setName("");
      setEmail("");
      setPassword("");
      setAddress("");
      setPhone("");
    } catch (errors) {
      if (errors instanceof yup.ValidationError) {
        errors.inner.forEach((error) => {
          console.error(error.message);
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="form-control w-full px-3 py-2 border rounded text-black"
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
              className="form-control w-full px-3 py-2 border rounded text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="form-control w-full px-3 py-2 border rounded text-black"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-black">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              className="form-control w-full px-3 py-2 border rounded text-black"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-black">
              Password:
            </label>
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
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
            Sign Up
            </button>

        </form>
        <p className="mt-4 text-center text-black">
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