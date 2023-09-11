/* OBJETOS */
//Autos
class Auto {
  constructor (id, marca, modelo, ano, tipo){
    this.id = id,
    this.marca = marca,
    this.modelo = modelo, 
    this.ano = ano, 
    this.tipo = tipo
  }
  mostrarInfoAuto () {
    console.log (`El auto ${i}, es marca ${marca}, su modelo es ${modelo}, del ano ${ano} y es tipo ${tipo}`)
  }
  catAuto () {
    console.log (this.id, this.marca, this.modelo, this.ano, this.tipo)
  }

}

const auto1 = new Auto (1, "bmw", "serie 3", 2022, "sedan")
const auto2 = new Auto (2, "bmw", "x6", 2021, "suv")
const auto3 = new Auto (3, "audi", "a3", 2021, "sedan")
const auto4 = new Auto (4, "audi", "r8", 2020, "coupe")
const auto5 = new Auto (5, "mercedes-benz", "clase a", 2020, "berlina")
const auto6 = new Auto (6, "mercedes-benz", "sl", 2023, "cabrio")
const auto7 = new Auto (7, "porsche", "macan", 2022, "suv")
const auto8 = new Auto (8, "porsche", "cayenne", 2023, "suv")
const auto9 = new Auto (9, "ford", "mustang", 2020, "coupe")
const auto10 = new Auto (10, "ford", "raptor", 2022, "4x4")

//Motos
class Moto {
  constructor (id, marca, modelo, ano, cilindrara) {
    this.id = id,
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano, 
    this.cilindrara = cilindrara
  }
  mostrarInfoMoto () {
    console.log (`La moto ${i} es marca ${marca}, su modelo es ${modelo}, del ano ${ano} y cuenta con una cilindrada de ${this.cilindrara}`)
  }
  catgoMoto () {
    console.log (this.id, this.marca, this.modelo, this.ano, this.tipo)
  }
}

const moto1 = new Moto (1, "yamaha", "r1", 2022, "1000cc")
const moto2 = new Moto (2, "ducati", "panigale", 2023, "1190cc")
const moto3 = new Moto (3, "ducati", "diacel", 2021, "1000cc")
const moto4 = new Moto (4, "kawasaki", "z1000", 2021, "1000cc")
const moto5 = new Moto (5, "kawasaki", "zx6", 2023, "600cc")
const moto6 = new Moto (6, "ktm", "duke", 2023, "390cc")
const moto7 = new Moto (7, "ktm", "superduke", 2023, "1300cc")
const moto8 = new Moto (8, "yamaha", "r6", 2021, "600cc")

/* ARRAYS */
//Autos
const catalogoAuto = []
catalogoAuto.push (auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8, auto9, auto10)

//Motos
const catalogoMotos = []
catalogoMotos.push (moto1, moto2, moto3, moto4, moto5, moto6, moto7, moto8)

/* FUNCIONES */

/* MOSTRAR CATALOGO */

/* AGREGAR UN AUTO/MOTO */

/* ELIMINAR UN AUTO/MOTO */

/* BUSCAR UN AUTO/MOTO */

/* PRESSUPUESTO ALQUILER */

/* FINALIZAR SOLICITUD */



//MENU do while y switch 
let salirMenu = false

do{
let opcionIngresada = parseInt(prompt(`Bienvenido/a a nuestro simulador! \nIngrese la opción deseada \n
   1 - Autos
   2 - Motos
   3 - Agregar un Auto/Moto
   4 - Eliminar un Auto/Moto
   5 - Buscar un Auto/Moto
   6 - Presupuestar alquiler
   7 - Finalizar solicitud
   0 - Salir del menu`))
   switch(opcionIngresada){
      case 1:
        console.log("Opción uno: Autos")
        mostrarCatalogo (catalogoAuto)
      break
      case 2:
        console.log("Opción dos: Motos")
      break
      case 3:
        console.log("Opción tres: Agreagar un auto/moto")
      break         
      case 4:
        console.log("Opción cuatro: Eliminar un Auto/Moto")
      break         
      case 5:
        console.log("Opción cinco: Buscar un Auto/Moto")
      break         
      case 6:
        console.log("Opción seis: Presupuestar alquiler")
      break         
      case 7:
        console.log("Opción seis: Finalizar solicitud")
      break         
      case 0:
        console.log(`Gracias por utilizar nuestra app. Saludos!`)
        alert (`Gracias por utilizar nuestra app. Saludos!`)
        salirMenu = true
      break   
      default:
        console.log("Opción no válida, ingrese alguna presente en el menu")
        alert (`Opción no válida, ingrese alguna presente en el menu`)
      break
   }
}while(!salirMenu)