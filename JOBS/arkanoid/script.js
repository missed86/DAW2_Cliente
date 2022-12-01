const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")

const velocity = 1;

const nave = ({x=0, y=0}) => ({
    x,
    y,
    w:20,
    h:20,
    color: 'limegreen',
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    },
    move() {
        if (Keys.up) this.y -= velocity
        if (Keys.down) this.y += velocity
        if (Keys.left) this.x -= velocity
        if (Keys.right) this.x += velocity
        outOfBounds(this.x, this.y)
    },
    collision() {
        var temp = 0
        asteroides.forEach(e => {
            if(temp != this.x) {
                // console.log(this.x, Math.floor(e.x))
                temp = this.x
            }
            if((this.x+this.w >= Math.floor(e.x) || this.x+this.w <= Math.floor(e.x)) && this.y+this.h == Math.floor(e.y)) {
                // console.log(jugador.x+jugador.w - e.x)
                alert("perdiste")
                this.x = 0
                this.y = 0
            }
        });
    }

})

class asteroide {
    x = 0
    y = 0
    w = 20
    h = 20
    color = 'red'
    constructor() {
        this.x = Math.random()*(canvas.width-this.w)
        this.y = Math.random()*(canvas.height-this.h)
    }
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}
const asteroides = []
const numAsteroides = 50

for (let i = 0; i < numAsteroides; i++) { 
    asteroides.push(new asteroide)
}


const jugador = nave({})

jugador.draw()

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
    e.preventDefault()
}) 
document.body.addEventListener('keyup', (e)=>{
    if(e.key == 'ArrowUp') Keys.up = false;
    if(e.key == 'ArrowDown') Keys.down = false;
    if(e.key == 'ArrowLeft') Keys.left = false;
    if(e.key == 'ArrowRight') Keys.right = false;
    e.preventDefault()
}) 

function outOfBounds(x,y){
    if(x <= 0) jugador.x = 0
    if(x >= canvas.width-jugador.w) jugador.x = canvas.width - jugador.w 
    if(y <= 0) jugador.y = 0
    if(y >= canvas.height-jugador.h) jugador.y = canvas.height - jugador.h 
}

function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    jugador.draw()
    jugador.move()
    jugador.collision()
    requestAnimationFrame(update)
    asteroides.forEach(e => {
        e.draw();
    });
    
}
requestAnimationFrame(update)