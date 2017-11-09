module.exports = class Asana {
    constructor(name, time, beginner) {
        this.name = name
        this.time = time
        this.beginner = beginner 
    }

    static create(asana) {
        return new Asana(asana.name, asana.time, asana.beginner);
    }
}
