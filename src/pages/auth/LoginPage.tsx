import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { 
  initializeGoogleAuth, 
  renderGoogleButton, 
  extractUserFromCredential 
} from '@/lib/googleAuth';
import { GoogleUser } from '@/types/auth';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const googleButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user is already logged in
    if (isAuthenticated) {
      navigate('/home');
      return;
    }

    // Initialize Google Sign-In
    initializeGoogleAuth(handleCredentialResponse);

    // Render Google button
    if (googleButtonRef.current) {
      renderGoogleButton(googleButtonRef.current, {
        theme: 'outline',
        size: 'large',
        width: 300,
        text: 'signin_with',
        shape: 'rectangular',
      });
    }
  }, [navigate, isAuthenticated]);

  const handleCredentialResponse = (response: GoogleUser) => {
    try {
      const userData = extractUserFromCredential(response);
      login(userData);
      navigate('/home');
    } catch (error) {
      console.error('Error processing Google Sign-In:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome to Katalyst
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div ref={googleButtonRef} className="w-full flex justify-center"></div>
            
            <div className="text-xs text-gray-500 text-center max-w-sm">
              By signing in, you agree to our Terms of Service and Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
