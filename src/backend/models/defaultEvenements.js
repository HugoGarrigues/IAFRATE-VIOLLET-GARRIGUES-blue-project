const Evenement = require('./evenement');

const tempete = new Evenement(
    "Vous rencontrez une tempête ! Que faites-vous ?",
    "Naviguer à travers",
    "Contourner la tempête",
    10,  // nbrGoldIncrement
    5    // nbrAvancementIncrement
);

const attaquePirate = new Evenement(
    "Des pirates attaquent votre navire ! Que faites-vous ?",
    "Les combattre",
    "Fuir avec rapidité",
    20,
    10
);

const defaultEvenements = [tempete, attaquePirate];
module.exports = defaultEvenements;
