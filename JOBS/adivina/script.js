const actualInput = document.getElementById("actual");
let menoresArray = [];
let mayoresArray = [];
let wait = false;

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
	actualInput.innerHTML += num;
}
function borra(){
    if (actualInput.innerHTML > 0) {
        actualInput.innerHTML = actualInput.innerHTML.substring(0,actualInput.innerHTML.length - 1);
	}
}
function comprueba(){
    let input = Number(actualInput.innerHTML);
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
}
function modalShow() {
    document.getElementById('actual').classList.add('modal');
    document.getElementById('actual').innerHTML += `<button onclick="retry()">Reiniciar?</button>`
    setTimeout(()=>{
        document.querySelector('.actual button').classList.add('animate');
        document.getElementById('menores').innerHTML="";
        document.getElementById('mayores').innerHTML="";
    },1000)
    
}
function retry() {
    mayoresArray = [];
    menoresArray = [];
    document.getElementById('actual').classList.remove('modal');
    document.querySelector('.actual button').remove();
    setTimeout(()=>{
        document.getElementById('actual').innerHTML="";
    },500)
    numero = generaNumero();
    wait = false;
    

}
