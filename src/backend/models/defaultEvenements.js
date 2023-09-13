const Evenement = require('./evenement');

const tempete = new Evenement(
    "Vous rencontrez une tempête ! Que faites-vous ?",
    "Naviguer à travers",
    "Contourner la tempête",
    10,  // nbrGoldIncrement
    5,    // nbrAvancementIncr²ement
    2     // reponseCorrecte
);

const attaquePirate = new Evenement(
    "Des pirates attaquent votre navire ! Que faites-vous ?",
    "Les combattre",
    "Fuir avec rapidité",
    20,
    10,
    1 // reponseCorrecte
);

const defaultEvenements = [tempete, attaquePirate];
module.exports = defaultEvenements;
