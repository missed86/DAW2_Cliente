const puntuacionSpan = document.getElementById("puntuacion");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const velocity = 10;

//Movimiento mediante teclado
const Keys = {
  left: false,
  right: false,
};

document.body.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    Keys.left = true;
  }
  if (e.key == "ArrowRight") {
    Keys.right = true;
  }
  // console.log(player.x)
});
document.body.addEventListener("keyup", (e) => {
  if (e.key == "ArrowLeft") {
    Keys.left = false;
  }
  if (e.key == "ArrowRight") {
    Keys.right = false;
  }
  // player.inercia *= 0.9;
  // console.log(player.x)
});
// Clases
class Jugador {
  x = 0;
  y = canvas.height - 70;
  w = 100;
  h = 10;
  velocity = 5;
  inercia = 0;
  color = "white";
  puntos = 0;
  // variacion = 0.5;
  constructor() {
    this.x = Math.floor((canvas.width - this.w) / 2);
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  move() {
    this.x += this.inercia;

    if (Keys.left) {
      this.inercia -= this.velocity;
      if (player.x > 0) player.x -= this.velocity;
    }
    if (Keys.right) {
      this.inercia += this.velocity;
      if (player.x < canvas.width - player.w) player.x += this.velocity;
    }
    this.inercia *= 0.5;
    if (this.x < 0) {
      this.x = 0;
      this.inercia = 0;
    } else if (this.x + this.w > canvas.width) {
      this.x = canvas.width - this.w;
      this.inercia = 0;
    }
  }
  collision() {
    if (
      this.x < bola.x + bola.radio &&
      this.x + this.w > bola.x &&
      this.y < bola.y + bola.radio &&
      this.h + this.y > bola.y
    ) {
      // Comprobar si la bola está colisionando con el lado izquierdo o derecho de la barra
      if (bola.x < this.x) {
        // Colisión con el lado izquierdo: cambiar la dirección de la bola en el eje X
        bola.velX = -bola.velX;
      } else if (bola.x > this.x + this.w) {
        // Colisión con el lado derecho: cambiar la dirección de la bola en el eje X
        bola.velX = -bola.velX;
      } else {
        // Colisión con el lado superior o inferior de la barra: cambiar la dirección de la bola en el eje Y
        bola.velY = -bola.velY;
      }
      return true;
    }
  }
}
class Bola {
  x = 30;
  y = 200;
  radio = 5;
  direccion = 135;
  velocity = 1.5;
  velX = 2*this.velocity;
  velY = 3*this.velocity;
  color = "white";
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  move() {
    this.x += this.velX;
    this.y += -this.velY;
  }
}
class Ladrillo {
  x = 0;
  y = 0;
  w = 40;
  h = 10;
  color = "gray";
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  collision() {
    if (
      this.x < bola.x + bola.radio &&
      this.x + this.w > bola.x &&
      this.y < bola.y + bola.radio &&
      this.h + this.y > bola.y
    ) {
      ladrillosArray = ladrillosArray.filter((ladrillo) => ladrillo !== this);
      puntuacionSpan.innerHTML = ++player.puntos;

      if (ladrillosArray.length <= 0) {
        alert("WIN");
        reset();
      }

      if (bola.x < this.x || bola.x > this.x + this.w) {
        bola.velX = -bola.velX;
      } else {
        bola.velY = -bola.velY;
      }
      return true;
    }
  }
}

//Instancia al principio
var player = new Jugador();
var bola = new Bola();
var ladrillosArray = [];

function generaLadrillos() {
  ladrillosArray = [];
  const numLadrillos = 7;
  const numLadrillosFilas = 5;
  const margenLadrillos = 5;
  const margenSuperiorLadrillos = 40;
  const margenEntreFilas = 5;
  const w =
    (canvas.width - (numLadrillos - 1) * margenLadrillos) / numLadrillos;
  const h = 15;

  for (let j = 0; j < numLadrillosFilas; j++) {
    for (let i = 0; i < numLadrillos; i++) {
      ladrillosArray.push(
        new Ladrillo(
          (w + margenLadrillos) * i,
          j * (h + margenEntreFilas) + margenSuperiorLadrillos,
          w,
          h
        )
      );
    }
  }
  console.log(ladrillosArray);
}
generaLadrillos();

function collisions(bola) {
  //Detecta el borde del canvas y cambia la direccion
  if (bola.x > canvas.width - bola.radio) bola.velX = -bola.velX;
  if (bola.x < 0 + bola.radio) bola.velX = -bola.velX;
  if (bola.y < 0 + bola.radio) bola.velY = -bola.velY;

  if (bola.y > canvas.height + bola.radio) {
    // bola.velY = -bola.velY;
    alert("perdiste wey");
    reset();
  }
  //Colisiones de barra de jugador
  // if (
  //   bola.y > player.y - bola.radio &&
  //   bola.x > player.x &&
  //   bola.x < player.x + player.w - bola.radio
  // )
  //   bola.velY = -bola.velY;
}
function reset() {
  generaLadrillos();
  player = new Jugador();
  bola = new Bola();
  for (const key in Keys) {
    Keys[key] = false;
  }
}

//Actualizacion del canvas
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  collisions(bola);
  player.draw();
  player.collision();
  player.move();
  bola.draw();
  bola.move();
  ladrillosArray.forEach((e) => {
    e.draw();
    e.collision();
  });
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
