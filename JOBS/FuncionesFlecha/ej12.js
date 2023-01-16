/*

Crea una función que devuelva el número PI con dos decimales. Utiliza la variable PI que ya
existe en JavaScript.

*/

const roundPI = (decimals) => Math.PI.toPrecision(decimals+1)

console.log(roundPI(29))