'use client';
import { useState } from 'react';
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
    <>
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-sm bg-white border border-gray-300 rounded-md p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Login
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded-md p-2 outline-none focus:border-blue-500"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</>
    </>
  );
}