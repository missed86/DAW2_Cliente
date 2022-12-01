const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")

const velocity = 300;

//Movimiento mediante teclado
const Keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

document.body.addEventListener('keydown', (e)=>{
    if(e.key == 'ArrowUp') Partida.snake.direccion = 'up'
    if(e.key == 'ArrowDown') Partida.snake.direccion = 'down'
    if(e.key == 'ArrowLeft') Partida.snake.direccion = 'left'
    if(e.key == 'ArrowRight') Partida.snake.direccion = 'right'
    console.log(Partida.snake.direccion)
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
        // console.log([Partida.comida.x,Partida.comida.y], Partida.snake.arrayPosiciones[Partida.snake.arrayPosiciones.length-1])
        if(Partida.comida.x == Partida.snake.x && Partida.comida.y == Partida.snake.y) {
            console.log('ñam')
            this.longitud++
            Partida.generaComida()
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
        this.x= Math.floor(Math.random()*celdasX)
        this.y= Math.floor(Math.random()*celdasY)
    }
    draw() {
        CanvasGrid.draw(this.x,this.y,this.color)
    }
}
const Partida = {
    snake: new Snake,
    puntos:0,
    comida: new Comida(),
    generaComida() {
        this.comida = new Comida()
    }
    
}
Partida
//Refresco de canvas
function update() {
    setInterval(()=>{
        ctx.clearRect(0,0,canvas.width,canvas.height)
        // console.log(Partida.snake.arrayPosiciones)
        Partida.comida.draw()
        Partida.snake.arrayPosiciones.forEach(e => {
            CanvasGrid.draw(e[0],e[1],Partida.snake.color)
        })
        Partida.snake.move()
    },velocity)
}

requestAnimationFrame(update)