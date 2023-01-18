/*

Diseña una clase “Hospital”. Tendrá como atributos “nombre”, “ciudad” y “numPacientes”
(número de pacientes ingresados). Cada paciente se representará como un objeto de la clase
“Paciente”. En ella se guardarán los atributos “DNI”, “nombre”, “enfermedad”.

Implementa un método en “Hospital” que reciba el código de paciente y se le de alta a
dicho paciente (equivale a eliminar al paciente).

Verifica que funcione correctamente con un par de ejemplos.

*/

class Hospital {
  constructor(nombre, ciudad, numPacientes) {
    this.nombre = nombre;
    this.ciudad = ciudad;
    this.numPacientes = numPacientes;
    this.pacientes = [];
  }

  addPaciente(DNI, nombre, enfermedad) {
    this.pacientes.push(new Paciente(DNI, nombre, enfermedad));
    this.numPacientes++;
  }

  darAltaPaciente(DNI) {
    this.pacientes = this.pacientes.filter((paciente) => paciente.DNI !== DNI);
    this.numPacientes--;
  }
}

class Paciente {
  constructor(DNI, nombre, enfermedad) {
    this.DNI = DNI;
    this.nombre = nombre;
    this.enfermedad = enfermedad;
  }
}

const hospital = new Hospital("Hospital General", "Madrid", 0);
hospital.addPaciente("12345678A", "Juan Perez", "Gripe");
hospital.addPaciente("87654321B", "Maria Garcia", "Tos ferina");
console.log(hospital.numPacientes);
hospital.darAltaPaciente("12345678A");
console.log(hospital.numPacientes);
