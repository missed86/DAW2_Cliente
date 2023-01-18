/*

Confeccionar una clase persona que permita almacenar el nombre y la edad. Luego definir
un vector de 4 componentes de tipo persona. Imprimir el nombre de la persona de mayor edad;
decir también si hay más de una persona con la edad mayor.

*/

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const personas = [
  new Persona("Juan", 25),
  new Persona("Maria", 22),
  new Persona("Pedro", 30),
  new Persona("Ana", 28)
];

let mayorEdad = personas[0];
let contadorIguales = 0;

for (let i = 1; i < personas.length; i++) {
  if (personas[i].edad > mayorEdad.edad) {
    mayorEdad = personas[i];
    contadorIguales = 0;
  } else if (personas[i].edad === mayorEdad.edad) {
    contadorIguales++;
  }
}

console.log(`La persona de mayor edad es ${mayorEdad.nombre} con ${mayorEdad.edad} años`);

if (contadorIguales > 0) {
  console.log(`Hay ${contadorIguales} personas con la misma edad`);
}
