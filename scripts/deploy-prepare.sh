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

# 3. Création de l'archive
echo "📦 Création de l'archive deploy_pack.zip..."
# On inclut uniquement le nécessaire pour la production
zip -r deploy_pack.zip dist api server.cjs package.json package-lock.json WORKFLOW.md

echo "✅ Prêt ! Tu n'as plus qu'à envoyer 'deploy_pack.zip' sur Alwaysdata et le dézipper."
echo "💡 Rappel : Sur Alwaysdata, lance 'npm install --production' après avoir dézippé."
