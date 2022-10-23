numeracionLetras = []
objetoJuego = {}


readTextFile('data/comunes-ordenado.json', (data) => {
	// console.log(data)
	for (let i = 10; i >= 4; i--) {
		let keys = Object.keys(data[i])
		palabra = keys[Random(keys.length)]
		//queda normalizar palabras (sin tildes)
        objetoJuego[palabra] = data[i][palabra]
		// let keys = Object.keys(data[i])
		// palabra = keys[Random(keys.length)];
        // contenido += palabra
		// contenido += "<br> <br>"
    }
	// console.log(objetoJuego)

	let contenido = ""

	for (palabra in objetoJuego) {
		let arrayLetras = palabra.split('')
		let definicion = objetoJuego[palabra][Random(objetoJuego[palabra].length)]
		contenido += `<div class="fila">`
		contenido += `<p class="definicion">${definicion}</p>`
		contenido += `<div class="palabra" data="${palabra}" data-size="${palabra.length}">`
		arrayLetras.forEach((letra,i) => {
			contenido += `
			<div class="letracontainer" data-letra="${letra}" data-num="${numerarLetras(letra)}">
				<div class="numletra">${numerarLetras(letra)}</div>
				<div class="letra"></div>
			</div>`
		})
		contenido += `</div></div>`
	}
	document.getElementById('juego').innerHTML = contenido
	Game.move(0,0)


	function numerarLetras(letra) {
		if (!numeracionLetras.includes(letra)) {
			numeracionLetras.push(letra)
		}
		return numeracionLetras.indexOf(letra)+1
	}
})
function escribirLetra(letra,num) {
	document.querySelectorAll(`.letracontainer[data-num='${num}']`).forEach(e=>{
		e.querySelector('.letra').innerHTML = letra;
	})
}
function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest()
	rawFile.overrideMimeType("application/json")
	rawFile.open("GET", file, true)
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4 && rawFile.status == "200") {
			callback(JSON.parse(rawFile.responseText))
		}
	};
	rawFile.send(null);
}
function Random(total){
    return Math.floor(Math.random()*total);
}

const Game = {
	pos: {
		fila: 0,
		celda: 0,
		length: 0
	},
	move: function(fila, celda) {
		this.pos.fila = (fila>0)?fila:0
		this.pos.celda = (celda>0)?celda:0
		if (fila > 6){
			this.pos.fila = 6
		}
		this.pos.length = document.querySelectorAll(".palabra")[this.pos.fila].getAttribute("data-size")
		if (celda > this.pos.length-1){
			this.pos.celda = this.pos.length-1
		}

		document.querySelectorAll('.letracontainer').forEach(e=>e.classList.remove('posicion'))
		// console.log(Game.pos)
		document.querySelectorAll('.palabra')[this.pos.fila].querySelectorAll('.letracontainer')[this.pos.celda].classList.add('posicion')
	},
	write: function(letra, num) {
		document.querySelectorAll(`.letracontainer[data-num='${num}']`).forEach(e=>{
			e.querySelector('.letra').innerHTML = letra;
		})
		this.right()
		//añadir comprobar()
	},
	delete: function() {
		let num = document.querySelector('.posicion').getAttribute('data-num')
		document.querySelectorAll(`.letracontainer[data-num='${num}']`).forEach(e=>{
			e.querySelector('.letra').innerHTML = '';
		})
	},
	up: function() {
		this.move(this.pos.fila-1,this.pos.celda)
	},
	down: function() {
		this.move(this.pos.fila+1,this.pos.celda)
	},
	right: function() {
		this.move(this.pos.fila,this.pos.celda+1)
	},
	left: function() {
		this.move(this.pos.fila,this.pos.celda-1)
	}
}
window.addEventListener("keydown", (e)=>{
	console.log(e.key)
	if (/^[a-zA-ZñÑ]$/.test(e.key)){
		let num = document.querySelector('.posicion').getAttribute('data-num')
		Game.write(e.key, num)
	}
	if (e.key == "ArrowLeft") {
		Game.left()
	}
	if (e.key == "ArrowRight") {
		Game.right()
	}
	if (e.key == "ArrowUp") {
		Game.up()
	}
	if (e.key == "ArrowDown") {
		Game.down()
	}
	if (e.key == "Delete") {
		Game.delete()
	}
	if (e.key == "Backspace") {
		if (Game.pos.celda == Game.pos.length-1 && document.querySelector('.posicion .letra').innerHTML != ''){
			Game.delete()
		} else {
			Game.left()
			Game.delete()
		}
	}
})