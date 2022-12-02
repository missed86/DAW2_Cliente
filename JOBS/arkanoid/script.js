const puntuacionSpan = document.getElementById("puntuacion")
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

const velocity = 10

//Movimiento mediante teclado
const Keys = {
  left: false,
  right: false,
};

document.body.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    if (player.x > 0) player.x -= velocity
  }
  if (e.key == "ArrowRight") {
    if (player.x < canvas.width - player.w) player.x += velocity
  }
  // console.log(player.x)
});

// Clases
class Jugador {
  x = 0
  y = canvas.height - 70
  w = 100
  h = 10
  color = "white"
  constructor() {
    this.x = Math.floor((canvas.width - this.w) / 2)
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }
}
class Bola {
  x = 80
  y = 50
  radio = 5
  direccion = 135
  velX = 3
  velY = 2
  color = "white"
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI)
    ctx.fillStyle = this.color
    ctx.fill()
  }
  move() {
    this.x += this.velX
    this.y += this.velY
  }
}
class Ladrillo {
    x=0
    y=0
    w=40
    h=10
    color ='gray'
    constructor(x,y, w,h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}

//Instancia al principio
var player = new Jugador()
var bola = new Bola()
var ladrillosArray = []
const numLadrillos = 10
const numLadrillosFilas = 5
const margenLadrillos = 5
const MSLadrillos = 40

function generaLadrillos(){
    let w = (canvas.width/numLadrillos)-margenLadrillos
    for (let j = 0; j < numLadrillosFilas; j++) {
        for (let i = 0; i < numLadrillos; i++) {
           ladrillosArray.push(new Ladrillo((w+margenLadrillos)*i,j+MSLadrillos))
        }
    }
}
generaLadrillos()

function collitions(bola) {
  //Detecta el borde del canvas y cambia la direccion
  if (bola.x > canvas.width - bola.radio) bola.velX = -bola.velX
  if (bola.x < 0 + bola.radio) bola.velX = -bola.velX
  if (bola.y > canvas.height - bola.radio) bola.velY = -bola.velY
  if (bola.y < 0 + bola.radio) bola.velY = -bola.velY

  //Colisiones de barra de jugador
  if (
    bola.y > player.y - bola.radio &&
    bola.x > player.x &&
    bola.x < player.x + player.w - bola.radio
  )
    bola.velY = -bola.velY
}

//Actualizacion del canvas
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  collitions(bola)
  player.draw()
  bola.draw()
  bola.move()
  ladrillosArray.forEach(e=>{
      e.draw()
  })
  requestAnimationFrame(update)
}

requestAnimationFrame(update)
