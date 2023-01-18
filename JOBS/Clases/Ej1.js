/*

Diseña una clase “Colegio”. Dicha clase tendrá como atributos “nombre”, numeroAulas” y
“numeroAlumnos”. Cada alumno se representará como un objeto de la clase “Alumno”. En ella
se guardarán los atributos “DNI”, “nombre” y “notaMedia”.

Implementa métodos en Colegio y Alumno para modificar la nota media.

Verifica que funcione correctamente con un par de ejemplos.

*/

class Colegio {
  nombre;
  numeroAulas;
  numeroAlumnos;

  constructor(nombre, numeroAulas, numeroAlumnos) {
    this.nombre = nombre;
    this.numeroAulas = numeroAulas;
    this.numeroAlumnos = numeroAlumnos;
  }

  set setNumeroAlumnos(numeroAlumnos) {
    this.numeroAlumnos = numeroAlumnos;
  }
}

class Alumno {
  DNI;
  nombre;
  notaMedia;

  constructor(DNI, nombre, notaMedia) {
    this.DNI = DNI;
    this.nombre = nombre;
    this.notaMedia = notaMedia;
  }

  set setNotaMedia(notaMedia) {
    this.notaMedia = notaMedia;
  }
}
colegio1 = new Colegio("Lora Tamayo", 20, 300);
colegio2 = new Colegio("Romero Vargas", 25, 350);

colegio2.setNumeroAlumnos = 360;

alumno1 = new Alumno("31534354N", "Jaime", 9);
alumno2 = new Alumno("31534354N", "Jack", 6);
alumno3 = new Alumno("31534354N", "John", 8);

alumno1.setNotaMedia = 10;
console.log("Alumnos: ", alumno1, alumno2, alumno3);
console.log("Colegios: ", colegio1, colegio2);
