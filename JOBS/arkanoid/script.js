const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")

const velocity = 5;

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
    }
})

class asteroide {
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
asteroides.push(new asteroide)
asteroides.push(new asteroide)
asteroides.push(new asteroide)
asteroides.push(new asteroide)
asteroides.push(new asteroide)
asteroides.push(new asteroide)
asteroides.push(new asteroide)
asteroides.push(new asteroide)
asteroides.push(new asteroide)
asteroides.push(new asteroide)

asteroides.forEach(e => {
    e.draw();
});


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
    requestAnimationFrame(update)
    asteroides.forEach(e => {
        e.draw();
    });
    
}
requestAnimationFrame(update)