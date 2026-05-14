# 🚀 Guide de Déploiement : Alwaysdata

Ce projet a été configuré pour fonctionner de manière autonome sur **Alwaysdata** grâce à un serveur Node.js unifié (`server.cjs`). Ce script sert à la fois les fichiers de ton portfolio (le design) et gère ton API d'envoi d'emails.

Le workflow actuel utilise une approche **"Zero-Install"** : tout est packagé en local (y compris `node_modules` et `.env`), ce qui évite de devoir exécuter `npm install` ou configurer des choses sur le serveur distant.

## Étape 1 : Préparation locale & Packaging

1. Vérifie que ton fichier `.env` local contient bien tes identifiants SMTP.
   > [!WARNING]
   > Pour Alwaysdata, `SMTP_USER` doit être une adresse email complète (ex: `fabienthiesset@alwaysdata.net`), et non ton nom d'utilisateur SSH.
2. Génère le build et le pack de déploiement :
   ```bash
   npm run deploy
   ```
   *Ce script compile le projet (Vite), rassemble le serveur Node.js, l'API, les dépendances et le fichier `.env` dans un fichier `deploy_pack.zip`.*

## Étape 2 : Configuration sur Alwaysdata (À faire une seule fois)

1. Connecte-toi à ton interface d'administration Alwaysdata.
2. Dans **Web** -> **Sites**, clique sur **Ajouter un site**.
3. Configure le site ainsi :
   - **Adresses** : `fabien-thiesset.fr` (ou ton adresse `.alwaysdata.net`).
   - **Type** : `Node.js`.
   - **Chemin de l'application** : `/www/portfolio`
   - **Commande de démarrage** : `node server.cjs`
   - **Version de Node.js** : La version recommandée la plus récente (ex: 20.x ou 22.x).

> [!CAUTION]
> **Important concernant l'environnement :** Ne définis **AUCUNE** variable SMTP (`SMTP_HOST`, `SMTP_USER`, etc.) dans l'onglet **Environnement** du dashboard Alwaysdata. Laisse cette section vide. 
> Le serveur lira automatiquement ton fichier `.env` inclus dans le ZIP. Si tu ajoutes des variables dans le dashboard, elles risquent de créer des conflits d'injection (présence de guillemets littéraux) provoquant l'erreur `535 Incorrect authentication data`.

## Étape 3 : Envoi et Déploiement

1. Envoie ton fichier `deploy_pack.zip` sur ton espace Alwaysdata (via SCP, FTP, ou SSH). Par exemple :
   ```bash
   scp deploy_pack.zip fabienthiesset@ssh-fabienthiesset.alwaysdata.net:/home/fabienthiesset/www/portfolio/
   ```
2. Connecte-toi en SSH, va dans le dossier et extrais l'archive :
   ```bash
   cd /home/fabienthiesset/www/portfolio
   unzip -o deploy_pack.zip
   ```
   *(L'option `-o` écrase les anciens fichiers, y compris le `.env`)*

## Étape 4 : Redémarrage

1. Retourne sur l'interface d'administration Alwaysdata.
2. Dans **Web** -> **Sites**, clique sur l'icône **Redémarrer** (🔄) à côté de ton site Node.js.

### 🐛 Dépannage (Troubleshooting)
- **Erreur SMTP 535 Invalid Login** : Vérifie que le mot de passe est celui du *compte email* (rubrique Emails d'Alwaysdata) et non du panneau d'administration.
- **Port SMTP** : Par défaut, le serveur utilise le port `465` (SSL). Si besoin, tu peux redéfinir `SMTP_PORT=587` et `SMTP_SECURE=false` dans ton `.env`.

🎉 **C'est fini !** Ton portfolio est en ligne et ultra-performant.
