import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { 
  initializeGoogleAuth, 
  renderGoogleButton, 
  extractUserFromCredential 
} from '@/lib/googleAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import katalystLogo from '@/assets/katalystlogi.png';
import type { GoogleUser } from '@/types/auth';

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

    // Wait for Google script to load
    const initializeAuth = () => {
      // Initialize Google Sign-In
      const initialized = initializeGoogleAuth(handleCredentialResponse);
      
      if (initialized && googleButtonRef.current) {
        // Clear any existing content
        googleButtonRef.current.innerHTML = '';
        
        // Render Google button
        renderGoogleButton(googleButtonRef.current, {
          theme: 'outline',
          size: 'large',
          width: 300,
          text: 'signin_with',
          shape: 'rectangular',
        });
      }
    };

    // Check if Google script is already loaded
    if (window.google) {
      initializeAuth();
    } else {
      // Wait for script to load
      const checkGoogleLoaded = setInterval(() => {
        if (window.google) {
          clearInterval(checkGoogleLoaded);
          initializeAuth();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkGoogleLoaded), 10000);
    }
  }, [navigate, isAuthenticated]);

  const handleCredentialResponse = (response: GoogleUser) => {
    try {
      const userData = extractUserFromCredential(response);
      login(userData);
      navigate('/home');
    } catch (error) {
      // Silent error handling
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="space-y-4 text-center pb-8">
            <div className="mx-auto w-20 h-20 flex items-center justify-center">
              <img 
                src={katalystLogo} 
                alt="Katalyst Logo" 
                className="w-16 h-16 object-contain drop-shadow-lg"
              />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Welcome to Katalyst
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Your intelligent calendar companion
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6 pb-8">
            <div className="space-y-4">
              <div ref={googleButtonRef} className="w-full flex justify-center"></div>
              
              <div className="relative">
                <Separator className="my-6" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-3 text-xs text-muted-foreground">
                    Secure Authentication
                  </span>
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground text-center leading-relaxed">
                By signing in, you agree to our{' '}
                <span className="text-primary hover:underline cursor-pointer">Terms of Service</span>
                {' '}and{' '}
                <span className="text-primary hover:underline cursor-pointer">Privacy Policy</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Experience seamless calendar management with AI-powered insights
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
