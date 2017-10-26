const Asana = require('./asana');
const Pranayama = require('./pranayama');
const Meditation = require('./meditation');
const Database = require('./database');

const red = require('ansi-red');
console.log('Hello World')

const add = (num1, num2) => num1 + num2 +2; 

const output = add(3, 5);

console.log(output);
console.log(red('~the end~ oh finaly! yes!'));

var asana1 = new Asana ('Surya Namaskar', '3 minute', 'yes');

var asana2 = new Asana ('Bow Pose', '1 minute', 'yes');

var asana3 = new Asana ('Boat', '1 minute', 'yes');

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
