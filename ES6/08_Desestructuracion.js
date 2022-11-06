Ocho()
function Ocho(){
	// Destructuring nos da una manera de extraer datos de objetos o arrays y asignarlos a variables.

	// *** Desestructuración de objetos ***

	var usuario = {
		nombre : "Juana",
		email : "jusanre7@gmail.com",
		facebook : "juana.sanchez.712",
		premium : true
	}

	/* Con ES5
	var nombre = usuario.nombre,
		facebook = usuario.facebook,
		email = usuario.email,
		premium = usuario.premium;

	console.log(nombre, email, facebook, premium); // Juana jusanre8@gmail.com juana.sanchez.712 true
	*/

	// Con ES6
	let { nombre, facebook, email, premium : dePago, twitter = "juana_san65"} = usuario;

	console.log(nombre, email, facebook, dePago, twitter); // Es lo mismo, aunque se cambien los nombres y/o se altere el orden

	// Desestructuración de objetos anidados

	let autoGuardado = {
		archivo : "app.js",
		cursor : {
			linea : 7,
			columna : 16
		},
		ultimoArchivo : {
			archivo : "index.html",
			cursor: {
				linea : 8,
				columna : 20
			}
		}
	};


	let {ultimoArchivo:{cursor:ultimoArchivo}} = autoGuardado; 
	console.log(ultimoArchivo);

	// O de forma más sencilla
	let lineaUltimoArchivo = autoGuardado.ultimoArchivo.cursor.linea;
	console.log(lineaUltimoArchivo);

	// *** Desestructuración de arrays ***

	let modulos = ["DWEC", "DWES", "DIW", "DAW"];
	let [mod1, mod2] = modulos;
	console.log(mod1, mod2); // DWEC DWES
	let [,,mod3, mod4] = modulos;
	console.log(mod3, mod4); // DIW DAW

	let otroModulo = "EIE";
	[otroModulo] = modulos; // Modifica su valor
	console.log(otroModulo); // DWEC

	// Curiosidad de desestructuración para intercambiar los valores de 2 variables
	// Antes
	var a = 100;
	var b = 200;
	var temporal;
	temporal = a;
	a = b;
	b = temporal;
	console.log(a,b);
	// Ahora
	[a,b] = [b,a]; // Jejejeje ;-)
	console.log(a,b);

	// Desestructuración de arrays anidados

	let colores = ["rojo", ["blanco", "negro"], "morado", "naranja"];
	let [c1, [c2], c3] = colores;
	console.log(c1, c2, c3); // rojo blanco morado

	let colores2 = ["rojo", "blanco", "negro", "morado", "naranja"];
	let [colorPrincipal, ...restoColores] = colores2;
	console.log(colorPrincipal,restoColores); // rojo (4) ["blanco", "negro", "morado", "naranja"]


	// Valores por defecto en la desestructuración (Para arrays y objetos)
	let animales = ["Benito"];
	[animal1, animal2 = "Pitufa"] = animales;
	console.log(animal1,animal2); //Benito Pitufa

	// Desestructuración de parámetros

	function crearAlgo(dato, opciones){ // no se sabe lo que se quiere
		opciones = opciones || {};
		var uno = opciones.uno,
			dos = opciones.dos,
			tres = opciones.tres;
		console.log(dato, uno, dos, tres);
	}

	crearAlgo('algo', { uno : 'uno', dos : 'dos', tres : 'tres'}); // algo uno dos tres
	// Pero no se sabe qué opciones se esperan

	function crearAlgoES6(dato, {uno, dos, tres}){ // Ya se sabe lo que se quiere
		console.log(dato, uno, dos, tres);
	}
	crearAlgoES6('algo', { uno : 'uno', dos : 'dos', tres : 'tres'}); // algo uno dos tres ! Lo mismo :-) !

	// Si no se manda nada a la función, salvo el dato
	//crearAlgoES6('algo'); // ERROR !!!!!

	// Se arregla así:
	function crearAlgoES6_2(dato, {uno, dos, tres} = {}){ // 
		console.log(dato, uno, dos, tres);
	}
	crearAlgoES6_2('algo'); // algo undefined undefined undefined

	function crearAlgoES6_3(dato, {uno, dos, tres} = { uno:'uno', dos:'dos', tres:'tres'}){ // 
		console.log(dato, uno, dos, tres);
	}
	crearAlgoES6_3('algo'); // algo uno dos tres

	crearAlgoES6_3('algo',{uno: 'pepe', dos: 'juana', tres: 'luisa'}); //algo pepe juana luisa
}