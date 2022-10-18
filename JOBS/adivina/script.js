let size = 5;
// let solution = Math.round(Math.random() * Math.pow(10, size))
// 	.toString()
// 	.padStart(size, "0")
// 	.split("");

const GereraNumerosUnicos = (size) => {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers = numbers.sort(() => {
        return Math.random() - 0.5;
    });
    return numbers.slice(0, size);
};
var solution = GereraNumerosUnicos(size);
// console.log(solution);

class Posicion {
    constructor() {
        this.size = size;
        this.posicion = 0;
    }
    next() {
        this.posicion = this.posicion >= size - 1 ? 0 : this.posicion + 1;
        // this.move();
        if (
            document
                .querySelectorAll(".actual .cifra")
                [this.posicion].classList.contains("correct")
        ) {
            this.next();
        }
        this.puntero();
    }
    prev() {
        this.posicion = this.posicion == 0 ? size - 1 : this.posicion - 1;
        // this.move();
        if (
            document
                .querySelectorAll(".actual .cifra")
                [this.posicion].classList.contains("correct")
        ) {
            this.prev();
        }
        this.puntero();
    }
    borra() {
        this.prev();
        document.querySelector(".cifra.posicion").innerHTML = "";
    }
    move(x) {
        if (x < size) {
            this.posicion = x;
            // console.log("moviendo a: " + x);
            this.puntero();
        }
    }
    position() {
        return this.posicion;
    }
    reset() {
        this.posicion = 0;
        if (
            document
                .querySelectorAll(".actual .cifra")
                [this.posicion].classList.contains("correct")
        ) {
            this.next();
        }
    }
    puntero() {
        // console.log(this.posicion)
        document.querySelector(".posicion").classList.remove("posicion");
        document
            .querySelectorAll(".actual .cifra")
            [this.posicion].classList.add("posicion");
    }
}

const pos = new Posicion();

function nuevaLinea(array) {
    document.querySelector(".posicion").classList.remove("posicion");
    document.querySelector(".actual").classList.remove("actual");
    if(array== "win") {
        document.getElementById("juego").innerHTML += '<div class="fila"><button onclick="resetGame()" class="retry"> Reintentar?</div></div>'
    } else {
        document.getElementById("juego").innerHTML += `<div class="fila actual">
        <div class="cifra posicion"></div>
        <div class="cifra"></div>
        <div class="cifra"></div>
        <div class="cifra"></div>
        <div class="cifra"></div>
        </div>`;
        
        array.forEach((e, i) => {
            if (e != null) {
                document.querySelectorAll(".actual .cifra")[i].innerHTML = e;
                document
                .querySelectorAll(".actual .cifra")
                [i].classList.add("correct");
            }
        });
    }
    
    Adapta();
}
// nuevaLinea("win");
function Escribe(num) {
    // console.log(num);
    const cifras = document.querySelectorAll(".fila.actual .cifra");

    document.querySelector(".cifra.posicion").innerHTML = num;
    pos.next();
}
function Comprobar() {
    let array = [];
    document.querySelectorAll(".actual .cifra").forEach((e, i) => {
        array.push((e.innerHTML=='')?11:Number(e.innerHTML));
    });
    // console.log(array);
    let correct = [];
    let inverso = [...solution];
    solution.map((e, i) => {
        if (e == array[i]) {
            document
                .querySelectorAll(".actual .cifra")
                [i].classList.add("correct");
            inverso[i] = null;
        }

        if (e == array[i]) {
            correct.push(e);
        } else {
            correct.push(null);
        }
    });

    solution.map((e, i) => {
        if (inverso.includes(array[i])) {
            if (
                !document
                    .querySelectorAll(".actual .cifra")
                    [i].classList.contains("correct")
            ) {
                console.log(inverso, array[i]);
                document
                    .querySelectorAll(".actual .cifra")
                    [i].classList.add("maybe");
            }
        }
    });
    if (JSON.stringify(correct) == JSON.stringify(array)) {
        nuevaLinea("win");
        // document.querySelector(".posicion").classList.remove("posicion");
        return true;
    }
    nuevaLinea(correct);
    click();
    pos.reset();
}
function Adapta() {
    
    const alturaJuego = document.getElementById('juego').offsetHeight-10;
    const alturaFila = document.querySelector('#juego .fila').offsetHeight+5;
    const cuentaFilas = document.querySelectorAll('#juego .fila').length;
    const alturaTeclado = document.getElementById('teclado').offsetHeight;
    const alturaLogo = document.querySelector('.logo').offsetHeight;

    const alturaViewport = window.innerHeight;

    console.log(alturaJuego+alturaTeclado+alturaLogo, alturaViewport, alturaViewport<(alturaJuego+alturaTeclado+24));
    // if(alturaJuego<alturaFila*(cuentaFilas+1)) {
    //     if(cuentaFilas>2){
    //         // console.log(cuentaFilas);
    //         document.querySelectorAll('#juego .fila')[0].remove();
    //     }
    // }

    // if(alturaViewport<(alturaJuego+alturaTeclado+alturaLogo+48) && cuentaFilas>2) {
    //     // console.log(cuentaFilas);
    //     document.querySelectorAll('#juego .fila')[0].remove();
    // }
    if(alturaViewport<((alturaFila*(cuentaFilas+1))+alturaTeclado) && cuentaFilas>2) {
        // console.log(cuentaFilas);
        document.querySelectorAll('#juego .fila')[0].remove();
    }
    
}
window.addEventListener("keydown", (e) => {
    // console.log(e.key);
    if (e.key < 10 && e.key >= 0) Escribe(e.key);
    if (e.key == "Enter") Comprobar();
    if (e.key == "ArrowLeft") pos.prev();
    if (e.key == "ArrowRight") pos.next();
    if (e.key == "Backspace") pos.borra();
});
function click() {
    document.querySelectorAll('.actual .cifra').forEach((e,i)=> {
        e.addEventListener('click',()=> {
            pos.move(i)
        })
    })
}
click();
function resetGame() {
    solution = GereraNumerosUnicos(size);
    document.getElementById("juego").innerHTML = `<div class="fila actual">
    <div class="cifra posicion"></div>
    <div class="cifra"></div>
    <div class="cifra"></div>
    <div class="cifra"></div>
    <div class="cifra"></div>
    </div>`;
}
window.onresize = ()=>Adapta();
// console.log(solution)
