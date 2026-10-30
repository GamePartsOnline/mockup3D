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

## État au 30 octobre 2026 (v1.5.0)
L'application dispose d'une ergonomie mobile tactile inspirée de Mocka3D (Bottom Dock fixé au bas avec accès direct Produit, Visuel, Ajuster, Texte, Fond, Valider, tiroir bas Bottom Sheet escamotable laissant le modèle 3D toujours visible en temps réel au-dessus, cibles tactiles de manipulation élargies à 44 px et pastilles de caméras rapides Face A / Face B / Auto-rotation).
La boîte à outils graphique locale comprend le détourage automatique express du fond blanc via canvas local, des filtres d'ambiance photo (Noir & Blanc, Sépia, Contraste, Inversé) et des options typographiques enrichies (texte courbé en arc de cercle, contour de texte et ombre portée).
Le moteur de rendu intègre le contrôle des matières réelles PBR (céramique brillante vernie, textile mat sans reflet, métal satiné) et un générateur automatique de Planche Contact Commerciale 4-en-1 (BAT haute définition combinant 4 vues avec cartouche Graph2Print prêt pour l'envoi client ou WooCommerce).
Le catalogue actuel comprend : table showroom multi-produits, mugs, t-shirts 2D/3D, tapis de souris, coussins à bords fermés, casquettes, porte-clés, dessous de verre, trousses, puzzles 120 pièces, bracelets événementiels, poster 80 × 60 cm sans cadre, borne d'arcade.

## Contraintes validées
- Objets blancs pour les clients, mais modification de couleur de support débloquée dans l'atelier propriétaire (`/admin`).
- Visuels fournis par l'utilisateur (SVG, PNG, JPG) et propositions clients soumises à validation avant publication.
- Interface unifiée dans le panneau latéral gauche (6 sections repliables) et adaptée aux téléphones et tablettes.
- Modules source limités à 200 lignes et contrôles de sécurité côté serveur.
