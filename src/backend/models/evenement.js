class Evenement {
    constructor(question, choix1, choix2, nbrGoldIncrement, nbrAvancementIncrement, reponseCorrecte, reussite) {
        this.question = question;
        this.choix1 = choix1;
        this.choix2 = choix2;
        this.nbrGoldIncrement = nbrGoldIncrement;
        this.nbrAvancementIncrement = nbrAvancementIncrement;
        this.reponseCorrecte = reponseCorrecte;
        this.reussite = reussite
    }
}

module.exports = Evenement;
