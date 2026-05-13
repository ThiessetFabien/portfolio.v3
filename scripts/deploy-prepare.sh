#!/bin/bash

# Script de préparation du déploiement pour Alwaysdata
# Stratégie : Build local -> Archive -> Upload SFTP

echo "🚀 Préparation du déploiement Portfolio 3.0..."

# 1. Nettoyage
echo "🧹 Nettoyage des anciens builds..."
rm -rf dist
rm -f deploy_pack.zip

# 2. Build Production
echo "🏗️  Lancement du build local..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du build. Déploiement annulé."
    exit 1
fi

# 3. Installation des dépendances de production
echo "📦 Installation des dépendances de production..."
npm install --omit=dev

# 4. Création de l'archive
echo "🗜️  Création de l'archive deploy_pack.zip (avec node_modules)..."
# On inclut TOUT le nécessaire pour rouler sans npm install sur le serveur
zip -r deploy_pack.zip dist api node_modules server.cjs package.json .env

echo "✅ Prêt ! Envoie 'deploy_pack.zip' sur Alwaysdata, dézippe-le, et lance 'node server.cjs'."
echo "💡 Plus besoin de faire 'npm install' sur le serveur !"
