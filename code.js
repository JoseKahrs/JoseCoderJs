/* Solicitar Nombre y horario para dar bienvenida al simulador */

let nameUser = prompt("Ingrese su nombre")
let horario = parseInt(prompt("Por favor ingrese su hora local"))

if (horario >= 6 && horario <= 12){
    alert (`Buenos dias ${nameUser}! Bienvenido/a al simulador`)
    console.log (`El nombre del usuario es ${nameUser} y ha ingresado a las ${horario}hs`)
}else if (horario >= 13 && horario <= 19){
    alert (`Buenas tardes ${nameUser}! Bienvenido/a al simulador`)
    console.log (`El nombre del usuario es ${nameUser} y ha ingresado a las ${horario}hs`)
}else{
    alert (`Buenas noches ${nameUser}! Bienvenido/a al simulador`)
    console.log (`El nombre del usuario es ${nameUser} y ha ingresado a las ${horario}hs`)
}

/* Funciones */

/* Realizar un promedio */
function promedio () {
    let cantValores = parseInt(prompt(`Ingrese la cantidad de valores que desea promediar`))
    let total = 0
    for (let i = 1; i <= cantValores; i ++) {
        let valor = parseInt(prompt(`Ingrese el valor N°${i} a promediar`))
        total = total + valor
        console.log (`La cantidad de valores ingresados es de ${cantValores} y la suma de ellos es de ${total}`)
    }
    let resultProm = total/cantValores
    console.log (`La suma de los valores ingresados es de ${total} y su promedio es de ${resultProm}`)
    alert (`La cantidad de valores ingresados es de ${cantValores}, la suma de ellos es de ${total} y su promedio es de ${resultProm}`)
}

/* Calculo aritmetico */
/* SUMA */
function suma (numero1, numero2){
    let operando1 = parseInt(prompt("Ingrese el primer numero a sumar"))
    let operando2 = parseInt(prompt("Ingrese el segundo numero a sumar"))
    let resultSuma = operando1 + operando2
    console.log (`${operando1} + ${operando2} = ${resultSuma}`)
    alert (`${operando1} + ${operando2} = ${resultSuma}`)
    return numero1 + numero2
}

/* RESTA */
function resta (numero1, numero2){
    let operando1 = parseInt(prompt("Ingrese el primer numero a restar"))
    let operando2 = parseInt(prompt("Ingrese el segundo numero a restar"))
    let resultSuma = operando1 - operando2
    console.log (`${operando1} - ${operando2} = ${resultSuma}`)
    alert (`${operando1} - ${operando2} = ${resultSuma}`)
    return numero1 - numero2
}

/* DIVISION */
function division (numero1, numero2){
    let operando1 = parseInt(prompt("Ingrese el numero a dividir"))
    let operando2 = parseInt(prompt("Ingrese el numero divisor"))
    let resultSuma = operando1 / operando2
    console.log (`${operando1} / ${operando2} = ${resultSuma}`)
    alert (`${operando1} / ${operando2} = ${resultSuma}`)
    return numero1 / numero2
}

/* MULTIPLICACION */
function multiplicacion (numero1, numero2){
    let operando1 = parseInt(prompt("Ingrese el numero a multiplicar"))
    let operando2 = parseInt(prompt("Ingrese el segundo numero multiplicador"))
    let resultSuma = operando1 * operando2
    console.log (`${operando1} * ${operando2} = ${resultSuma}`)
    alert (`${operando1} * ${operando2} = ${resultSuma}`)
    return numero1 * numero2
}

function calculoArit () {
    let menuCalc = parseInt(prompt(`Ingrese la opción deseada
    1 - Suma
    2 - Resta
    3 - Division
    4 - Multiplicacion
    5 - Salir`))
    switch (menuCalc) {
        case 1:
            suma ()
        break
        case 2:
            resta ()
        break
        case 3:
            division ()
        break
        case 4:
            multiplicacion ()
        break
        case 5:
            console.log(`Gracias por utilizar nuestra app. Saludos!`)
            alert (`Gracias por utilizar nuestra app. Saludos!`)
        break
        default:
            menuCalc = parseInt(prompt(`Opcion no valida, ingrese la opción deseada
            1 - Suma
            2 - Resta
            3 - Division
            4 - Multiplicacion
            5 - Salir`))
            console.log ("Opcion no valida")
        break
    }
}

/* Menu simulador */

do{
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
       1 - Realizar un calculo aritmetico
       2 - Hacer un promedio
       0 - Salir del menu`))
       switch(opcionIngresada){
          case 1:
            calculoArit ()
            console.log("Opción 1: Calculo aritmetico")
          break
          case 2:
            console.log(`Opcion 2: Realizar un promedio`)
            promedio ()
          break
          case 0:
            console.log(`Gracias por utilizar nuestra app. Saludos!`)
            alert (`Gracias por utilizar nuestra app. Saludos!`)
            salirMenu = true
          break   
          default:
            opcionIngresada = parseInt(prompt(`Opción no válida, ingrese alguna presente en el menu
            1 - Realizar un calculo
            2 - Hacer otra cosa
            0 - Salir del menu`))
            console.log("Opción no válida, ingrese alguna presente en el menu")
          break
       }
}while(!salirMenu)

