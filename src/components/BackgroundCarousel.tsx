 import React from 'react';

const BackgroundCarousel: React.FC = () => {
  const festivalImages = [
    'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg',
    'https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg'
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Overlay beaucoup plus opaque */}
      <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/85 backdrop-blur-sm"></div>
      
      {/* Animation en zigzag plus fun */}
      <div className="flex animate-zigzag-scroll">
        {/* Premier set d'images */}
        {festivalImages.map((image, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 w-80 h-screen bg-cover bg-center opacity-40 transform hover:scale-110 transition-transform duration-500"
            style={{ 
              backgroundImage: `url(${image})`,
              animationDelay: `${index * 0.5}s`
            }}
          />
        ))}
        
        {/* Deuxième set pour la continuité */}
        {festivalImages.map((image, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 w-80 h-screen bg-cover bg-center opacity-40 transform hover:scale-110 transition-transform duration-500"
            style={{ 
              backgroundImage: `url(${image})`,
              animationDelay: `${(index + festivalImages.length) * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Particules flottantes pour plus de fun */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundCarousel;
