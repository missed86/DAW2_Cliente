function Cuatro(){
	// *** Parámetros por defecto ***

	function Saludo(nombre, apellidos = 'Sánchez', edad = 20){
		console.log(`${nombre} ${apellidos} tiene ${edad} años`);
		// Arguments sólo tiene lo que se le pase a la función, no los que tiene en el prototipo !!
	}

	Saludo(); // undefined Sánchez tiene 20 años
	Saludo('Pepe'); // Pepe Sánchez tiene 20 años
	Saludo('Pepe', 'García', 34); // Pepe García tiene 34 años
}
