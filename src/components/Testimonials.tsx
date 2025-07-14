import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  rating: number;
  comment: string;
  festival: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    age: 24,
    location: 'Paris, France',
    rating: 5,
    comment: "Incroyable ! L'IA de GrooveNomad a parfaitement cerné mes goûts. Burning Man était exactement ce que je cherchais. Une expérience transformante !",
    festival: 'Burning Man 2023',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
  },
  {
    id: '2',
    name: 'Alex K.',
    age: 28,
    location: 'Berlin, Allemagne',
    rating: 5,
    comment: "Organisation parfaite, recommandations sur mesure. J'ai découvert des festivals underground incroyables grâce à leurs suggestions personnalisées.",
    festival: 'Berghain Festival 2023',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
  },
  {
    id: '3',
    name: 'Emma L.',
    age: 22,
    location: 'Lyon, France',
    rating: 5,
    comment: "Le voyage de mes rêves ! L'équipe a géré tous les détails, de l'hébergement aux transports. Je recommande à 100% !",
    festival: 'Tomorrowland 2023',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
  },
  {
    id: '4',
    name: 'Thomas R.',
    age: 26,
    location: 'Montreal, Canada',
    rating: 5,
    comment: "Service client exceptionnel et IA bluffante. Ils ont su me proposer exactement le style de festival qui me correspondait.",
    festival: 'Coachella 2023',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mt-4 mb-16 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
  Ils Ont Vécu L'Expérience GrooveNomad
</h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 dark:border-white/10 p-6 max-w-3xl mx-auto hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-start space-x-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-200"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-orange-400">{testimonial.name}</h4>
                    <p className="text-sm text-white-500">{testimonial.age} ans • {testimonial.location}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-purple-200" />
                  <p className="text-white-100 text-sm leading-relaxed pl-4 mb-3">
                    {testimonial.comment}
                  </p>
                </div>
                
                <div className="bg-gradient-to-r  rounded-lg px-3 py-2 bg-transparent">
                  <p className="text-xs font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    📍 {testimonial.festival}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;