module.exports = class Pranayama {
    constructor(name, time, beginner) {
        this.name = name;
        this.time = time;
        this.beginner = beginner;
      
    }
    static create(obj) {
        return new Asana(obj.name.time.beginner);
    }
}
