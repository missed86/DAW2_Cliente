function Nueve(){
	// *** SETs ***
	// Para no repetir valores si fuera un array

	var floresES5 = ['rosa','margarita','jazmín'];

	floresES5.push('rosa'); // Se puede añadir valores repetidos
	console.log(floresES5); // (4) ["rosa", "margarita", "jazmín", "rosa"]

	// Los sets son una lista ordenada de valores sin duplicados y permiten un acceso rápido a sus datos
	let floresES6 = new Set();
	floresES6.add('rosa');
	floresES6.add('margarita');
	floresES6.add('jazmín');
	floresES6.add('rosa'); // No da error, pero lo ignora puesto que ya existe en el set
	// Dentro de add hay un Object.is() y, por tanto si son exactamente iguales, lo obvia
	console.log(floresES6); // Set(3) {"rosa", "margarita", "jazmín"}

	// A partir de un array
	let numerosSet = new Set([1,2,1,5,1,6,1,3]);
	console.log(numerosSet); // Set(5) {1, 2, 5, 6, 3}

	// Para buscar un elemento en un set
	console.log(numerosSet.has(5)); // true
	console.log(numerosSet.has("5")); // false

	// Para eliminar elementos de un set
	console.log(numerosSet.size); // 5
	numerosSet.delete(6);
	console.log(numerosSet); // Set(4) {1, 2, 5, 3} // Si no existe, no lo borra y no hay error

	// Para vaciarlo completo
	//numerosSet.clear(); // Lo elimino para continuar recorriéndolo :-)
	console.log(numerosSet); // Set(0) {}

	// Recorrer todo el set
	numerosSet.forEach(function(valor,clave,elPropioSet){
		console.log(valor, clave, elPropioSet);
	}); /* 1 1 Set(4) {1, 2, 5, 3}
	2 2 Set(4) {1, 2, 5, 3}
	5 5 Set(4) {1, 2, 5, 3}
	3 3 Set(4) {1, 2, 5, 3}*/
	// El valor y la clave son iguales en los sets, para que el forEach funcione tb con los mapas

	// Convertir set en array
	let numerosArray = [...numerosSet]; // REST !!
	console.log(numerosArray); // (4) [1, 2, 5, 3]

	// Ejemplo curioso para eliminar duplicados de un array
	function EliminaDuplicados(elementos){
		let set = new Set(elementos);
		return [...set];
	}
	console.log(EliminaDuplicados([3,45,6,3,45,7])); // (4) [3, 45, 6, 7]

	// O aún más sencillo
	function EliminaDuplicados2(elementos){
		return [... new Set(elementos)]; // Maravilla !!!
	}
	console.log(EliminaDuplicados2([3,45,6,3,45,7])); // (4) [3, 45, 6, 7]
}