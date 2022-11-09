function Once(){
	
	// *** CLASES ***
	function AnimalES5(nombre, raza){
		this.nombre = nombre,
		this.raza = raza,
		this.getNombre = function(){
			return this.nombre;
		}
	}
	AnimalES5.prototype.getRaza = function(){
		return this.raza;
	}
	var animal1ES5 = new AnimalES5('Benito','gato');
	console.log(animal1ES5.getNombre()); // Benito
	console.log(animal1ES5.getRaza()); // gato

	// Puede dar problemas si no se usa NEW y es algo lioso. Se arregla con ES6
	class AnimalES6{
		constructor(nombre,raza){
			this.nombre = nombre;
			this.raza = raza;
		}
		getNombre() { 
			return this.nombre
		}
	}
	let animal1ES6 = new AnimalES6('Benito','gato');
	console.log(animal1ES6.getNombre()); // Benito

	// Si no se usa NEW daría error !!!!!!

	function imprimeAnimalES6 ( ani ){
		if (!(ani instanceof AnimalES6)){
			console.log("No es una instancia de AnimalES5");
			return;
		}
		console.log(ani.getNombre());
	}
	imprimeAnimalES6(animal1ES6); // Benito
	imprimeAnimalES6("pepe"); // No es una instancia de AnimalES5

	// Métodos estáticos y métodos computados
	let miMetodo = "gritarTitulo";

	class Libro{
		constructor( titulo ){
			this.titulo = titulo;
		}
		// Un método estático es aquel que se puede usar sin realizar instancia de la clase (Libro.crear())
		static crear(titulo){
			return new Libro(titulo);
		}
		// Un método computado es un método cuyo nombre está almacenado en una variable
		[miMetodo](){
			return this.titulo.toUpperCase();
		}
	}

	let libro1 = new Libro('Cien años de soledad');
	console.log(libro1); // Libro {titulo: "Cien años de soledad"}

	let libro2 = Libro.crear('El Quijote');
	console.log(libro2); // Libro {titulo: "El Quijote"}

	console.log(libro2.gritarTitulo()); // EL QUIJOTE

	// Herencia

	class Rectangulo{
		constructor(alto,largo){
			this.alto = alto;
			this.largo = largo;
		}

		getDatos(){
			return `El polígono es de ${this.alto} x ${this.largo}`;
		}

		getArea(){
			return this.alto * this.largo;
		}
	}

	class Cuadrado extends Rectangulo{
		constructor(alto){
			super(alto,alto); // Instancia al constructor de Rectangulo
		}
		// Si cuadrado tiene otro método llamado getArea, sobreescribiría el del super
		getArea(){
			//return "Área del cuadrado: "+(this.alto * this.alto);
			return "Área del cuadrado: "+super.getArea();
		}
	}

	let cuadrado = new Cuadrado(20);
	console.log(cuadrado);
	console.log(cuadrado.getDatos()); // El polígono es de 20 x 20
	console.log(cuadrado.getArea()); // Área del cuadrado: 400

	console.log(cuadrado instanceof Cuadrado); // true
	console.log(cuadrado instanceof Rectangulo); // true
}