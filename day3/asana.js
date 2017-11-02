module.exports = class Asana {
	constructor(name, time, beginner) {
		this.name = name;
		this.time = time;
		this.beginner = beginner;
      
	}
    static create(obj) {
        return new Asana(obj.name, obj.time, obj.beginner);
    }
}
