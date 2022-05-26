const moment = require('moment')
const prompt = require('prompt-sync')()

/**
 * Función creada para capturar los datos suministrados por el usuario, y retornando dichos datos en un objeto
 */
function capturaDatos(){
    var name = prompt('Please enter your name: ')
    var gender = prompt('Please enter your gender [M-F]: ').toUpperCase()
    var dateBirth = prompt('Please enter your birthday [DD-MM-YYYY]: ')
    var dateBirdParsed = moment(dateBirth, "DD-MM-YYYY", true)

    if (gender != 'M' && gender != 'F') {
        console.warn(`You've entered an invalid gender => ${gender}. Only [M-F] allowed.`)
        // Salida forzada del programa en ejecución
        process.exit(0)
    }

    // La función `isValid` verifica si el objeto de la librería moment está en el formato de fecha indicado y 
    // si es válido retorna true
    if (!dateBirdParsed.isValid()) {
        console.warn(`You've entered an invalid birthday => ${dateBirth}. Must be in [DD-MM-YYYY] format.`)
        // Salida forzada del programa en ejecución
        process.exit(0)
    }

    // Retornar datos capturados si todo salió bien
    return {
        name,
        gender,
        dateBirdParsed, // Este objeto es una fecha válida de la librería moment
    }
}

function mostrarDatos(inputData) {
    let years = moment().diff(inputData.dateBirdParsed, 'years')
    let genders = {
        'M': 'Male',
        'F': 'Female',
    }

    console.info(`Hello ${inputData.name}, with ${genders[inputData.gender]} gender. You're ${years} old.`)
}

// Crear función autoejecutable para correr la solución
(function main(){
    var inputData = capturaDatos()
    mostrarDatos(inputData)
})()