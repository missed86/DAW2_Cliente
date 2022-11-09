function Seis(){
	// *** El operador SPREAD *** 
	/* Contrario a REST. 
	Pasa un array a elementos separados por coma, que pueden pasarse como argumentos
	*/

	let miArray = [2, 5, 7, 1, 9];
	let minimo =Math.min(...miArray);
	let numeros = [45, 53, 36];

	console.log(Math.max.apply(Math, numeros)); // En ES5

	console.log(Math.max(...numeros)); // En ES6 con spread

	// Otro ejemplo. Favorecer el paso por valor de los objetos con poco código

	let alumno = {
		nombre : 'Juan',
		nota : 6,
		repetidor : true
	}

	let alumno2 = {
		nombre : 'María',
		nota : 7,
		repetidor : false,
		edad : 18
	}

	//let alumno3 = alumno2; // No es una copia, ES EL MISMO OBJETO EN MEMORIA !!!

	let alumno3= { ...alumno2 }; 
	console.log(alumno3); // Ahora sí es una copia {nombre: "María", nota: 7, repetidor: false}

	alumno = {
		...alumno,
		...alumno2
	} // Añade a alumno las propiedades de alumno2 que no existan previamente

	console.log(alumno);
}