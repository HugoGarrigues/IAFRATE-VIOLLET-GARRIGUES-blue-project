class Events {
    constructor(question, rep1, rep2, gold, avancement = []) {
        this.question = question;
        this.rep1 = rep1;
        this.rep2 = rep2;
        this.gold = gold;
        this.avancement = avancement;
    }
}

let event1 = new Events("Scènario", "Rep1", "Rep2", 5, 2);
let event2 = new Events("Scènario", "Rep1", "Rep2", 5, 2);
let event3 = new Events("Scènario", "Rep1", "Rep2", 5, 2);
let event4 = new Events("Scènario", "Rep1", "Rep2", 5, 2);
let event5 = new Events("Scènario", "Rep1", "Rep2", 5, 2);
let event6 = new Events("Scènario", "Rep1", "Rep2", 5, 2);
let event7 = new Events("Scènario", "Rep1", "Rep2", 5, 2);
let event8 = new Events("Scènario", "Rep1", "Rep2", 5, 2);
let event9 = new Events("Scènario", "Rep1", "Rep2", 5, 2);
let event10 = new Events("Scènario", "Rep1", "Rep2", 5, 2);

let events = [event1, event2, event3, event4, event5, event6, event7, event8, event9, event10];

module.exports = Events;