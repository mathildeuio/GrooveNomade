import React from 'react';
import { Music, Plane, Headphones, MapPin, Guitar, Compass, Camera, Heart, Mic, Globe, Star, Zap } from 'lucide-react';

const SiriAnimation: React.FC = () => {
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
        {/* Siri-style wave animation container */}
        <div className="w-80 h-32 flex items-center justify-center">
          {/* Multiple wave bars with different heights and animations */}
          <div className="flex items-end space-x-1">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-t from-purple-500 via-pink-500 to-orange-500 rounded-full animate-pulse"
                style={{
                  width: '4px',
                  height: `${20 + Math.sin(i * 0.5) * 15 + Math.random() * 20}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${1 + Math.random()}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Central glow effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-16 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-orange-400/30 rounded-full blur-xl animate-pulse"></div>
        </div>

        {/* Rotating music/travel icons around the wave */}
        {musicTravelIcons.map(({ Icon, delay, color }, index) => {
          const angle = (index * 360) / musicTravelIcons.length;
          const radiusX = 180; // Horizontal radius
          const radiusY = 80;  // Vertical radius (ellipse)
          const x = Math.cos((angle * Math.PI) / 180) * radiusX;
          const y = Math.sin((angle * Math.PI) / 180) * radiusY;
          
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
        <div className="absolute -top-8 -left-8 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0s' }}></div>
        <div className="absolute -top-8 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -bottom-8 -left-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 -right-8 w-4 h-4 bg-orange-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Side particles */}
        <div className="absolute top-4 -left-12 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-4 -right-12 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute -bottom-4 left-12 w-3 h-3 bg-red-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '3s' }}></div>
        <div className="absolute -bottom-4 right-12 w-3 h-3 bg-purple-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '3.5s' }}></div>
      </div>
    </div>
  );
};

export default SiriAnimation;