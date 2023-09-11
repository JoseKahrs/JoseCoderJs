//MENU do while y switch 
let salirMenu = false

do{
let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
   1 - 
   2 - 
   3 - 
   0 - Salir del menu`))
   switch(opcionIngresada){
      case 1:
      console.log("Opción uno")
         
      break
      case 2:
        console.log("Opción dos")
      break
      case 3:
        console.log("Opción tres")
      break         
      case 0:
         console.log(`Gracias por utilizar nuestra app. Saludos!`)
         salirMenu = true
      break   
      default:
         console.log("Opción no válida, ingrese alguna presente en el menu")
      break
   }
}while(!salirMenu)