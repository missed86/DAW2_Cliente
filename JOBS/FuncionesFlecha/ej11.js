/*

Hacer los primeros 10 dígitos de serie Fibonacci

*/

const fibonacci = (count) => {
  const result = [0,1]
  for (i = 0; i < count-2; i++) {
    result.push(result[result.length-1]+result[result.length-2])
  }
  return result
};

console.log(fibonacci(10))