const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")

const velocity = 1000;

//Movimiento mediante teclado
const Keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

document.body.addEventListener('keydown', (e)=>{
    if(e.key == 'ArrowUp') Keys.up = true;
    if(e.key == 'ArrowDown') Keys.down = true;
    if(e.key == 'ArrowLeft') Keys.left = true;
    if(e.key == 'ArrowRight') Keys.right = true;
}) 
document.body.addEventListener('keyup', (e)=>{
    if(e.key == 'ArrowUp') Keys.up = false;
    if(e.key == 'ArrowDown') Keys.down = false;
    if(e.key == 'ArrowLeft') Keys.left = false;
    if(e.key == 'ArrowRight') Keys.right = false;
}) 

const CanvasGrid = {
    celdasX: 100,
    celdasY: 100,
    w: 10, //Math.floor(canvas.width/this.celdasX)
    h: 10, //Math.floor(canvas.height/this.celdasY)
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
        if (this.direccion == 'right') {
            let temp = [(this.arrayPosiciones[this.arrayPosiciones.length-1]),(this.arrayPosiciones[this.arrayPosiciones.length-1]+1)]
            console.log(temp)
            this.arrayPosiciones.push(temp)
        }
    }
}
const Partida = {
    snake: new Snake,
    
}

//Refresco de canvas
function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    setInterval(()=>{
        // console.log(Partida.snake.arrayPosiciones)
        Partida.snake.arrayPosiciones.forEach(e => {
            CanvasGrid.draw(e[0],e[1],Partida.snake.color)
        })
        CanvasGrid.draw(0,0,Partida.snake.color)
        Partida.snake.move()
    },velocity)
}
setInterval(()=>{
    
},velocity)

requestAnimationFrame(update)