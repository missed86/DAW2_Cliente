/*

Leer el nombre y sueldo de 8 empleados y mostrar el nombre y sueldo del empleado que
más gana.

*/
const empleados = [
  {
    nombre: "Jaime",
    sueldo: 2500,
  },
  {
    nombre: "Pepe",
    sueldo: 1567,
  },
  {
    nombre: "Juan",
    sueldo: 1898,
  },
  {
    nombre: "Antonio",
    sueldo: 1576,
  },
  {
    nombre: "Paco",
    sueldo: 1454,
  },
  {
    nombre: "Carlos",
    sueldo: 1265,
  },
  {
    nombre: "Marta",
    sueldo: 1212,
  },
  {
    nombre: "Joseju",
    sueldo: 2232,
  },
];

// const sueldo_max = (empleados) => {
//   return empleados.reduce((max, empleado) => {
//     return (empleado.sueldo > max.sueldo) ? empleado : max
//   }) 
// }

const sueldo_max = (empleados) => empleados.reduce((max, empleado) => (empleado.sueldo > max.sueldo) ? empleado : max) 
console.log(sueldo_max(empleados));
