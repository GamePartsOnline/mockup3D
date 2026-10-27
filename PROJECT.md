# Projet MockUp3D : cible produit

## Objectif
Intégrer à terme l'application au site internet de l'entreprise.

## Parcours client cible
- Choisir un produit et consulter son tarif.
- Utiliser un visuel proposé ou importer ses propres visuels.
- Personnaliser le rendu et les faces imprimées.
- Envoyer une demande accompagnée des visuels, des rendus et d'un message.
- Fournir ses coordonnées pour recevoir une réponse.

## Espace propriétaire cible
- Ajouter, modifier et retirer des produits.
- Gérer leurs tarifs, dimensions et zones imprimables.
- Gérer une bibliothèque de visuels disponibles pour les clients.
- Recevoir et suivre les demandes avec message, coordonnées et fichiers propres.
- Garder les aperçus client filigranés et l'administration protégée.

## État au 27 octobre 2026 (v1.3.2)
Le catalogue actuel est défini dans le code (table d'accueil multi-produits, mugs, t-shirts 2D/3D, tapis de souris, coussins à bords fermés, casquettes, porte-clés, dessous de verre, trousses, puzzles 120 pièces, bracelets événementiels, poster 80 × 60 cm sans cadre, borne d'arcade à 2290 €).
L'application intègre une scène d'accueil 3D sur table noire avec carte de visite interactive (bulle contact GPO SARL), une barre de menu supérieure (Fichier, Éditer, Affichage, Catalogue), une bibliothèque de visuels classée par catégories avec validation propriétaire des propositions clients (`/api/catalog-images/propose`), la répétition de motif en mosaïque et un mode Jour/Nuit à contraste renforcé.
Les points restants de la feuille de route sont le filigrane réduit (ou étiquette discrète) et l'affinage visuel de l'interface client.

## Contraintes validées
- Objets blancs pour les clients, mais modification de couleur de support débloquée dans l'atelier propriétaire (`/admin`).
- Visuels fournis par l'utilisateur (SVG, PNG, JPG) et propositions clients soumises à validation avant publication.
- Interface unifiée dans le panneau latéral gauche (6 sections repliables) et adaptée aux téléphones et tablettes.
- Modules source limités à 200 lignes et contrôles de sécurité côté serveur.
