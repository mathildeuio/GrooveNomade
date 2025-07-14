import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Users } from 'lucide-react';

interface Festival {
  id: string;
  name: string;
  location: string;
  date: string;
  image: string;
  genre: string;
  attendees: string;
  price: string;
}

const festivals: Festival[] = [
  {
    id: '1',
    name: 'Tomorrowland',
    location: 'Boom, Belgique',
    date: '21-23 Juillet 2024',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
    genre: 'Electronic',
    attendees: '400k+',
    price: 'À partir de 1,250€'
  },
  {
    id: '2',
    name: 'Coachella',
    location: 'Indio, Californie',
    date: '12-21 Avril 2024',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
    genre: 'Pop, Rock, Hip-Hop',
    attendees: '250k+',
    price: 'À partir de 2,100€'
  },
  {
    id: '3',
    name: 'Glastonbury',
    location: 'Somerset, Angleterre',
    date: '26-30 Juin 2024',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    genre: 'Rock, Pop, Folk',
    attendees: '200k+',
    price: 'À partir de 890€'
  },
  {
    id: '4',
    name: 'Ultra Miami',
    location: 'Miami, Floride',
    date: '22-24 Mars 2024',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
    genre: 'EDM, Techno',
    attendees: '165k+',
    price: 'À partir de 1,650€'
  }
];

const FestivalCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === festivals.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? festivals.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Recommandations IA Personnalisées
      </h2>
      
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {festivals.map((festival) => (
            <div key={festival.id} className="w-full flex-shrink-0">
              <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${festival.image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">{festival.name}</h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{festival.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{festival.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{festival.attendees}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full text-sm font-medium">
                      {festival.genre}
                    </span>
                    <span className="text-xl font-bold">{festival.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {festivals.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FestivalCarousel;