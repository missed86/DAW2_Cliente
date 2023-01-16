/*

Crea una función que genere 100 números aleatorios entre 1 y 1000 que no se repitan y
luego muéstralos por pantalla

*/

const randomUnique = () => {
  const result = []
  while (result.length<100){
    let random = Math.floor(Math.random()*1000+1)
    if (!result.includes(random)) result.push(random)
  }
  return result
}


console.log(randomUnique())