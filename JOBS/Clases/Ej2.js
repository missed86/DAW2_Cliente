/*

Diseña una clase “Aeropuerto”. Tendrá como atributos “nombre”, “ciudad” y
“numeroVuelosDiarios”. Cada vuelo diario se representará como un objeto de la clase “Vuelo”.
En ella se guardarán los atributos “codigo”, “hora_llegada” y “hora_salida”.

Implementa métodos en aeropuerto y vuelo para modificar la hora de llegada, para
modificar la hora de salida y para comprobar si la hora de salida es posterior a la hora de llegada.

Verifica que funcione correctamente con un par de ejemplos.

*/

class Aeropuerto {
  nombre;
  ciudad;
  numeroVuelosDiarios;

  constructor(nombre, ciudad, numeroVuelosDiarios) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.numeroVuelosDiarios = numeroVuelosDiarios;
  }

  set setNumeroVuelosDiarios(numeroVuelosDiarios) {
    this.numeroVuelosDiarios = numeroVuelosDiarios;
  }
}

class Vuelo {
  codigo;
  hora_llegada;
  hora_salida;

  constructor(codigo, hora_llegada, hora_salida) {
    this.codigo = codigo;
    this.hora_llegada = hora_llegada;
    this.hora_salida = hora_salida;
  }

  set setHora_llegada(hora_llegada) {
    this.hora_llegada = hora_llegada;
  }
  set setHora_salida(hora_salida) {
    this.hora_salida = hora_salida;
  }
}


