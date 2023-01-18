/*

Plantear una clase persona (que permita cargar por teclado su nombre y edad).

Por otro lado, crear una clase empresa que tenga como atributo la edad tope para que una
persona pueda ingresar como trabajador en la misma (60 años)

Confeccionar un pequeño programa en JavaScript que defina 3 objetos de la clase persona
y 1 de la clase empresa. Mostrar cuántas de esas personas están inhabilitadas para ingresar
como trabajadores de acuerdo a la edad tope.

*/

class Persona {
  nombre
  edad
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }
}

class Empresa {
  edad_tope
  personas = []
  constructor(edad_tope) {
    this.edad_tope = edad_tope
  }
  addPersona(nombre, edad) {
    this.personas.push(new Persona(nombre, edad))
  }
  printInhabilitadas() {
    return this.personas.filter((e,i) => e.edad>this.edad_tope).length
  }
}

const empresa = new Empresa(65)

empresa.addPersona("Jaime", 36)
empresa.addPersona("John", 80)
empresa.addPersona("Jack", 25)
empresa.addPersona("Charles", 75)
empresa.addPersona("Sora", 55)

console.log(empresa.printInhabilitadas())