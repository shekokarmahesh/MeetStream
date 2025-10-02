import type { GoogleUser, GoogleCredentialPayload, User } from '@/types/auth';

export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const decodeGoogleCredential = (credential: string): GoogleCredentialPayload => {
  try {
    const payload = JSON.parse(atob(credential.split('.')[1]));
    return payload;
  } catch (error) {
    console.error('Error decoding Google credential:', error);
    throw new Error('Invalid Google credential');
  }
};

export const extractUserFromCredential = (response: GoogleUser): User => {
  const payload = decodeGoogleCredential(response.credential);
  
  return {
    name: payload.name,
    email: payload.email,
    picture: payload.picture,
  };
};

export const initializeGoogleAuth = (callback: (response: GoogleUser) => void) => {
  if (!window.google) {
    console.error('Google Identity Services not loaded');
    return;
  }

  if (!GOOGLE_CLIENT_ID) {
    console.error('Google Client ID not found. Please set VITE_GOOGLE_CLIENT_ID in your environment variables.');
    return false;
  }

  try {
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback,
    });
    return true;
  } catch (error) {
    console.error('Failed to initialize Google Auth:', error);
    return false;
  }
};

export const renderGoogleButton = (
  element: HTMLElement,
  options?: {
    theme?: 'outline' | 'filled_blue' | 'filled_black';
    size?: 'large' | 'medium' | 'small';
    width?: number;
    text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
    shape?: 'rectangular' | 'pill' | 'circle' | 'square';
  }
) => {
  if (!window.google) {
    console.error('Google Identity Services not loaded');
    return;
  }

  const defaultOptions = {
    theme: 'outline' as const,
    size: 'large' as const,
    width: 300,
    text: 'signin_with' as const,
    shape: 'rectangular' as const,
  };

  window.google.accounts.id.renderButton(element, {
    ...defaultOptions,
    ...options,
  });
};
