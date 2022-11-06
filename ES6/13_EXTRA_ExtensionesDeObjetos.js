function Trece(){
	// *** Extensiones de objetos. Bastantes mejoras***

	// Creación de objetos
	function CrearAlumnoES5(nombre, nota){
		this.nombre = nombre;
		this.nota = nota;
	}
	//var objetoAlumnoES5 = CrearAlumnoES5('Pepe',5); // undefined
	var objetoAlumnoES5 = new CrearAlumnoES5('Pepe',5); // Ahora sí, con new
	console.log(objetoAlumnoES5); 

	// ES5 Formato JSON puro, mucho mejor
	function CrearAlumnoES5_2(nombre, nota){
		return {
			nombre:nombre,
			nota:nota
		}
	}
	let objetoAlumnoES5_2 = CrearAlumnoES5_2('Juana',10);
	console.log(objetoAlumnoES5_2); 

	// ES6, sin necesidad de repetir los aargumentos si tienen el mismo identificador
	function CrearAlumnoES6(nombre, nota){
		return {
			nombre,
			nota
		}
	}
	let objetoAlumnoES6 = CrearAlumnoES6('Juana',10);
	console.log(objetoAlumnoES6); 

	// Métodos concisos
	var gatoES5 = {
		nombre: "Benito",
		getNombre: function(){
			return(this.nombre);
		}
	}
	console.log(gatoES5.getNombre());

	var gatoES6 = {
		nombre: "Benito",
		getNombre(){        // Se ha eliminado la palabra function y los : 
			return(this.nombre);
		}
	}
	console.log(gatoES6.getNombre());

	// Nombres de propiedades computadas o procesadas

	var amigoES5 = {};
	var apellidoES5 = "primer apellido";

	//amigoES5.primer nombre = 'pepe'; // ERROR !!!
	amigoES5["primer nombre"] = 'Juana';
	amigoES5[apellidoES5] = 'Sánchez';
	console.log(amigoES5);

	let apellidoES6 = "primer apellido";
	let amigoES6 = {
		"primer nombre" : "Juana",
		[apellidoES6] : "Sánchez"
	}

	console.log(amigoES6);

	// Otro ejemplo del por qué de su versatilidad

	let prefijo = "primer ";

	let amigoES6_2 = {
		[prefijo + "nombre"] : 'Juana',
		[prefijo + "apellido"] : "Sánchez"
	}

	console.log(amigoES6_2);
	console.log(amigoES6_2[prefijo + "nombre"]);

	// Nuevos métodos de objetos. 

	// Object.is() // Parecido a === salvo en algunas ocasiones (NaN)
	console.log (+0 == -0); // true
	console.log (+0 === -0); // true
	console.log (Object.is(+0,-0)); // false

	console.log (NaN == NaN); // false
	console.log (NaN === NaN); // false
	console.log (Object.is(NaN,NaN)); // true


	// Object.assign // Transmite propiedades de un objeto a otro sin herencia

	function MezclarES5 (objReceptor, objDonador){
		Object.keys(objDonador).forEach(function(key){
			objReceptor[key] = objDonador[key];
		});
		return objReceptor;
	}

	var objReceptor = {};
	var objDonador = {
		a : "Juan",
		get nombre(){  // Así se vería el nombre, pero no el método get
			return 'Pepe'
		}
	}
	console.log(objDonador);
	//console.log(MezclarES5(objReceptor, objDonador)); // {nombre: "Pepe"}
	// En ES6 sobraría la funciín Mezclar
	Object.assign(objReceptor,objDonador);
	console.log(objReceptor);

	// Orden de numeracion de las propiedades de los objetos. Estandarizado ya para todos los navegadores

	let objeto = {
		c : 1,
		10 : 1,
		0 : 1,
		x : 1,
		3 : 1,
		b : 1,
	};

	objeto.d = 1;
	objeto["2"] = 1;
	objeto["a"] = 1;

	console.log(Object.getOwnPropertyNames(objeto).join(' - ')); // Observar el orden de las propiedades
	// Claves en orden ascendente, las cadenas y los símbolos en el orden en que fueron agregadas
	// 0 - 2 - 3 - 10 - c - x - b - d - a
	console.log(Object.keys(objeto));
	// ["0", "2", "3", "10", "c", "x", "b", "d", "a"]

	console.log(JSON.stringify(objeto));
	// {"0":1,"2":1,"3":1,"10":1,"c":1,"x":1,"b":1,"d":1,"a":1}
}