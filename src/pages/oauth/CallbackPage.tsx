import { useEffect } from 'react';
import { onMcpAuthorization } from 'use-mcp';

export default function OAuthCallbackPage() {
  useEffect(() => {
    onMcpAuthorization();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Authenticating...</h1>
        <p className="mt-2">This window should close automatically.</p>
      </div>
    </div>
  );
}



