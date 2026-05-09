# 🚀 Guide de Déploiement : Alwaysdata

Ce projet a été configuré pour fonctionner de manière autonome sur **Alwaysdata** grâce à un serveur Node.js unifié (`server.cjs`). Ce script sert à la fois les fichiers de ton portfolio (le design) et gère ton API d'envoi d'emails.

## Étape 1 : Préparation locale

1. Assure-toi que les dernières modifications sont commitées et poussées sur GitHub.
2. Le projet doit être buildé au moins une fois pour générer le dossier `dist/` :
   ```bash
   npm run build
   ```

## Étape 2 : Création de l'application sur Alwaysdata

1. Connecte-toi à ton interface d'administration Alwaysdata.
2. Dans le menu de gauche, va dans **Web** -> **Sites**.
3. Clique sur **Ajouter un site**.
4. Configure le site ainsi :
   - **Adresses** : `fabien-thiesset.fr` (ou ton adresse `.alwaysdata.net` temporaire).
   - **Type** : `Node.js`.
   - **Chemin de l'application** : `/www/portfolio` (ou le dossier où tu vas cloner ton projet).
   - **Commande de démarrage** : `node server.cjs`
   - **Version de Node.js** : La version recommandée la plus récente (ex: 20.x ou 22.x).
5. Dans la section **Environnement**, ajoute les 4 variables nécessaires pour ton formulaire de contact :
   - `SMTP_HOST` : `smtp.alwaysdata.com`
   - `SMTP_USER` : `ton_adresse@alwaysdata.net` (celle que tu as créée pour envoyer les mails)
   - `SMTP_PASS` : `TonMotDePasseSMTP`
   - `CONTACT_EMAIL` : `thiessetfabienpro@gmail.com`

## Étape 3 : Déploiement du code (via SSH)

1. Connecte-toi en SSH à ton serveur Alwaysdata (les identifiants sont dans la rubrique **Accès distant** -> **SSH**).
2. Clone ton dépôt dans le dossier défini à l'étape 2 (ex: `/www/portfolio`) :
   ```bash
   cd www
   git clone git@github.com:ThiessetFabien/portfolio.v3.git portfolio
   cd portfolio
   ```
3. Installe les dépendances :
   ```bash
   npm install --production
   ```
4. Lance le build :
   ```bash
   npm run build
   ```

## Étape 4 : Redémarrage

1. Retourne sur l'interface d'administration Alwaysdata.
2. Dans **Web** -> **Sites**, clique sur l'icône **Redémarrer** à côté de ton site Node.js.

🎉 **C'est fini !** Ton portfolio est maintenant en ligne, souverain et ton formulaire de contact est fonctionnel.
