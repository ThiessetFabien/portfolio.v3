# Fabien Thiesset - Portfolio 3.0 (Pro-Flow Edition)

Portfolio professionnel haute performance conçu pour mettre en valeur une double expertise : **Management de Projet Technique** et **Lead Développement Santé/Data**.

## 🚀 Vision & Méthodologie

Ce projet a été audité et optimisé selon la méthodologie **Pro-Flow**, garantissant :
- **BMAD (Besoin-Méthode-Action-Donnée)** : Chaque projet est présenté comme une étude de cas orientée résultats et impact utilisateur.
- **Ingénierie Anti-Régression** : Code robuste, typographie responsive mobile-first et animations fluides (GPU Accelerated).
- **Souveraineté Numérique** : Transition vers un hébergement souverain (**Alwaysdata**) avec un backend mail personnalisé, supprimant les dépendances aux solutions cloud opaques.

## 🛠️ Stack Technique

- **Frontend** : React 18, Vite, Tailwind CSS (via JIT).
- **Icons & Motion** : Lucide React, Framer Motion (reveal logic).
- **Backend Souverain** : Node.js (Nodemailer via SMTP Alwaysdata).
- **Data** : Architecture pilotée par JSON (`data.json`) pour une maintenance facilitée.

## 📦 Installation & Développement

### Pré-requis
- Node.js (LTS)
- Un compte Alwaysdata (pour le déploiement backend)

### Installation
```bash
npm install
```

### Lancement local
```bash
npm run dev
```

## 🔐 Déploiement & Configuration (Alwaysdata)

Pour activer le formulaire de contact sur Alwaysdata, configurez les variables d'environnement suivantes :

- `SMTP_HOST`: `smtp.alwaysdata.com`
- `SMTP_USER`: Votre identifiant Alwaysdata
- `SMTP_PASS`: Votre mot de passe SMTP
- `CONTACT_EMAIL`: L'adresse qui recevra les messages

## 📄 Licence

Propriété exclusive de Fabien Thiesset. Utilisation des composants autorisée pour étude, reproduction interdite pour usage commercial sans accord.
