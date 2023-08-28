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

/* Menu simulador */

do{
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
       1 - Realizar un calculo aritmetico
       2 - Hacer un promedio
       0 - Salir del menu`))
       switch(opcionIngresada){
          case 1:

            console.log("Opción uno")
          break
          case 2:
            console.log(`Opcion 2: Realizar un promedio`)
            promedio ()
          break
          case 0:
            console.log(`Gracias por utilizar nuestra app. Saludos!`)
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

