function Siete(){
	// *** FUNCIONES FLECHA =>
	/* Nueva sintaxis y comportamiento diferente a las habituales de ES5

	No hay creación de : this, super, arguments y new.target
	No puede ser llamada con new
	No tienen prototype
	No pueden cambiar el valor de this
	En lugar de arguments se usan parámetros REST
	No pueden tener nombre de parámetros duplicados ("use strict" de ES5)
	*/

	// Ejemplo 1 un sólo parámetro

	var DuplicarES5 = function(valor){
		return valor * 2;
	}
	console.log(DuplicarES5(23)); // 46

	var DuplicarES6 = valor => valor * 2; // Mucho menos código
	console.log(DuplicarES6(23)); // 46

	// Ejemplo 2 varios parámetros

	var ProductoES5 = function(num1, num2){
		return num1 * num2;
	}
	console.log(ProductoES5(2,5)); // 10

	var ProductoES6 = (num1, num2) => num1 * num2; // Mucho menos código
	console.log(ProductoES6(2,5)); // 10

	// Ejemplo 3 sin parámetros

	var SaludoES5 = function(){
		return "Hola, DAW2";
	}
	console.log(SaludoES5(2,5)); // Hola, DAW2

	var SaludoES6 = () => "Hola DAW2"; // Mucho menos código
	console.log(SaludoES6(2,5)); // Hola, DAW2

	// Ejemplo4 Retornar objetos sin confusión con las llaves (encerrando entre paréntesis=)

	var LibroES5 = function(id){
		return {
			id:id,
			nombre:"Cien años de soledad"
		}
	}
	console.log(LibroES5(1)); // {id: 1, nombre: "Cien años de soledad"}

	var LibroES6 = (id) => ( {
			id:id,
			nombre:"Cien años de soledad"
		} );
	console.log(LibroES6(1)); // {id: 1, nombre: "Cien años de soledad"}


	// Ejemplo5 Funciones anónimas que se invocan a sí mismas

	var saludoES5 = (function(nombre){
		return "Hola "+nombre;
	})('Juana');
	console.log(saludoES5); // Hola Juana 

	let saludoES6 = ( nombre => `Hola ${nombre}` )('Juana');
	console.log(saludoES6); // Hola Juana

	// Ejemplo6 No se puede cambiar el objeto this
	var manejadorES5 = {
		id : 1,
		init: function(){
			document.addEventListener("click", (function(event){
				this.clickEnPagina(event.type);
			}).bind(this)); // Debe enlazar el this (con bind), para que no sea #document
		},
		clickEnPagina: function(tipoEvento){
			console.log("ES5 " + tipoEvento);
		}
	}
	manejadorES5.init();

	var manejadorES6 = {
		id : 1,
		init: function(){
			document.addEventListener("click", event => this.clickEnPagina(event.type));
		},
		clickEnPagina: function(tipoEvento){
			console.log("ES6 " + tipoEvento);
		}
	}
	manejadorES6.init();

	// Ejemplo7 Funciones flecha con arrays
	var ordenadosES5 = [5,4,7,10,1].sort(function(a,b){
		return a-b;
	})
	console.log(ordenadosES5);

	var ordenadosES6 = [5,4,7,10,1].sort((a,b) => a-b);
	console.log(ordenadosES6);

	// *** Ejemplo8 Algunos cabos sueltos ***

	var restar = (a,b) => a-b;
	console.log(typeof restar); // Function
	console.log(restar instanceof Function); // true

	var restar2 = restar(1,3); // -2
	//var restar2 = new restar(1,3); // ERRROR !!! no se puede instanciar
}