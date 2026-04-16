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
const API_BASE_URL = import.meta.env.VITE_API_URL;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const fecthUserProfile = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/auth/profile`, {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const data = await response.json();
        setUser(data.user);
        setIsAuthenticated(true);

      } catch (error) {
        console.error('Error fetching user profile:', error);
        setUser(null);
        setIsAuthenticated(false);
      }
    };
    fecthUserProfile();
  }, []);

  const parseErrorResponse = async (response: Response): Promise<string> => {
    const contentType = response.headers.get('content-type');
    let bodyText: string;

    try {
      bodyText = await response.text();
    } catch {
      return getDefaultErrorMessage(response.status) || 'Request failed';
    }

    if (contentType?.includes('application/json')) {
      try {
        const data = JSON.parse(bodyText);
        if (data?.message) return data.message;
        if (data?.error) return data.error;
        if (Array.isArray(data?.errors) && data.errors.length > 0) {
          return data.errors
            .map((err: { message?: string } | string) =>
              typeof err === 'string' ? err : err.message || 'Unknown error'
            )
            .join(', ');
        }
        // If we successfully parsed JSON but found no error fields, use status-based message
        return getDefaultErrorMessage(response.status) || 'Request failed';
      } catch {
        // ignore invalid JSON and fall through to text fallback
      }
    }

    return bodyText && bodyText !== '{}'
      ? bodyText
      : getDefaultErrorMessage(response.status) || 'Request failed';
  };

  const getDefaultErrorMessage = (status: number): string | null => {
    switch (status) {
      case 400:
        return 'Invalid request. Please check your input.';
      case 401:
        return 'Invalid credentials. Please check your email and password.';
      case 403:
        return 'Access denied.';
      case 404:
        return 'Resource not found.';
      case 409:
        return 'This email is already registered. Please use a different email or try signing in.';
      case 422:
        return 'Validation failed. Please check your input.';
      case 429:
        return 'Too many requests. Please try again later.';
      case 500:
        return 'Server error. Please try again later.';
      default:
        return null;
    }
  };

  const logIn = async (credentials: Credentials): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      credentials: 'include', // Include cookies in the request
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const message = await parseErrorResponse(response);
      throw new Error(message || 'Login failed');
    }

    const data = await response.json();
    setUser(data.user);
    setIsAuthenticated(true);
  };

  const signUp = async (data: RegisterInput): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      credentials: 'include', // Include cookies in the request
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const message = await parseErrorResponse(response);
      throw new Error(message || 'Signup failed');
    }

    const signupData = await response.json();
    setUser(signupData.user);
    setIsAuthenticated(true);
  };

  const logOut = async (): Promise<void> => {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
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
    const response = await fetch(`${API_BASE_URL}/auth/google-login`, {
      method: 'POST',
      credentials: 'include', // Include cookies in the request
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ credential }),
    });

    if (!response.ok) {
      const message = await parseErrorResponse(response);
      throw new Error(message || 'Google Sign-In failed');
    }

    const data = await response.json();

    if (!data.user) {
      throw new Error('Google Sign-In failed');
    }

    setUser(data.user);
    setIsAuthenticated(true);
  }

  const value: AuthContextType = {
    user,
    isAuthenticated,
    logIn,
    signUp,
    logOut,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
