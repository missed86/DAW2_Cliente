/*

Hacer una función que muestre la tabla de multiplicar de un número.

*/

const tabla_de_multiplicar = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} =`,i*1)
  }
}
tabla_de_multiplicar(4)