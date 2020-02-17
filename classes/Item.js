export default class Item {

    constructor (name, tier, description) {
        this.name = name;
        this.tier = tier;
        this.description = [...description];
    }
}