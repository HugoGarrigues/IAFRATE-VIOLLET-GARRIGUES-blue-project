class Evenement {
    constructor(question, choix1, choix2, nbrGoldIncrement, nbrAvancementIncrement) {
        this.question = question;
        this.choix1 = choix1;
        this.choix2 = choix2;
        this.nbrGoldIncrement = nbrGoldIncrement;
        this.nbrAvancementIncrement = nbrAvancementIncrement;
    }
}

module.exports = Evenement;
