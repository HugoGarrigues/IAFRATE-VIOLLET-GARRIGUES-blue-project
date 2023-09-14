
class Joueur {
    constructor(pseudo, avancement, gold, inventory, nbrEvents) {
        this.pseudo = pseudo;
        this.avancement = avancement;
        this.gold = gold;
        this.nbrEvents = nbrEvents
    }

    estPseudoValide() {
        const regex = /^[a-zA-Z]{3,16}$/; 
        return regex.test(this.pseudo);
    }

    formatePseudo() {
        if(this.estPseudoValide()) {
            this.pseudo = this.pseudo.charAt(0).toUpperCase() + this.pseudo.slice(1).toLowerCase();
        }
    }   }

module.exports = Joueur;    