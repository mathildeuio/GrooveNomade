import React from 'react';
import { Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
<header className="w-full sticky top-0 z-50 border-0 border-purple-100 bg-black/50 backdrop-blur-2xl shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 overflow-hidden flex items-center justify-center">
  <img
    src="/assets/logo.png"
    alt="Logo"
    className="w-full h-full object-contain"
  />
</div>


              <div className="absolute -top-1 -right-1 w-4 h-4">
                <Sparkles className="w-3 h-3 text-yellow-300 animate-ping" />
              </div>
            </div>
            <div className="flex flex-col">
            <div className="flex flex-col leading-tight">
<span className="text-l font-extrabold text-white" translate="no">Groove</span>
<span className="text-l font-extrabold text-white" translate="no">Nomad</span>

</div>


          
            </div>
          </div>
          
          <ThemeToggle />
        </div>
      </div>
      
      {/* Animated border bottom */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-pulse"></div>
    </header>
  );
};

export default Header;
