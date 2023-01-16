/*

Guardar en un array los 20 primeros números pares.

*/

const pares = () => {
  const pares = []
  for (i=1; i<=20; i++) {
    if (i%2 == 0) pares.push(i)
  }
  return pares
}

console.log(pares())