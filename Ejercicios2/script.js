const ejercicio = document.getElementById('ejercicio');

//Ejercicio 1
function infoString() {
    const ejercicio = document.getElementById('ejercicio');

    if (textValue == textValue.toUpperCase()) {
        ejercicio.innerHTML = "Todos las letras son mayúsculas.";
    } else if (textValue == textValue.toLowerCase()) {
        ejercicio.innerHTML = "Todos las letras son minúsculas.";
    } else {
        ejercicio.innerHTML = "Hay mayúsculas y minúsculas.";
    }
}
// Ejercicio 2
function parOimpar() {
    const textValue = Number(document.getElementById('infoInput').value);

    ejercicio.innerHTML = (textValue%2==0) ? "Es par" : "Es impar";
}
// Ejercicio 3
function palindromo() {
    let textValue = document.getElementById('infoInput').value.toLowerCase();

    const tildes = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','ü':'u'};
    
    // console.log(normalizedText)
    let text = ""   
    textValue.split('').forEach((e) => {
        if (tildes[e] !== undefined){
            text += tildes[e]
        }
        else text+=e
    })
    let normalizedText = text.match(/[a-z||ñ]/g);
    if (normalizedText.join('') == normalizedText.reverse().join('')) {
        ejercicio.innerHTML = "es un palindromo"
    } else{
        ejercicio.innerHTML = "no es un palindromo"
    }
}