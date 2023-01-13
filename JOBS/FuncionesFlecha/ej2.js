/*

Definir una función de flecha que reciba un valor entero y retorne otro valor entero
aleatorio comprendido entre 1 y el valor que llega como parámetro. Asignar dicha función de
flecha a una constante para permitir llamarla en sucesivas ocasiones.

*/

const randomizer = (max) => Math.floor(Math.random()*max+1)

console.log(randomizer(10))