/*process.argv.forEach((index, value) => {
    console.log(`${index}: ${value}`)
});

const colors = ['Blue', 'Yellow', 'Red', 'Green'];
console.table(colors);

const fruits = { apple: 15, mango: 20 };
console.table(fruits);*/

/*const name = () => console.log("Jose");

const duration = () => {
    console.time('name()');

    //Medir tiempo que lleva en ejecutarse
    name();
    console.timeEnd('name()');
}
duration();*/

/*const name = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

name.question("Cual es su nombre? ", name => {
    console.log(`Bienvenido ${name}`);
});*/

//const operation = require('./functions.js');
const { sum, colors } = require('./functions.js');
const result = sum(5, 8);

console.log("El resultado de la suma es: ", result);
colors.forEach((color) => {
    console.count(color);
});