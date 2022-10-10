document.write(`Ejercicio 2. Presentar en la página el texto “Javascript” en los 6 diferentes tipos de
cabecera HTML, de mayor a menor.`)
for (let i = 1; i <= 6; i++) {
    document.write(`<h${i}>Hola Javascript</h${i}>`);
}


document.write("<hr>")
document.write(`Ejercicio 3. El factorial de un número entero n es una operación matemática que
consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el
factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120.
Utilizando la estructura for, crear un script que calcule el factorial de un
número entero.`)
document.write("<br><br><button onclick='factorial()'>Factorial</button><p id='factorial'></p>")

function factorial(){
    let numero = prompt();
    let resultado = 1;
    let texto = "";
    for (let i = 0; i < numero; i++) {
        resultado *= numero-i;
        if (i!=numero-1) {
            texto+= numero-i + " x ";
        }
        if (i==numero-1) {
            texto+=1
        }
    }
    document.getElementById('factorial').innerHTML = `<br><br>${numero}! = ${texto} = ${resultado}`;
}

document.write("<hr>")
document.write(`4. Leer una cadena de texto mediante el método prompt() y generar un
array con las palabras que contiene. Posteriormente, mostrar la siguiente
información:
<br>• Número de palabras
<br>• Primera palabra y última palabra
<br>• Las palabras colocadas en orden inverso
<br>• Las palabras ordenadas de la a la z
<br>• Las palabras ordenadas de la z a la a.
<br><br><button onclick='operacionesCadena()'>Púlsame</button><p id='operacionesCadena'></p>`)
function operacionesCadena() {
    let texto = prompt("Introduce una cadena de texto");
    let resultado = `<br> La frase es: ${texto}<br><br>`;
    let arrayTexto = texto.split(" ");
    resultado += `<br>Número de palabras: ${arrayTexto.length}`;
    resultado += `<br>Primera y última palabra: ${arrayTexto[0]} y ${arrayTexto[arrayTexto.length-1]}`;
    
    let inverso = "";
    for (let i = arrayTexto.length; i > 0; i--){
        inverso += arrayTexto[i-1]+  " ";       
    }
    resultado += `<br>Orden inverso:<br>`;
    resultado += `${inverso} `+ " " ;

    let ordenadasAsc = arrayTexto.sort();
    resultado += `<br>Las palabras ordenadas de la A la Z:<br>${ordenadasAsc} `;
    let ordenadasDesc = ordenadasAsc.reverse();
    resultado += `<br>Las palabras ordenadas de la Z la A:<br>${ordenadasDesc} `;



    document.getElementById('operacionesCadena').innerHTML = resultado;
}


document.write("<hr>")
document.write(`5. El cálculo de la letra del NIF es un proceso matemático sencillo que se
basa en obtener el resto de la división entera del número de DNI y el
número 23. A partir del resto de la división, se obtiene la letra
seleccionándola según el siguiente orden:<br><br>
T R W A G M Y F P D X B N J Z S Q V H L C K E<br><br>
Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es
3 la letra es la A. Elaborar un pequeño script que solicite en un campo de
texto el DNI de un individuo y en otro la letra del mismo y compruebe si los
datos son correctos o no.
"<br><br><button onclick='calculoDNI()'>Calculo letra DNI</button><p id='dni'></p>`)

function calculoDNI() {
    let nif = prompt("Introduce NIF:")
    const letrasDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    document.getElementById('dni').innerHTML = `El DNI es: ${nif}-${letrasDNI[(nif%23)]}`
}