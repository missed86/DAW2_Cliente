function Doce(){
	console.log("Ver código y probar");
	// // Este es una de las características estrellas de ES6. Sustituye al uso de librerías como Requirejs para organizar el código en módulos.
	// // En ES6, si queremos que un objeto, clase, función, variable o constante de un script pueda ser utilizado por otro script, 
	// // le anteponemos la palabra EXPORT


	// // Archivo `miModulo1.js` 
	// export function miFuncion(){ return "Hola1" }
	// export const miFuncion2 = () => "Hola2";
	// export class MiClase{ }
	// export let pi = 3.14

	// // Cuando un archivo exporta algo o todo lo que en él se define, se considera un módulo. 
	// // También podemos realizar la exportación en una sola instrucción: 

	// // Archivo `miModulo2.js` 
	// function miFuncion(){ return "hola" };
	// const miFuncion2 = () => "Hola2";
	// class MiClase{ };
	// let pi = 3.14; 

	// export {miFuncion, miFuncion2, MiClase, pi}; // Más claro ver lo que se ha exportado del módulo

	// // Después podemos importar (IMPORT) dichos módulos desde otros archivos para usar sus elementos exportados.
	// // Observa cómo se utiliza el destructuring en la importación de objetos */

	// // Archivo otroArchivo.js 
	// import { pi, miFuncion } from './miModulo1.js';

	// // Módulos
	// // La palabra default en un export indica que se exporta todo.

	// // Archivo `persona.js`
	// export default class Persona{
	// 	constructor(nombre){
	// 		this.nombre = nombre;
	// 	}
	// }

	// // En ese caso no se usan las llaves en la inportación, sólo el nombre de la clase desde el archivo en el que se encuentre:
	// import Persona from './persona.js';
}
