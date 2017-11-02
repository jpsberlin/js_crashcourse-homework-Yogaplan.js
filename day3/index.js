const Asana = require('./asana');
const Pranayama = require('./pranayama');
const Meditation = require('./meditation');
const Database = require('./database');




var asana1 = new Asana ('Surya Namaskar', '3 minute', 'yes');

var asana2 = new Asana ('Bow Pose', '1 minute', 'yes');

var asana3 = new Asana ('Boat', '1 minute', 'yes');

var asana4 = new Asana ('Dog', "2 minute", 'yes');


var pranayama1 = new Pranayama ('SaTaNaMa', '1 minute', 'yes');

var pranayama2 = new Pranayama ('Chandra Pran', '5 minute', 'yes');

var meditation1 = new Meditation ('SaTaNaMa', '7 minute', 'yes');
 
var meditation2 = new Meditation ('Gong Meditation', '11 minute', 'yes');
var meditation3 = new Meditation ('Heart Meditation', '5 minute', 'yes');

console.log(asana1.name);

console.log(asana2.time);

console.log(asana3.name);

console.log(pranayama1.name);

console.log(meditation1.beginner);
console.log(meditation2.name);

console.log(asana4.name);

console.log(asana4.time);
console.log(asana4.beginner);

