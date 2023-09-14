
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
    }   

    itemEstDansInventaire(joueur, item) {
        return joueur.inventory.includes(item);
    }

    utiliserItem(joueur, item) {
        if (!itemEstDansInventaire(joueur, item)) {
            console.log("L'item n'est pas dans l'inventaire !");
            return;
        }
    
        for (const effect of item.effects) {
            switch (effect.type) {
                case 'alignement':
                    joueur.avancement += effect.value;
                    break;
                case 'gold':
                    joueur.gold += effect.value;
                    break;
            }
        }
    
        const index = joueur.inventory.indexOf(item);
        if (index > -1) {
            joueur.inventory.splice(index, 1);
        }
    }
}

module.exports = Joueur;    