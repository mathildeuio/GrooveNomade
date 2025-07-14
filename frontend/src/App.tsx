import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import SiriAnimation from './components/SiriAnimation';
import AIChat from './components/AIChat';
// import FestivalCarousel from './components/FestivalCarousel';
import FestivalGrid from './components/FestivalGrid';
import Testimonials from './components/Testimonials';
import { useTheme } from './contexts/ThemeContext';
import { CheckCircle, Music, Plane, Sparkles, TrendingUp, Users } from 'lucide-react';

const AppContent: React.FC = () => {
  const { t } = useTheme();

  return (
<div className="min-h-screen bg-gradient-to-r from-blue-800/50 to-purple-800/50 backdrop-blur-sm w-full">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              {t('title')}
            </span>
            <br />
            <span className="text-gray-800 dark:text-white">{t('subtitle')}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Animation Siri */}
        <div className="mb-12">
          <SiriAnimation />
        </div>

        {/* AI Chat Section */}
        <div className="mb-16">
          <AIChat />
        </div>

<section className="py-20 bg-gradient-to-r from-blue-800/50 to-purple-800/50 backdrop-blur-sm w-full rounded-3xl mx-auto">
  <div className="px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
<h2 className="text-4xl font-bold text-center mt-4 mb-16 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
  Comment ça marche ?
</h2>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center group">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <Users className="h-10 w-10 text-white" />
        </div>
        <p className="text-gray-300 text-lg">
          Dites-nous vos goûts musicaux, vos dates et votre budget. Notre IA analyse vos préférences en temps réel.
        </p>
      </div>

      <div className="text-center group">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <Sparkles className="h-10 w-10 text-white" />
        </div>
        <p className="text-gray-300 text-lg">
          Recevez des recommandations ultra-personnalisées avec festivals, hébergements et activités locales.
        </p>
      </div>

      <div className="text-center group">
        <div className="bg-gradient-to-r from-green-500 to-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <Plane className="h-10 w-10 text-white" />
        </div>
        <p className="text-gray-300 text-lg">
          Réservez en un clic avec notre système intégré et partez vivre l'expérience de votre vie !
        </p>
      </div>
    </div>
  </div>
</section>



        
<h2 className="text-4xl font-bold text-center mt-16 mb-16 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
  Recommandations IA Personnalisées
</h2>

        {/* Festival Cards Grid */}
        <div className="mb-16">
          <FestivalGrid />
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <Testimonials />
        </div>

        
      </main>

            {/* Footer */}
      <footer className="bg-black/70 backdrop-blur-md py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className=" flex items-center space-x-2 mb-4">
                <img src="/assets/logo1.png" alt="Logo"  />
              </div>
              <p className="text-gray-400 mb-4">
                Votre agence de voyage spécialisée dans les festivals de musique du monde entier.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Certifié IATA</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Europe</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Amérique du Nord</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Asie</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Océanie</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Réservation festivals</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Hébergement</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Transport</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Activités locales</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Intégrations</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Airtable</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Make</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Stripe</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">PayPal</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-green-400">
                <TrendingUp className="h-4 w-4" />
                <span>IA powered</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 GrooveNomad. Tous droits réservés. Vivez la musique, explorez le monde.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
