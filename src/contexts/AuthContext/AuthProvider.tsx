import { useEffect, useState } from 'react';
import {
  AuthContext,
  type AuthContextType,
  type Credentials,
  type RegisterInput,
  type User,
} from './AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const fecthUserProfile = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/profile', {
          method: 'GET',
          credentials: 'include', // Include cookies in the request
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const data = await response.json();
        setUser(data.user);
        setIsAuthenticated(true);

        console.log(data.user);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setUser(null);
        setIsAuthenticated(false);
      }
    };
    fecthUserProfile();
  }, []);

  const login = async (credentials: Credentials): Promise<void> => {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      credentials: 'include', // Include cookies in the request
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    setUser(data.user);
    setIsAuthenticated(true);
  };

  const register = async (data: RegisterInput): Promise<void> => {};

  const logout = async (): Promise<void> => {
    try {
      await fetch('http://localhost:3000/auth/logout', {
        method: 'POST',
        credentials: 'include', // Include cookies in the request
      });

      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  async function signInWithGoogle(credential: string): Promise<void> {
    const response = await fetch('http://localhost:3000/auth/google-login', {
      method: 'POST',
      credentials: 'include', // Include cookies in the request
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credential }),
    });

    const data = await response.json();

    if (!response.ok || !data.user) {
      throw new Error(data.message || 'Google Sign-In failed');
    }

    setUser(data.user);
    setIsAuthenticated(true);
  }

  const value: AuthContextType = {
    user,
    isAuthenticated,
    login,
    register,
    logout,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
