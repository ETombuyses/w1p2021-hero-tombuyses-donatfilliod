//name every const like this for chapter images 

const chapter1 = require('../assets/images/chap1.jpg');
const chapter2 = require('../assets/images/chap1.jpg');


//name every const like this for level images 

const chapter1level1 = require('../assets/images/crash2.2.jpg');
const chapter1level2 = require('../assets/images/walk2.2.png');
const chapter1level3 = require('../assets/images/man.jpg');
const chapter1level4 = require('../assets/images/sherpa2.jpg');
const chapter1level5 = require('../assets/images/stupa2.jpg');
const chapter1level6 = require('../assets/images/village3.png');
const chapter1level7 = require('../assets/images/family.jpg');


export default { chapter1, chapter2, chapter1level1, chapter1level2, chapter1level3, chapter1level4, chapter1level5, chapter1level6, chapter1level7 };


/* autre méthode : */
// transformer le data.json en data.js
// modifier le nom de l'import du fichier en .js
// écrire export default en haut du dictionnaire

// lister toutes les images comme ici en const nomimage = require('');
// dans le livel concerné, écrire "img": nomimage



/*méthode package JSON*/
//créer un script "copy": rm -rf dist && mkdir dist && mkdir dist/assets && cp -R app/assets/images/ dist/assets
// remplacer la commande dev par :  npm run copy && parcel app/index.html 
// remplacer la commande build par : npm run copy && parcel build app/index.html && cp _redirects dist/

//Grace à ça on peut directement utiliser les chemins normaux des images dans notre projet (json ou autre)