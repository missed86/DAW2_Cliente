var palabra = "";
var ahorcado = 1;


// Función de resetear la partida. Activa el menu de selección de categoría.
function reset() {
	document.querySelectorAll(".tecla").forEach((e, i) => {
		e.style.backgroundColor = "lightgrey";
	});
	document.getElementById("resuelve").innerHTML = "";

	ahorcado = 0;
	document.getElementById("imgAhorcado").src = "assets/ahorcado/1.png";
	document.getElementById("ahorcado").style.display = "none";
	document.getElementById("menu").style.display = "flex";
}

// Función para cargar el archivo JSON pedido por argumentos
function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType("application/json");
	rawFile.open("GET", file, true);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(rawFile.responseText);
		}
	};
	rawFile.send(null);
}

// Función para mostrar un modal para indicar si el jugador gana o pierde
function modalOpen(status) {
	const img = document.getElementById("statusImg");
	const modalP = document.getElementById("modalP");
	if (status == "victoria") {
		img.src = "assets/winner.jpg";
		modalP.innerHTML = palabra.toUpperCase();
	} else {
		img.src = "assets/loser.png";
		modalP.innerHTML = palabra.toUpperCase();
	}
	document.getElementById("modal-bg").style.display = "flex";
	setTimeout(() => {
		document.getElementById("modal-bg").classList.add("animated");
		document.getElementById("modal-window").classList.add("animated");
	}, 10);
}

// Funcion para cerrar el modal anterior
function modalClose() {
	document.getElementById("modal-bg").classList.remove("animated");
	document.getElementById("modal-window").classList.remove("animated");
	setTimeout(() => {
		document.getElementById("modal-bg").style.display = "none";
	}, 500);
}

//Función para generar palabras. Lee el archivo JSON correspondiente, selecciona una palabra al azar y separa cada letra creando 
//un div por cada letra y escribe el atributo data con la letra normalizada (sin tildes)
function genera_palabra(archivo, letras) {
	reset();
	ahorcado = 1;

	readTextFile("data/" + archivo + ".json", function (text) {
		let data = JSON.parse(text);
		if (letras > 3) {
			console.log(data[letras]);
			palabra =
				data[letras][
					Math.floor(Math.random() * (data[letras].length + 1))
				].toLowerCase();
		} else {
			palabra =
				data[Math.floor(Math.random() * (data.length + 1))].toLowerCase();
		}
		
		// Aqui se genera un div por cada palabra y a su vez un div por cada letra, asi podemos separar las palabras.
		// Tambien detecta si es un caracter extraño y lo imprime para saber que existe a modo de pista.
		let html = `<div class='palabra'>`;
		for (let i = 0; i < palabra.length; i++) {
			if (palabra[i] == " ") {
				html += `</div><div class='palabra'>`;
			} else {
				if (palabra[i] == "/" || palabra[i] == "," || palabra[i] == "'") {
					console.log(palabra[i]);
					html += `<div class="letra">${palabra[i]}</div>`;
				} else {
					html += `<div class="letra" status="off" data="${quitarTildes(
						palabra.charAt(i)
					).toUpperCase()}">_</div>`;
				}
			}
		}
		html += `</div>`;
		document.getElementById("resuelve").innerHTML = html;
		document.getElementById("menu").style.display = "none";
		document.getElementById("ahorcado").style.display = "block";
		document.getElementById("resuelve").style.display = "block";
	});

	// Entrada por teclado
	window.addEventListener("keydown", pulsar);
	function pulsar(e) {
		
		//Cierra el modal con Enter o Escape solo si esta activo
		if ((e.key == 'Enter' || e.key == "Escape") && document.getElementById("modal-bg").style.display == "flex") {
			modalClose()
		} else if (e.key == "Escape") { // Pulsando Escape vuelve al menu principal si el modal esta oculto
			reset()
		} else if (e.keyCode > 64 && e.keyCode < 193) { // Entrada de texto
			let tecla = document.querySelector(`.tecla[data="${e.keyCode}"]`);
			let letra = tecla.innerHTML.toLowerCase();
			if (tecla.style.backgroundColor == "lightgrey" && ahorcado != 0) {
				if (ahorcado < 7) {
					if (quitarTildes(palabra).includes(letra)) {
						document.querySelector(
							`.tecla[data="${e.keyCode}"]`
						).style.backgroundColor = "green";
						document
							.querySelectorAll(`.letra[data="${letra.toUpperCase()}"]`)
							.forEach((e) => {
								e.innerHTML = letra.toUpperCase();
								e.setAttribute("status", "on");
							});
						if (document.querySelectorAll('.letra[status="off"]').length == 0) {
							modalOpen("victoria");
													document.getElementById("imgAhorcado").src =
															"assets/ahorcado/win.png";
						}
					} else {
						ahorcado++;
						document.getElementById("imgAhorcado").src =
							"assets/ahorcado/" + ahorcado + ".png";
						document.querySelector(
							`.tecla[data="${e.keyCode}"]`
						).style.backgroundColor = "red";
						if (ahorcado == 7) {
							modalOpen("derrota");
							document.querySelectorAll(`.letra`).forEach((e) => {
								if (e.innerHTML == "_") {
									e.innerHTML = e.getAttribute("data");
									e.style.color = "red";
								}
							});
						}
					}
				} else {
					ahorcado = 7;
				}
			}
		}

	}
	// Entrada por clicks
	document.querySelectorAll(".tecla").forEach((e, i) => {
		e.addEventListener("click", () => {
			console.log("ahorcado: " + ahorcado);
			if (e.style.backgroundColor == "lightgrey" && ahorcado != 0) {
				if (ahorcado < 7) {
					let letra = e.innerHTML;
					console.log(letra);
					if (quitarTildes(palabra).includes(letra.toLowerCase())) {
						e.style.backgroundColor = "green";
						document
							.querySelectorAll(`.letra[data="${letra}"]`)
							.forEach((e) => {
								e.innerHTML = letra.toUpperCase();
								e.setAttribute("status", "on");
							});
						if (document.querySelectorAll('.letra[status="off"]').length == 0) {
							modalOpen("victoria");
							document.getElementById("imgAhorcado").src =
								"assets/ahorcado/win.png";
						}
					} else {
						ahorcado++;
						document.getElementById("imgAhorcado").src =
							"assets/ahorcado/" + ahorcado + ".png";
						e.style.backgroundColor = "red";

						if (ahorcado == 7) {
							//DERROTA
							modalOpen("derrota");
							document.querySelectorAll(`.letra`).forEach((e) => {
								if (e.innerHTML == "_") {
									e.innerHTML = e.getAttribute("data");
									e.style.color = "red";
								}
							});
						}
						// ahorcado = ahorcado < 7 ? ahorcado+1 : 7;
					}
				} else {
					ahorcado = 7;
				}
			}
		});
	});
}
const quitarTildes = (string) => {
	for (let i = 0; i < string.length; i++) {
		switch (string.charAt(i)) {
			case "á":
				string = string.replace("á", "a");
				break;
			case "é":
				string = string.replace("é", "e");
				break;
			case "í":
				string = string.replace("í", "i");
				break;
			case "ó":
				string = string.replace("ó", "o");
				break;
			case "ú":
				string = string.replace("ú", "u");
				break;
			case "ü":
				string = string.replace("ü", "u");
				break;
			default:
				break;
		}
	}
	return string;
};
