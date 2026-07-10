'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import api from "../lib/axios"
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    api.get('/me').then(res => setUser(res.data.user)).catch(() => setUser(null));
  }, []);

  const login = async (email, password) => {
    const res = await api.post('/login', { email, password });
    setUser(res.data.user);
    router.push('/dashboard');
  };

  const register = async (username, email, password) => {
    const res = await api.post('/register', { username, email, password });
    setUser(res.data.user);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);