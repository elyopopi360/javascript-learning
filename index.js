const prompt = require("prompt-sync")();

var x = 5;

function main() {
    let x = 7;
    this.z = 25;

    console.log(x);

    return this;
}

var mainSpace = main();

console.log(x);
console.log(mainSpace.z);
//console.log(mainSpace)
console.log(this)

function anotherOne() {
    console.log(this.z)
}

anotherOne()




function leerDatosConsola() {
    var name = prompt('Enter your name: ')
    var age = prompt('Enter your age: ')

   return {
     name,
     age,
 }
}

function mostrarDatos(userData) {
  console.info(`Hi  ${userData.name.toUpperCase()}, your age is => ${userData.age}`)
}

mostrarDatos(leerDatosConsola())