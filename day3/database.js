const fs =require('fs');

exports.save = (Asana) => {
    fs.writeFileSync('./data.json',
JSON.stringify(Asana));

console.log(Asana);

exports.load =() => {
    return JSON.parse(fs.readFileSync('./data.json', 'utf8'));
}
}

exports.save = (Pranayama) => {
    fs.writeFileSync('./data.json',
JSON.stringify(Pranayama));

console.log(Pranayama);

exports.load =() => {
    return JSON.parse(fs.readFileSync('./data.json', 'utf8'));
}
}

exports.save = (Meditation) => {
    fs.writeFileSync('./data.json',
JSON.stringify(Meditation));

console.log(Meditation);


exports.load =() => {
    return JSON.parse(fs.readFileSync('./data.json', 'utf8'));
}
}
