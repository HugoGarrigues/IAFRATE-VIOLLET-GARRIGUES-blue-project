const Evenement = require('./evenement');

const tempete = new Evenement(
    "Vous rencontrez une tempête ! Que faites-vous ?",
    "Naviguer à travers",
    "Contourner la tempête",
    10,  
    5,    
    2     

);

const sirene = new Evenement(
    "Une belle sirène apparaît près de votre navire ! Que faites-vous ?",
    "L'inviter à bord",
    "Ignorer et continuer",
    5,  
    2,  
    1   
);

const monstreMarin = new Evenement(
    "Un énorme monstre marin émerge des profondeurs ! Que faites-vous ?",
    "Tenter de le combattre",
    "Naviguer rapidement pour échapper",
    5,  
    5,  
    2   
)

const naufrage = new Evenement(
    "Vous trouvez un naufragé à la dérive en pleine mer ! Que faites-vous ?",
    "Le sauver et l'interroger",
    "Le laisser à la dérive",
    5,  
    2,  
    1   
);

const attaquePirate = new Evenement(
    "Des pirates attaquent votre navire ! Que faites-vous ?",
    "Les combattre",
    "Fuir avec rapidité",
    10,
    5,
    1 
);

const traitreEquipage = new Evenement(
    "L'un de vos membres d'équipage se révèle être un traître ! Que faites-vous ?",
    "Le confronter et le juger",
    "Lui donner une chance de se racheter",
    5,  
    3,  
    2   
);

const tribuPacifique = new Evenement(
    "Vous découvrez une tribu insulaire pacifique sur une île ! Que faites-vous ?",
    "Établir des relations diplomatiques",
    "Les ignorer et continuer votre voyage",
    15, 
    10, 
    1   
);

const carteTresor = new Evenement(
    "Vous trouvez une vieille carte au trésor ! Que faites-vous ?",
    "Suivre la carte et chercher le trésor",
    "Ignorer la carte et continuer",
    20, 
    15, 
    1   
);

const navireFantome = new Evenement(
    "Vous croisez la route d'un mystérieux navire fantôme ! Que faites-vous ?",
    "S'approcher et explorer le navire",
    "Éviter le navire fantôme à tout prix",
    10, 
    5,  
    2   
);

const ileTresor = new Evenement(
    "Vous découvrez une mystérieuse île au trésor ! Que faites-vous ?",
    "Débarquer et explorer l'île",
    "Rester à bord et observer",
    15, 
    10, 
    1   
);

const defaultEvenements = [tempete, sirene, monstreMarin, naufrage, attaquePirate, traitreEquipage, tribuPacifique, carteTresor, navireFantome, ileTresor];
module.exports = defaultEvenements;
