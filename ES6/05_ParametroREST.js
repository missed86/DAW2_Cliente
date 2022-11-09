function Cinco(){
	// *** Parámetro REST ***
	/* Devuelve un array con los argumentos. 
	Sólo se puede poner un rest y debe ser el último de la lista de parámetros
	*/

	function Saludo(nombre, ...restoParametros){
		console.log(`${nombre} ${restoParametros[0]} tiene ${restoParametros[1]} años`);
		// Arguments sólo tiene lo que se le pase a la función, no los que tiene en el prototipo !!
	}

	Saludo(); // undefined undefined tiene undefined años
	Saludo('Pepe'); // Pepe undefined tiene undefined años
	Saludo('Pepe', 'García', 34); // Pepe García tiene 34 años

	// Otro ejemplo

	function Sumar(a = 0, b = 0, ...resto){
		let suma = Number(a) + Number(b);
		for (let i=0; i<resto.length;i++){
			suma += Number(resto[i]);
		}
		return suma;
	}

	console.log(Sumar()); // 0
	console.log(Sumar(1,3)); // 4
	console.log(Sumar(1,4,5,6,7,8)); // 31
}
