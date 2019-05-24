//name every const like this for chapter images 

const chapter1 = require('../assets/images/chap1.jpg');
const chapter2 = require('../assets/images/himalaya.jpg');
const chapter3 = require('../assets/images/monastery.jpg');

//name every const like this for level images 

const chapter1level1 = require('../assets/images/crash2.2.jpg');
const chapter1level2 = require('../assets/images/walk2.2.jpg');
const chapter1level3 = require('../assets/images/man.jpg');
const chapter1level4 = require('../assets/images/sherpa2.jpg');
const chapter1level5 = require('../assets/images/stupa2.jpg');
const chapter1level6 = require('../assets/images/village3.png');
const chapter1level7 = require('../assets/images/family.jpg');
const chapter1level8 = require('../assets/images/camp.jpg');
const chapter1level9 = require('../assets/images/alone2.jpg');
const chapter1level10 = require('../assets/images/stupa.jpeg');

const chapter2level1 = require('../assets/images/phurba.jpg');
const chapter2level2 = require('../assets/images/assassin.jpg');
const chapter2level3 = require('../assets/images/assassin.jpg');
const chapter2level4 = require('../assets/images/climbing.jpg');
const chapter2level5 = require('../assets/images/lake.jpg');
const chapter2level6 = require('../assets/images/prayer.jpg');
const chapter2level7 = require('../assets/images/avalanche.jpg');
const chapter2level8 = require('../assets/images/hut.jpg');
const chapter2level9 = require('../assets/images/bear.jpg');

const chapter3level1 = require('../assets/images/icecave.jpg');
const chapter3level2 = require('../assets/images/losttemple.jpg');
const chapter3level3 = require('../assets/images/caveexit.jpg');
const chapter3level4 = require('../assets/images/gompa.jpg');
const chapter3level5 = require('../assets/images/lama.jpg');
const chapter3level6 = require('../assets/images/mandala.jpg');
const chapter3level7 = require('../assets/images/interior.jpg');
const chapter3level8 = require('../assets/images/monk.jpg');
const chapter3level9 = require('../assets/images/monks.jpg');
const chapter3level10 = require('../assets/images/last.jpg');
const chapter3level11 = require('../assets/images/laststupa.jpg');
const chapter3level12 = require('../assets/images/doors.jpg');


const character = require('../assets/images/crash3.jpg');

export default { character, chapter1, chapter2, chapter3,
                 chapter1level1, chapter1level2, chapter1level3, chapter1level4, chapter1level5, chapter1level6, chapter1level7, chapter1level8, chapter1level9, chapter1level10,
                 chapter2level1, chapter2level2, chapter2level3, chapter2level4, chapter2level5, chapter2level6, chapter2level7, chapter2level8, chapter2level9,
                 chapter3level1, chapter3level2, chapter3level3, chapter3level4, chapter3level5, chapter3level6, chapter3level7, chapter3level8, chapter3level9, chapter3level10, chapter3level11, chapter3level12
                };


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