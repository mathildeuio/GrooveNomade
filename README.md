# GrooveNomad - Frontend

GrooveNomad est une application web immersive dédiée aux passionnés de festivals de musique. Cette partie correspond au **frontend**, développé avec **React** et **Vite**, intégrant un chatbot IA, une carte interactive, une personnalisation multilingue et une interface moderne.

## 🧰 Prérequis

- Node.js (v18 ou plus recommandé) : [https://nodejs.org/](https://nodejs.org/)
- npm ou yarn

## ⚙️ Installation

Clone le dépôt :

```bash
git clone https://github.com/mathildeuio/GrooveNomade.git
cd GrooveNomade/frontend
```

Installe les dépendances :

```bash
npm install
# ou
yarn install
```

## 🚀 Lancer le projet en développement

```bash
npm run dev
# ou
yarn dev
```

Le projet sera disponible sur :  
[http://localhost:5173](http://localhost:5173)

## 🏗️ Structure principale

```
frontend/
├── public/              # Fichiers statiques (logo, images...)
├── src/
│   ├── components/      # Composants réutilisables (cards, chat, navbar…)
│   ├── pages/           # Pages principales
│   ├── contexts/        # Contexte (Theme, Langue…)
│   ├── assets/          # Images, icônes…
│   ├── App.tsx          # Entrée principale de l'app
│   └── main.tsx         # Initialisation React
├── index.html
└── vite.config.ts       # Configuration Vite
```

## 🌍 Traduction

L’application utilise `t('clé')` pour gérer les traductions via un contexte multilingue.

## 🤖 Chat IA

Le composant `AIChat` est intégré avec une animation vocale et une interface intuitive.

## 📦 Build (production)

```bash
npm run build
# ou
yarn build
```

## 👀 Preview (version buildée)

```bash
npm run preview
# ou
yarn preview
```

## 📄 Licence

Projet personnel éducatif. Tous droits réservés à l'équipe GrooveNomad.
