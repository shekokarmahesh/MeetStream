import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const HomePage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/');
    }
  }, [navigate, isAuthenticated, isLoading]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Katalyst</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">
                  {user.name}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={user.picture}
              alt={user.name}
              className="h-24 w-24 rounded-full mx-auto mb-4 shadow-lg"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome, {user.name}!
            </h1>
            <p className="text-lg text-gray-600">
              You're successfully logged in to Katalyst
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {user.email}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Dashboard
            </h2>
            <p className="text-gray-600 mb-6">
              This is your personalized dashboard. Start exploring the features available to you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-800 mb-2">Profile</h3>
                <p className="text-sm text-gray-600">Manage your account settings and preferences</p>
              </div>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-800 mb-2">Projects</h3>
                <p className="text-sm text-gray-600">View and manage your projects</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
