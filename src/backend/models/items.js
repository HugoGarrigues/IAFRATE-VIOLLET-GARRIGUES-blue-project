class Items {
    constructor(name, description, price, effects = []) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.effects = effects;
    }
}


module.exports = Items;