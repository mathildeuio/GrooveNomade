import React, { useState } from 'react';
import FestivalCard from './FestivalCard';

const festivals = [
  {
    id: '1',
    name: 'Coachella',
    location: 'Indio, Californie',
    date: '12-21 Avril 2024',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
    genre: 'Pop / Rock',
    price: '2,100€',
    rating: 4.7,
    attendees: '250k+',
    description: 'Le festival US le plus tendance de la planète.',
    highlights: ['Mode', 'Influenceurs', 'Ambiance désertique']
  },
 {
    id: '2',
    name: 'Coachella',
    location: 'Californie, USA',
    date: 'Avril 2025',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
    genre: 'Multi-genre',
    price: '1800€',
    rating: 4.7,
    attendees: '250K+',
    description: 'L\'expérience festival ultime alliant musique, art et mode dans le désert californien.',
    highlights: ['Art installations', 'Fashion week']
          },
    {
            id: '3',
            name: 'Burning Man',
            location: 'Nevada, USA',
            date: 'Août 2025',
            image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800',
            genre: 'Art & Music',
            price: '2200€',
            rating: 4.8,
            attendees: '80K+',
            description: 'Une expérience transformatrice unique mêlant art, musique et communauté dans le désert.',
            highlights: ['Art radical', 'Communauté', 'Survie désert']
          },
 {
            id: '4',
            name: 'Glastonbury',
            location: 'Somerset, Angleterre',
            date: 'Juin 2025',
            image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800',
            genre: 'Rock/Pop',
            price: '950€',
            rating: 4.6,
            attendees: '200K+',
            description: 'Le festival britannique légendaire avec une programmation éclectique et une ambiance unique.',
            highlights: ['Mud & music', 'Légendes rock', 'Ambiance british']
          },
  {
            id: '5',
            name: 'Ultra Music Festival',
            location: 'Miami, USA',
            date: 'Mars 2025',
            image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
            genre: 'EDM',
            price: '1600€',
            rating: 4.5,
            attendees: '165K+',
            description: 'Le temple de la musique électronique avec les plus grands DJs de la planète.',
            highlights: ['Miami vibes', 'Pool parties', 'DJ legends']
          },
   {
            id: '6',
            name: 'Sziget Festival',
            location: 'Budapest, Hongrie',
            date: 'Août 2025',
            image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
            genre: 'Multi-genre',
            price: '850€',
            rating: 4.4,
            attendees: '500K+',
            description: 'L\'île de la liberté avec 7 jours de musique non-stop et une ambiance européenne unique.',
            highlights: ['Île du Danube', '7 jours non-stop', 'Prix abordable']
          }
  // ajoute d’autres festivals si besoin
];

const FestivalGrid: React.FC = () => {
  const [likedFestivals, setLikedFestivals] = useState<string[]>([]);
  const [bookmarkedFestivals, setBookmarkedFestivals] = useState<string[]>([]);

  const handleLike = (id: string) => {
    setLikedFestivals(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const handleBookmark = (festival: any) => {
    setBookmarkedFestivals(prev =>
      prev.includes(festival.id) ? prev : [...prev, festival.id]
    );
    // Tu peux ajouter une action ici (localStorage ou API)
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {festivals.map(festival => (
        <FestivalCard
          key={festival.id}
          festival={festival}
          isLiked={likedFestivals.includes(festival.id)}
          onLike={handleLike}
          onBookmark={handleBookmark}
        />
      ))}
    </div>
  );
};

export default FestivalGrid;
