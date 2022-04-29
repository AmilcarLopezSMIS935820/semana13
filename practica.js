// Primero
/*const amigo = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

amigo.question("Cual es el nombre de su amigo? ", amigo => {
    console.log(`El nombre de tu amigo es:  ${amigo}`);
});
*/
//Segundo

/*const x = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


x.question("Ingrese el primer numero: ", (n1) => {
    x.question("Ingrese el segundo numero: ", (n2) => {
        x.question("Ingrese la operacion a realizar: ", (operacion) => {
            if (operacion == 'suma') {
                var sum = parseFloat(n1) + parseFloat(n2);
                console.log(sum);
            };
            if (operacion == 'resta') {
                var rest = n1 - n2;
                console.log(rest);
            };
            if (operacion == 'multiplicar') {
                var mult = n1 * n2;
                console.log(mult);
            };
            if (operacion == 'dividir') {
                var div = n1 / n2;
                console.log(div);
            };
        })
    })
});
*/


//Tercero
const { name, edad } = require('./practicafunctions.js');

name.forEach((nombre) => {
    console.table(nombre);
});

edad.forEach((edades) => {
    console.table(edades);
});