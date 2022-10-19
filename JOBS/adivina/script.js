const actualInput = document.getElementById("actual");
let menoresArray = [];
let mayoresArray = [];

let numero = generaNumero();
console.log(numero)

function generaNumero() {
    return Math.round(Math.random()*100+1);
}


document.addEventListener("keydown", (e) => {
	// console.log(e.key);
	if (e.key >= 0 && e.key <= 9) {
		introduceNum(e.key);
	}
	if (e.key == "Backspace") {
		borra();
	}
    if (e.key == "Enter")
        comprueba();
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
    let input = actualInput.innerHTML;
    if (input < numero) {
        menoresArray.push(input);
        menoresArray.sort();
        menoresArray.reverse();
        document.getElementById('menores').innerHTML = '';
        let porcentaje = 100;
        menoresArray.forEach((e,i)=>{
            if (porcentaje>0) {
                document.getElementById('menores').innerHTML = `<div class="number menor" 
                style="opacity:${porcentaje}%;scale:${porcentaje-20}%">${e}</div>`+ document.getElementById('menores').innerHTML;
                porcentaje -= 20;
            }

        })
    }
    if (input > numero) {
        mayoresArray.push(input);
        mayoresArray.sort();
        menoresArray.reverse();
        document.getElementById('mayores').innerHTML = '';
        let porcentaje = 100;
        mayoresArray.forEach((e)=>{
            if (porcentaje>0) {
                document.getElementById('mayores').innerHTML += `<div class="number mayor" 
                style="opacity:${porcentaje}%;scale:${porcentaje-20}%">${e}</div>`
                porcentaje -=20;
            }
        })
    }
    if (input == numero) {
        alert("WIN!\n El numero era "+ numero);
        return null;
    }
    actualInput.innerHTML = '';
}
