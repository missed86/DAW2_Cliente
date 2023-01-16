/*

Crea una función que reciba 2 parámetros, precio e IVA, y devuelva el precio con IVA
incluido. Si no recibe el IVA, aplicará el 21 por ciento por defecto.

*/

const calcularPrecio = (precio, iva = 21) => precio * ((iva / 100) +1)

console.log(calcularPrecio(499))