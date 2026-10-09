# MockUp3D C3

Application locale de présentation d’objets personnalisés en 3D. Les images importées restent dans le navigateur et ne sont envoyées à aucun serveur.

## Démarrage simple sous Windows

1. Installer [Node.js LTS](https://nodejs.org/) si nécessaire.
2. Double-cliquer sur `Lancer MockUp3D.bat`. Le lanceur prépare puis ouvre l’application.
3. Au premier lancement, attendre l’installation locale des dépendances.
4. L’application s’ouvre à l’adresse `http://127.0.0.1:4173`.
5. Garder la fenêtre noire ouverte pendant l’utilisation. La fermer pour arrêter l’application.

Après la première installation, l’application fonctionne sans Internet.

L’image remplit automatiquement la surface du tapis. La vue reste fixe par défaut. Cochez **Animation** pour la faire tourner. Le bouton **Exporter l’animation MP4** crée localement une rotation complète de 6 secondes. Chrome ou Edge récent est recommandé.

## Démarrage manuel

```powershell
npm install
npm run dev -- --port 4173
```

## Production locale

```powershell
npm run build
npm run preview -- --port 4173
```

Les définitions des objets sont dans `src/products/`. Le tapis, les mugs, les t-shirts et les casquettes sont déjà intégrés au catalogue.
