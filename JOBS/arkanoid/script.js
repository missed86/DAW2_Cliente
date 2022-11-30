const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")

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
        if (Keys.up) this.y--
        if (Keys.down) this.y++
        if (Keys.left) this.x--
        if (Keys.right) this.x++
    }
})
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

function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    jugador.draw()
    jugador.move()
    requestAnimationFrame(update)
}
requestAnimationFrame(update)