/*

Crea una función que genere número entero aleatorio entre min y max, que serán pasados
como parámetros. Por defecto min = 1 y max = 100.

*/

const randomInt = (min=1,max=100) => Math.floor(Math.random()*(max-min+1)+min)

console.log(randomInt())
console.log(randomInt(50,100))
console.log(randomInt(1,1000))
console.log(randomInt(200,300))