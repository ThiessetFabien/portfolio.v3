const express = require('express');
const path = require('path');
require('dotenv').config();
const contactHandler = require('./api/contact.cjs');

const app = express();

// Middleware pour parser le JSON des requêtes POST
app.use(express.json());

// 1. Définition de la route API pour le formulaire de contact
app.post('/api/contact', contactHandler);

// 2. Servir les fichiers statiques du build React (dossier dist)
// C'est ici que se trouve le code compilé par Vite
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// 3. Fallback "Catch-all" pour le routing SPA (Single Page Application)
// Si la route n'est ni l'API, ni un fichier statique existant, on renvoie index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Alwaysdata définit le port via la variable d'environnement PORT
// S'il n'y a pas de port (en local), on utilise 8080 par défaut
const PORT = process.env.PORT || 8080;
const IP = process.env.IP || '0.0.0.0';

app.listen(PORT, IP, () => {
  console.log(`Serveur démarré sur http://${IP}:${PORT}`);
  console.log(`Prêt pour la production sur Alwaysdata !`);
});
