/*

Pasar de decimal a binario.

*/

const decimal2binario = (num) => (num > 0) ? decimal2binario(parseInt(num/2)) + (num % 2) : ""

console.log(decimal2binario(25))
console.log(decimal2binario(23))
console.log(decimal2binario(21))
console.log(decimal2binario(8))