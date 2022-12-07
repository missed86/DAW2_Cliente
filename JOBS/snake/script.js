const puntuacionSpan = document.getElementById('puntuacion')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")

const velocity = 200;

//Movimiento mediante teclado
const Keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

document.body.addEventListener('keydown', (e)=>{
    if(e.key == 'ArrowUp') {
        if (Partida.snake.direccion != 'down') Partida.snake.direccion = 'up'
    }
    if(e.key == 'ArrowDown')  {
        if (Partida.snake.direccion != 'up') Partida.snake.direccion = 'down'
    }
    if(e.key == 'ArrowLeft')  {
        if (Partida.snake.direccion != 'right') Partida.snake.direccion = 'left'
    }
    if(e.key == 'ArrowRight')  {
        if (Partida.snake.direccion != 'left') Partida.snake.direccion = 'right'
    }
    // console.log(Partida.snake.direccion)
}) 

// document.body.addEventListener('keydown', (e)=>{
//     if(e.key == 'ArrowUp') Keys.up = true;
//     if(e.key == 'ArrowDown') Keys.down = true;
//     if(e.key == 'ArrowLeft') Keys.left = true;
//     if(e.key == 'ArrowRight') Keys.right = true;
// }) 
// document.body.addEventListener('keyup', (e)=>{
//     if(e.key == 'ArrowUp') Keys.up = false;
//     if(e.key == 'ArrowDown') Keys.down = false;
//     if(e.key == 'ArrowLeft') Keys.left = false;
//     if(e.key == 'ArrowRight') Keys.right = false;
// }) 

const celdasX = 50
const celdasY = 50
const celdasW = Math.floor(canvas.width/celdasX)
const celdasH = Math.floor(canvas.height/celdasY)

const CanvasGrid = {
    w: celdasW, //Math.floor(canvas.width/this.celdasX)
    h: celdasH, //Math.floor(canvas.height/this.celdasY)
    draw(x,y,color) {
        ctx.fillStyle = color
        ctx.fillRect(x*this.w, y*this.h, this.w, this.h)
    }
}


class Snake {
    x = 0
    y = 0
    color = 'green'
    longitud = 3
    direccion = 'right'
    arrayPosiciones = []
    constructor() {
        this.longitud = 3
        this.direccion = 'right'
        this.x = 0
        this.y = 0
        this.arrayPosiciones = [[0,0]]
        CanvasGrid.draw(0,0,this.color)
    }
    move() {
        let temp
        if (this.direccion == 'up') {
            this.y--
            temp = [this.arrayPosiciones[this.arrayPosiciones.length-1][0],this.arrayPosiciones[this.arrayPosiciones.length-1][1]-1]
        }
        if (this.direccion == 'down') {
            this.y++
            temp = [this.arrayPosiciones[this.arrayPosiciones.length-1][0],this.arrayPosiciones[this.arrayPosiciones.length-1][1]+1]
        }
        if (this.direccion == 'right') {
            this.x++
            temp = [this.arrayPosiciones[this.arrayPosiciones.length-1][0]+1,this.arrayPosiciones[this.arrayPosiciones.length-1][1]]
        }
        if (this.direccion == 'left') {
            this.x--
            temp = [this.arrayPosiciones[this.arrayPosiciones.length-1][0]-1,this.arrayPosiciones[this.arrayPosiciones.length-1][1]]
        }
        if(temp[0] > celdasX-1) temp[0] = 0
        if(temp[0] < 0) temp[0] = celdasX-1
        if(temp[1] > celdasY-1) temp[1] = 0
        if(temp[1] < 0) temp[1] = celdasY-1
        if(Partida.comida.x == temp[0] && Partida.comida.y == temp[1]) {
            // console.log('ñam')
            this.longitud++
            puntuacionSpan.innerHTML = ++Partida.puntos
            Partida.generaComida()
        }
        if(Partida.superComida != null){
            if(Partida.superComida.x == temp[0] && Partida.superComida.y == temp[1]) {
                // console.log('ñam')
                this.longitud += Partida.superComida.valor
                Partida.puntos += Partida.superComida.valor
                puntuacionSpan.innerHTML = Partida.puntos
                Partida.destruyeSuperComida()
                // superComidaInterval = setInterval(()=>{

                // })
            }
        }
        
        // Detecta si la posicion contiene un trozo de serpiente
        if (JSON.stringify(this.arrayPosiciones).includes(JSON.stringify(temp))) {
            alert('has muerto')
            Partida.snake = new Snake;
            Partida.puntos = 0
            puntuacionSpan.innerHTML = Partida.puntos
        } 
        this.arrayPosiciones.push(temp)
        if (this.arrayPosiciones.length > this.longitud) this.arrayPosiciones.shift()

    }
}
class Comida {
    x=0
    y=0
    color = 'white'
    constructor(){
        const snakePosiciones = typeof Partida !== undefined ? Partida.snake.arrayPosiciones : []
        
        do {
        this.x= Math.floor(Math.random()*celdasX)
        this.y= Math.floor(Math.random()*celdasY)
        } while (JSON.stringify(snakePosiciones).includes(JSON.stringify([this.x,this.y])))
    }
    draw() {
        CanvasGrid.draw(this.x,this.y,this.color)
    }
}

class SuperComida {
    x=0
    y=0
    color = 'orange'
    valor = 5
    constructor(){
        this.x= Math.floor(Math.random()*celdasX)
        this.y= Math.floor(Math.random()*celdasY)
    }
    draw() {
        CanvasGrid.draw(this.x,this.y,this.color)
    }
}

const superComidaTimer = {
    timeMin: 10000,
    timeMax: 50000,
    timeActive: 10000
}

const Partida = {
    snake: new Snake,
    puntos: 0,
    comida: new Comida,
    superComida: null,
    generaComida() {
        this.comida = new Comida
    },
    generaSuperComida() {
        this.superComida = new SuperComida
        superComidaTimeout =setTimeout(()=> 
            this.destruyeSuperComida()
        ,superComidaTimer.timeActive)
    },
    destruyeSuperComida() {
        if(this.superComida != null) {
            let randomTime = Math.floor(Math.random()*(superComidaTimer.timeMax-superComidaTimer.timeMin)+superComidaTimer.timeMin)
            console.log(randomTime)
            this.superComida = null
            superComidaTimeout = setTimeout(()=>{
                this.generaSuperComida()
            }, randomTime)
        }
    }
}

var superComidaTimeout

setTimeout(()=> {
    Partida.generaSuperComida()
}, superComidaTimer.timeMin)

//Refresco de canvas
// function update() {
setInterval(()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    // console.log(Partida.snake.arrayPosiciones)
    Partida.comida.draw()
    if(Partida.superComida != null)
        Partida.superComida.draw()
    Partida.snake.arrayPosiciones.forEach(e => {
        CanvasGrid.draw(e[0],e[1],Partida.snake.color)
    })
    Partida.snake.move()
},velocity)
// }

// requestAnimationFrame(update)