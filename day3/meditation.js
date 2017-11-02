
module.exports = class Meditation {
    constructor(name, time, beginner) {
        this.name = name;
        this.time = time;
        this.beginner = beginner;
      
    }
    static create(obj) {
        return new Meditation(obj.name.time.beginner);
    }

}

