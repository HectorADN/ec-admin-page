import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/auth/store/auth.store';
import { Link } from 'react-router';

export const AdminHeader: React.FC = () => {

  const { user, logout } = useAuthStore();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 h-18">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          { !user ? (
            <Link to={'/'}>
              <Button
                variant="default" size="sm" className="ml-2"
              >
              Login
            </Button>
            </Link>
          ) : (
            <Button
              onClick={logout}
              variant="destructive" size="sm" className="ml-2"
          >
            Cerrar sesión
          </Button>
          )


          }
        </div>
      </div>
    </header>
  );
};

