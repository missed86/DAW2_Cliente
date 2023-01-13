/*

Leer un Array de enteros y sacar la media.

*/
const enteros = [10, 9, 3, 8];


const media = (array) =>
array.reduce((total, num) => total + num) / array.lenght;


console.log(media(enteros));
