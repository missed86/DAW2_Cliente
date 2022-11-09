function Uno(){

	// *** Declaración de variables VAR vs LET y constante CONST ***
	/*
	var declara una variable de scope global o local para la función sin importar el ámbito de bloque. Permite hoisting.
	let declara una variable de scope global, local para la función o de bloque. Es reasignable y no permite hoisting.
	const declara una variable de scope global, local para la función o de bloque. No es reasignable, pero es mutable. No permite hoisting.
	*/

	var mensaje = "Hola, DAW2"; // Global, pertenece al objeto window 
	let mensaje2 = ", qué tal?"; // Global, pero no pertenece a window

	function Ambito(){
		var mensaje = "¿Qué ha pasado aquí?"; // Modifica mensaje
		let mensaje2 = 'A ver'; // Es otra variable totalmente distinta
		console.log(mensaje); // Global (¿Qué ha pasado aquí?)
		console.log(mensaje2); // Local a la función (A ver)
	}

	Ambito();

	// Con let no hay redeclaraciones

	var dato1 = "uno";
	var dato1 = "dos"; // Correcto

	let dato3 = "uno";
	//let dato3 = "dos"; // ERROR !!!!!


	// *** Declaración de constantes con const. Se suelen escribir en mayúsculas

	const IVA = 0.21;
	// No se puede modificar su contenido salvo que sea una propiedad de un objeto constante

	//IVA = 0.16; // ERROR !!!!!

	// *** Declaración de variables en bucles

	// ECMAScript 5 :
	/*for (var i=0; i<5; i++){
		//
		//
	}
	console.log(i); // Valdría 5
	*/

	// ECMAScript 6
	for (let i=0; i<5; i++){
		//
		//
	}
	//console.log(i); // ERROR !!!! i no está definido
}