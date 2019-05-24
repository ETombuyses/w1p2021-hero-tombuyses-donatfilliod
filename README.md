# Le site dont vous êtes le héros

URL du site : https://dharma.netlify.com/

### Groupe

- Emilie Tombuyses
- Amandine Donat-Filliod

### Grille d'auto-évaluation

| Type  | Objectif | Fait ? | 
| ----- | -------- | ------ |
| Setup | Le repository respecte la nomenclature `w1p2021-hero-amsellem-calou`, avec tous les noms des membres, et les membres sont cités dans le README.md | oui |
| Setup | Le site est en ligne, et l'URL est citée dans le README.md | oui |
| Setup | Le site utilise VueJS | oui |
| Setup | Cloner le repository et exécuter `npm install` puis `npm run dev` s'effectue sans encombre | oui |
| Données | Un schéma numérique ou papier (scanné ou photographié) décrivant les différentes étapes et enchaînements possible. Affiché dans ce readme (si plusieurs images sont nécessaires, en afficher plusieurs, mais essayer d'être synthétique). | - |
| Données | Un fichier `data.json` est utilisé pour stocker la structure du jeu | oui |
| Données | Le fichier `data.json` décrit 30 phases de jeu ou plus. Indiquez *En partie* s'il en décrit plus de 15. | oui |
| Pages | Une page d'accueil est présente | oui |
| Pages | Une page de choix du personnage est présente | oui |
| Pages | Une page de victoire est présente | oui |
| Pages | Une page d'échec est présente | oui |
| Routing | Une route dont l'`id` varie permet d'afficher les différentes étapes du jeu | oui |
| Routing | Lorsqu'on recharge la page (`Ctrl + R`), on se trouve toujours à la même étape | oui |
| Transitions | Chaque page apparaît grâce à une transition fluide (la complexité de la transition n'est pas prise en compte ici) | oui |
| Transitions | Les transitions internes au jeu (d'une étape à une autre) et externes (intro, fin...) sont différentes | oui |
| État | Le choix du personnage et/ou de ses caractéristiques impacte l'aventure au moins une fois. **Les caractéristiques de base de chaque personnage sont différentes. Elles donnent ainsi un avantage ou un désavantage de départ différent en fonction de notre choix. Si le premier personnage a 1 point dans une caractéristique, l'autre en a -1** | oui |
| État | Une décision ou un événement aléatoire survenu pendant l'aventure a un impact sur la suite, au moins une fois. **Chaque choix influe sur les caractéristiques des personnages en les augmentant ou les diminuant. Par la suite, il sera nécessaire d'avoir un certain nombre de points pour passer certaines étapes du jeu** | oui |
| État | Le choix du personnage et/ou ce qu'il s'est passé pendant l'aventure impactent l'écran de fin. **La page de fin génère une phrase de fin qui dépend du choix qui a tué le joueur et reprend ses statistiques de jeu** | oui |
| État | Au moins un service (classe de type `GameService`) est utilisé | oui |
| Sauvegarde | Lorsqu'on recharge la page (`Ctrl + R`), le personnage, ses caractéristiques, les choix du joueur et tout le reste sont rétablis | oui |
| Sauvegarde | Lorsqu'on quitte le jeu et qu'on revient plus tard à la page d'accueil (sur le même navigateur), il est possible de reprendre l'aventure où on l'avait laissée | oui |
| Multimédia | L'expérience présente une vidéo ou plus | oui |
| Multimédia | L'expérience présente un audio ou plus | oui |
| Multimédia | L'utilisateur a la possibilité de couper le son à tout moment | oui |