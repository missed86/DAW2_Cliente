numeracionLetras = []
objetoJuego = {}

readTextFile('data/comunes-ordenado.json', (data) => {
	for (let i = 10; i >= 4; i--) {
		let keys = Object.keys(data[i])
		let palabra = keys[Random(keys.length)]
        objetoJuego[Normalizar(palabra)] = data[i][palabra]
    }

	let contenido = ""
	cuentaFilas = 0
	for (palabra in objetoJuego) {
		let arrayLetras = palabra.split('')
		let definicion = objetoJuego[palabra][Random(objetoJuego[palabra].length)]
		contenido += `<div class="fila">`
		contenido += `<p class="definicion">${definicion}</p>`
		contenido += `<div class="palabra" data="${palabra}" data-size="${palabra.length}">`
		cuentaLetras = 0
		arrayLetras.forEach((letra) => {
			contenido += `
			<div class="letracontainer" posicion="${cuentaFilas},${cuentaLetras}" data-letra="${letra}" data-num="${numerarLetras(letra)}">
				<div class="numletra">${numerarLetras(letra)}</div>
				<div class="letra"></div>
			</div>`
			cuentaLetras++
		})
		contenido += `</div></div>`
		cuentaFilas++
	}
	document.getElementById('juego').innerHTML = contenido
	
	
	function numerarLetras(letra) {
		if (!numeracionLetras.includes(letra)) {
			numeracionLetras.push(letra)
		}
		return numeracionLetras.indexOf(letra)+1
	}
	
	document.querySelectorAll('.letracontainer').forEach((e)=>{
		e.addEventListener('click', () => {
			let posicionAtr = e.getAttribute('posicion').split(',')
			console.log(posicionAtr)
			Game.move(Number(posicionAtr[0]),Number(posicionAtr[1]))
		})
	})

	Game.move(0,0)
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
function Normalizar(string){
	const normalizado = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'A', 'E', 'I', 'O', 'U']
	const busqueda = 	['á', 'é', 'í', 'ó', 'ú', 'ä', 'ë', 'ï', 'ö', 'ü', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ä', 'Ë', 'Ï', 'Ö', 'Ü']

	const input = string.split('')
	const output = input.map(e=>(busqueda.includes(e))?normalizado[busqueda.indexOf(e)]:e)

	return output.join('').toUpperCase()
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
		document.querySelectorAll('.palabra')[this.pos.fila].querySelectorAll('.letracontainer')[this.pos.celda].classList.add('posicion')
	},
	write: function(letra, num) {
		document.querySelectorAll(`.letracontainer[data-num='${num}']`).forEach(e=>{
			e.querySelector('.letra').innerHTML = letra.toUpperCase();
		})
		this.right()
		this.comprobar()
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
	},
	comprobar: function() {
		let correcto = true
		document.querySelectorAll(".palabra").forEach((e)=>{
			let solucion = e.getAttribute('data')
			let input = ''
			e.querySelectorAll('.letra').forEach(letra=>{
				input += letra.innerHTML
			})
			if (solucion != input){
				correcto = false
			}
		})
		if (correcto)
			alert('correcto')
	}
}
window.addEventListener("keydown", (e)=>{
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
	if (e.key == "Enter") {
		Game.move(Game.pos.fila+1,0)
	}
})
