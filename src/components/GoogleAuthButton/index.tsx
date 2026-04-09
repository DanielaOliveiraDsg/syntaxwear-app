import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { useNavigate } from '@tanstack/react-router';

type GoogleAuthButtonProps = {
  mode?: 'signin' | 'signup';
};

export const GoogleAuthButton = ({
  mode = 'signin',
}: GoogleAuthButtonProps) => {
  const [googleError, setGoogleError] = useState<string | null>(null);
  const [, setIsLoadingGoogle] = useState(false);
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const buttonText = mode === 'signup' ? 'signup_with' : 'signin_with';

  const handleSuccess = async (
    credentialResponse: CredentialResponse
  ): Promise<void> => {
    const credential = credentialResponse.credential;
    console.log('Google Token:', credential);

    if (!credential) {
      setGoogleError('Google Sign-In failed. Please try again.');
      setIsLoadingGoogle(false);
      return;
    }

    setIsLoadingGoogle(true);
    setGoogleError(null);

    try {
      await signInWithGoogle(credential);
      navigate({ to: '/' });
    } catch (error) {
      let errorMessage = 'Google Sign-In failed. Please try again.';
      if (error instanceof Error) {
        errorMessage = error.message;
        setGoogleError(errorMessage);
      }
    } finally {
      setIsLoadingGoogle(false);
    }
  };

  function handleError(): void {
    setGoogleError('Google Sign-In failed. Please try again.');
    setIsLoadingGoogle(false);
  }

  return (
    <>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        text={buttonText}
      />
      {googleError && (
        <p className="text-sm text-red-500 text-center mt-4">{googleError}</p>
      )}
    </>
  );
};
