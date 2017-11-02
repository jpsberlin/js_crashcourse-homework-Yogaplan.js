module.exports = class Pranayama {
    constructor(name, time, beginner) {
        this.name = name;
        this.time = time;
        this.beginner = beginner;
      
    }
    static create(obj) {
        return new Pranayama(obj.name,obj.time, obj.beginner);
    }
}
