const moment = require("moment");

const prompt = require("prompt-sync")();

//moment("", "mm-dd-yyyy")
function writeProfileData() {
  var PrimerNombre = prompt('Cual es tu primer nombre?: ')
  var Sexo = prompt('cual es tu sexo: ')
  var birthday = prompt('cual es tu fecha de cumpleaños: ')

  return {
    PrimerNombre,
    Sexo,
    birthday,
  }

}

function showProfileData(userData) {

  let ahora = moment()

  console.info(`Hola  ${userData.PrimerNombre.toUpperCase()}, Tu Sexo es ${userData.Sexo.toUpperCase()}, y tu fecha de cumpleaños es 
  ${userData.birthday}`)

}
showProfileData(writeProfileData())

let ahora = moment()
var fechaNacimiento = moment("04-071992", "MM-DD-YYYY");
let diferenciadias = ahora.diff(fechaNacimiento, 'years')
//console.log(ahora)
var a = ("Tienes");
var b = ("años")
console.log(a, diferenciadias, b)

