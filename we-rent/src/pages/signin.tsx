import React, { useState } from 'react';
import { loginUser } from '@/utils/api';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setErrorMessage(null); // Clear previous error messages

        try {
            // Use the `loginUser` function to call the API
            const data = await loginUser({ email, password });

            console.log('Login successful:', data);

            // Save token or user data to localStorage/sessionStorage
            localStorage.setItem('accessToken', data.accessToken);

            // Redirect to the homepage or dashboard
            window.location.href = '/';
        } catch (error: any) {
            // Handle error and display a meaningful message to the user
            const message =
                error.response?.data?.message || 'Login failed. Please try again.';
            setErrorMessage(message);
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign In</h2>
                {errorMessage && (
                    <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control w-full px-3 py-2 border rounded text-gray-700"
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
                            className="form-control w-full px-3 py-2 border rounded text-gray-700"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-600 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;