import React, { useState } from 'react';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email:</label>
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
                        <label htmlFor="password" className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control w-full px-3 py-2 border rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;