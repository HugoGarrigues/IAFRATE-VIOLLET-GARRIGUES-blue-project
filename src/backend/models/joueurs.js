
class Joueur {
    constructor(pseudo, hp, gold, inventory) {
        this.pseudo = pseudo;
        this.hp = hp;
        this.gold = gold;
        this.inventory = inventory;
    }

    estPseudoValide() {
        const regex = /^[a-zA-Z0-9]{3,10}$/;
        return regex.test(this.pseudo);
    }
}

module.exports = Joueur;    