# Organisation du code

- src/main.js initialise les modules et leur fournit un état partagé privé.
- src/dependencies.js regroupe les imports utilisés, sans ajouter de bibliothèque à l'exécution.
- src/app contient les fonctions regroupées par scène, calques, textures, catalogue, exports, interaction et parcours client.
- Chaque module enregistre ses fonctions avant l'initialisation, pour préserver les dépendances entre fonctions.
- src/templates contient les sections HTML assemblées par Vite.
- src/products définit les objets 3D. Le profil détaillé de la borne est une donnée JSON.
- src/responsive.css gère les panneaux sur téléphone et tablette.
- src/app-menu.css et src/app/18-app-menu.js gèrent la barre de menu supérieure.
- src/dark-mode.css gère le thème sombre (mode Jour/Nuit).
- src/app/17-visual-library.js et server/catalog.js gèrent la bibliothèque de visuels persistante dans public/visuels.
- server/security.js contrôle l'authentification (avec accès direct local sur 127.0.0.1), les origines, les limites et les en-têtes.
- server/submissions.js valide les pièces jointes et les transmet au destinataire configuré.
- server/static.js sert uniquement les fichiers de dist.
- test/security.test.js vérifie les contrôles d'accès et les refus d'envoi.

## Limite de taille

Tous les fichiers source JavaScript, CSS et HTML ont au maximum 200 lignes.
Les dépendances, les données et les fichiers générés de dist ne sont pas des modules source.

## Secrets et déploiement

Les identifiants sont des variables Coolify, jamais des valeurs du dépôt.
Après modification de ces variables, redéployer pour les appliquer.
Pour intégrer l'aperçu dans un autre site, définir FRAME_ANCESTORS avec les origines HTTPS autorisées.
Les restrictions du navigateur guident le parcours client ; la protection de l'atelier et les contrôles des envois sont effectués côté serveur.
