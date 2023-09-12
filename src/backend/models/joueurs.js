
class Joueur {
    constructor(pseudo, hp, gold, inventory) {
        this.pseudo = pseudo;
        this.hp = hp;
        this.gold = gold;
        this.inventory = inventory;
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
}

module.exports = Joueur;    