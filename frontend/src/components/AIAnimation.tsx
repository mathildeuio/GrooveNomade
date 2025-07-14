import React from 'react';
import { Music, Plane, Headphones, MapPin, Guitar, Compass, Camera, Heart, Mic, Globe, Star, Zap } from 'lucide-react';

const AIAnimation: React.FC = () => {
  const musicTravelIcons = [
    { Icon: Music, delay: '0s', color: 'text-purple-400' },
    { Icon: Plane, delay: '0.2s', color: 'text-pink-400' },
    { Icon: Headphones, delay: '0.4s', color: 'text-blue-400' },
    { Icon: MapPin, delay: '0.6s', color: 'text-orange-400' },
    { Icon: Guitar, delay: '0.8s', color: 'text-green-400' },
    { Icon: Compass, delay: '1s', color: 'text-yellow-400' },
    { Icon: Camera, delay: '1.2s', color: 'text-red-400' },
    { Icon: Heart, delay: '1.4s', color: 'text-pink-500' },
    { Icon: Mic, delay: '1.6s', color: 'text-purple-500' },
    { Icon: Globe, delay: '1.8s', color: 'text-blue-500' },
    { Icon: Star, delay: '2s', color: 'text-yellow-500' },
    { Icon: Zap, delay: '2.2s', color: 'text-orange-500' }
  ];

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="relative">
        {/* Main pulsating circle - EXTRA LARGE */}
        <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-pulse opacity-90 shadow-2xl"></div>
        
        {/* Multiple outer ring animations */}
        <div className="absolute inset-0 w-64 h-64 rounded-full border-4 border-purple-300 animate-ping opacity-30"></div>
        <div className="absolute inset-2 w-60 h-60 rounded-full border-3 border-pink-300 animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute inset-4 w-56 h-56 rounded-full border-2 border-orange-300 animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
        
        {/* Inner glow effects */}
        <div className="absolute inset-8 w-48 h-48 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 blur-lg animate-pulse opacity-70"></div>
        <div className="absolute inset-12 w-40 h-40 rounded-full bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 blur-md animate-pulse opacity-80" style={{ animationDelay: '0.3s' }}></div>
        
        {/* Core elements */}
        <div className="absolute inset-20 w-24 h-24 rounded-full bg-white animate-pulse shadow-2xl flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin"></div>
        </div>
        
        {/* Central icon */}
        <div className="absolute inset-28 w-8 h-8 flex items-center justify-center">
          <Music className="w-6 h-6 text-white animate-bounce" />
        </div>
        
        {/* Rotating music/travel icons around the circle */}
        {musicTravelIcons.map(({ Icon, delay, color }, index) => {
          const angle = (index * 360) / musicTravelIcons.length;
          const radius = 140; // Distance from center
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <div
              key={index}
              className={`absolute w-8 h-8 ${color} animate-bounce opacity-80 hover:scale-125 transition-transform duration-200`}
              style={{
                left: `calc(50% + ${x}px - 16px)`,
                top: `calc(50% + ${y}px - 16px)`,
                animationDelay: delay,
                animationDuration: '2s'
              }}
            >
              <Icon className="w-8 h-8 drop-shadow-lg" />
            </div>
          );
        })}
        
        {/* Additional floating particles */}
        <div className="absolute -top-4 -left-4 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0s' }}></div>
        <div className="absolute -top-4 -right-4 w-4 h-4 bg-pink-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-orange-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-8 -left-8 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-8 -right-8 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute -bottom-8 left-8 w-3 h-3 bg-red-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '3s' }}></div>
        <div className="absolute -bottom-8 right-8 w-3 h-3 bg-purple-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '3.5s' }}></div>
        
        {/* Rotating outer elements */}
        <div className="absolute inset-0 w-64 h-64 animate-spin" style={{ animationDuration: '20s' }}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-80"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-80"></div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full opacity-80"></div>
        </div>
        
        {/* Counter-rotating inner elements */}
        <div className="absolute inset-8 w-48 h-48 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full opacity-90 shadow-lg"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full opacity-90 shadow-lg"></div>
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-90 shadow-lg"></div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-90 shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default AIAnimation;