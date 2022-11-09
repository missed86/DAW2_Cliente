Diez()
function Diez(){
	// *** MAPS ***

	// Son colecciones de datos que tienen clave y valor (key - value pair)
	let mapa = new Map();
	// Para insertar información
	mapa.set("nombre","Juana");
	mapa.set("edad",53);
	mapa.set("edad",12); // No da error, sino que machaca su contenido
	mapa.set("apellido"); // Sin valor, por tanto undefined
	mapa.set(); // Sin nada de clave y valor undefine => undefined
	console.log(mapa); // Map(2) {"nombre" => "Juana", "edad" => 56}, como en PHP
	console.log(mapa.size); // 2

	// Obtener valores
	if (mapa.has("nombre")){
		console.log(mapa.get("nombre")); // Juana
	}

	console.log(mapa.get("apellido")); // undefined

	// Borrar
	mapa.delete("nombre"); // Borra el par completo
	console.log(mapa.get("nombre")); // undefined

	mapa.set("edad"); // Si no se le pasa como valor la toma como undefined

	mapa.clear(mapa); // Lo borra completamente

	// Pruebas con mapas de sets de arrays, de objetos, ... de lo que sea
	// Para incializarlo se usan arrays dentro de un array
	let mapa2 = new Map([ ["nombe","Juana"], ["edad",53], ["notas", {dwec:10,eie:7}], [null,undefined] ]); // Cualquier cosa
	console.log(mapa2);
	console.log(mapa2.get(null));

	// Recorrer los mapas
	mapa2.forEach((valor,clave,elPropioMapa) => {
		console.log(clave, valor, elPropioMapa);
	});
	/* nombe Juana Map(4) {"nombe" => "Juana", "edad" => 53, "notas" => {…}, null => undefined}
	app.js:711 edad 53 Map(4) {"nombe" => "Juana", "edad" => 53, "notas" => {…}, null => undefined}
	app.js:711 notas {dwec: 10, eie: 7} Map(4) {"nombe" => "Juana", "edad" => 53, "notas" => {…}, null => undefined}
	app.js:711 null undefined Map(4) {"nombe" => "Juana", "edad" => 53, "notas" => {…}, null => undefined}*/

	// Nuevo ciclo FOR .. OF Especializado para arrays y colecciones SET y MAP
	for (let elemento of mapa2){
		console.log(elemento); // Un valor (array) por cada elemento
	}

	// Ejemplos con for ... of con varios tipos de datos
	// Array
	let ej1 = [1,2,3];
	for (let i in ej1) console.log(i);  // Devuelve los índices 0 1 2
	for (let i of ej1) console.log(i);  // Devuelve los valores 1 2 3

	//Set
	let ej2 = new Set([10,20,30]);
	//for (let i in ej2) console.log(i);  // No devuelve nada
	for (let i of ej2) console.log(i);  // Devuelve los valores 10 20 30

	// Map
	let ej3 = new Map([["a",100],["b",200],["c",300]]);

	//for (let i in ej3) console.log(i);  // No devuelve nada

	for (let i of ej3) console.log(i);  /* Devuelve los valores (2) ["a", 100]
											app.js:741 (2) ["b", 200]
											app.js:741 (2) ["c", 300]
	*/
}