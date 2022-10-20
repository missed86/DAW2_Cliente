const actualInput = document.getElementById("actual");
let menoresArray = [];
let mayoresArray = [];
let wait = false;
let intentos = 0;

let numero = generaNumero();
console.log(numero)

function generaNumero() {
    return Math.round(Math.random()*100+1);
}


document.addEventListener("keydown", (e) => {
	// console.log(e.key);
    if (!wait) {
        if (e.key >= 0 && e.key <= 9) {
            introduceNum(e.key);
        }
        if (e.key == "Backspace") {
            borra();
        }
        if (e.key == "Enter")
            comprueba();
    }
});
function introduceNum(num) {
    if(!wait)
	actualInput.innerHTML += num;
}
function borra(){
    if (actualInput.innerHTML > 0) {
        actualInput.innerHTML = actualInput.innerHTML.substring(0,actualInput.innerHTML.length - 1);
	}
}
function comprueba(){
    let input = Number(actualInput.innerHTML);
    if (input > 0 && input <= 100){
        intentos++;
        if (input < numero) {
            menoresArray.push(input);
            menoresArray.sort((a, b) => b - a);
            document.getElementById('menores').innerHTML = '';
            let porcentaje = 100;
            menoresArray.forEach((e,i)=>{
                if (porcentaje>0) {
                    document.getElementById('menores').innerHTML = `<div class="number menor" 
                    style="opacity:${porcentaje}%">${e}</div>`+ document.getElementById('menores').innerHTML;
                    porcentaje -= 30;
                }
    
            })
        }
        if (input > numero) {
            mayoresArray.push(input);
            mayoresArray.sort((a, b) => a - b);
            document.getElementById('mayores').innerHTML = '';
            let porcentaje = 100;
            mayoresArray.forEach((e)=>{
                if (porcentaje>0) {
                    document.getElementById('mayores').innerHTML += `<div class="number mayor" 
                    style="opacity:${porcentaje}%">${e}</div>`
                    porcentaje -=30;
                }
            })
        }
        if (input == numero) {
            // alert("WIN!\n El numero era "+ numero);
            modalShow();
            wait = true;
            return null;
        }
        actualInput.innerHTML = '';
    } else {
        tooltip();
        tiembla();
    }
}
function modalShow() {
    document.getElementById('actual').classList.add('modal');
    document.getElementById('actual').innerHTML += `<button onclick="retry()">Reiniciar?</button>`;
    document.getElementById('actual').innerHTML += `<div class="intentos">Intentos: ${intentos}</button>`;
    setTimeout(()=>{
        document.querySelector('.actual button').classList.add('animate');
        document.getElementById('menores').innerHTML="";
        document.getElementById('mayores').innerHTML="";
    },1000)
    
}
function retry() {
    mayoresArray = [];
    menoresArray = [];
    intentos = 0;
    document.getElementById('actual').classList.add('retry');
    document.getElementById('actual').classList.remove('modal');
    document.querySelector('.actual button').remove();
    document.querySelector('.actual .intentos').remove();
    setTimeout(()=>{
        document.getElementById('actual').innerHTML="";
        document.getElementById('actual').classList.remove('retry');
    },500)
    numero = generaNumero();
    wait = false;
}
function tiembla() {
    actualInput.classList.add('tiembla');
        setTimeout(()=> {
            actualInput.classList.remove('tiembla');
        },500)
}
document.querySelector('.info').addEventListener('click', () => {
    tooltip();
})
function tooltip() {
    document.getElementById('tooltip').style.display = 'block';
    document.getElementById('tooltip').classList.add('wake');
    setTimeout(() => {
        document.getElementById('tooltip').classList.remove('wake');
        setTimeout(()=> {
            document.getElementById('tooltip').style.display = 'none';
        },500)
    },2000)
}