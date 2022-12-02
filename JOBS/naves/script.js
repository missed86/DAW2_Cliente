const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")

const velocity = 2;

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

// Jugador
const Jugador = {
    x:0,
    y:0,
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

}
//Asteroide
class Asteroide {
    id = 0
    x = 0
    y = 0
    w = 20
    h = 20
    color = 'red'
    constructor(id) {
        this.id = id
        this.x = Math.random()*(canvas.width-this.w)
        this.y = Math.random()*(canvas.height-this.h)
    }
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
    collision(input){
        if  (this.x < input.x + input.w &&
            this.x + this.w > input.x &&
            this.y < input.y + input.h &&
            this.h + this.y > input.y) {
            delete asteroides[this.id]
            reset()
        }
    }
}

//Meta
class Meta {
    x=0
    y=0
    w=20
    h=20
    color = 'orange'
    //posiciones = 1: Nordeste, 2: Sureste, 3:Suroeste
    constructor() {
        let posicion = Math.floor(Math.random()*3)+1
        switch (posicion) {
            case 1:
                this.x = canvas.width - this.w
                this.y = 0
                break;
                case 2:
                    this.x = canvas.width - this.w
                this.y = canvas.height - this.h
                break;
                case 3:
                this.x = 0
                this.y = canvas.height - this.h
                break;
            default:
                this.x = canvas.width - this.w
                this.y = canvas.height - this.h
                break;
        }
    }
    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}
const meta = new Meta()

// Genera instancias de asteroides segun la variable numAsteroides
const numAsteroides = 50
var asteroides = []
function generaAsteroides(){
    asteroides = []
    for (let i = 0; i < numAsteroides; i++) { 
        asteroides.push(new Asteroide(i))
    }    
}
newGame()

function newGame() {
    generaAsteroides()
    reset()
}

function reset() {
    Jugador.x = 0
    Jugador.y = 0
    Keys.up = false;
    Keys.down = false;
    Keys.left = false;
    Keys.right = false;
    
}

//Evita que el jugador salga del canvas
function outOfBounds(x,y){
    if(x <= 0) Jugador.x = 0
    if(x >= canvas.width-Jugador.w) Jugador.x = canvas.width - Jugador.w 
    if(y <= 0) Jugador.y = 0
    if(y >= canvas.height-Jugador.h) Jugador.y = canvas.height - Jugador.h 
}

function collision(a, b, borra = false, compruebaMeta = false) {
    if (a.x < b.x + b.w &&
        a.x + a.w > b.x &&
        a.y < b.y + b.h &&
        a.h + a.y > b.y) {
        if(borra) {
            delete asteroides[a.id]
            reset()
        }
        if(compruebaMeta) {
            alert('ganas!')
            newGame()
        }
    }
}

//Refresco de canvas
function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    meta.draw();
    Jugador.draw()
    Jugador.move()
    requestAnimationFrame(update)
    asteroides.forEach(asteroide => {
        asteroide.draw();
        collision(asteroide, Jugador, true);// jugador
        collision(asteroide, meta, true);   //meta
    });
    collision(meta, Jugador,false , true);  //comprueba si has llegado a la meta
    
}
requestAnimationFrame(update)