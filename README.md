# MockUp3D C3

Application locale de présentation d’objets personnalisés en 3D. Les images importées restent dans le navigateur jusqu’au clic sur « Envoyer ma création » dans l’espace client.

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

Les définitions des objets sont dans `src/products/`. Le catalogue intègre actuellement les tapis de souris, mugs 11oz, t-shirts (2D et 3D avec DecalGeometry), casquettes, porte-clés (rectangulaire, rond, cœur), dessous de verre, coussins, trousses, puzzles et la borne d'arcade multi-zones.

## Site public et atelier

- Le lien public (racine du site) ouvre l’espace client. Le filigrane y est imposé et les exports directs sont masqués.
- L’atelier propriétaire est accessible sur `/admin`. Sur le serveur, cette adresse exige les variables `ADMIN_USER` et `ADMIN_PASSWORD`. Utiliser HTTPS.
- Le client suit quatre étapes : produit, visuel, ajustement, envoi.
- L’envoi produit un wrap PNG, un rendu PNG, les vues supplémentaires du mug ou des porte-clés, un PNG séparé pour le cœur du T-shirt si utilisé et un MP4 si le navigateur le permet. Les fichiers envoyés au propriétaire sont sans filigrane.
- La zone du T-shirt est limitée au format A4, en portrait ou paysage, sur Face A et Face B. Un visuel peut aussi être affecté à « Cœur (petit) ».

## Envoi des créations

Le serveur utilise SMTP. Renseigner sur Coolify les variables de `.env.example`, puis construire avec `npm run build` et lancer avec `npm start`. Le mot de passe SMTP et celui de l’atelier ne doivent pas être enregistrés dans Git.

Le bouton d’envoi affiche une erreur explicite tant que SMTP n’est pas configuré. Le serveur limite les pièces jointes à 19 Mo au total et un envoi par minute et par adresse IP.
