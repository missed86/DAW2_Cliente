/*

Crea una función que reciba un parámetro, un DNI, y devuelva la letra del mismo. Si el DNI
pasado tiene algún error devolverá “DNI Erróneo”.

*/

const obtenerLetraDNI = (dni) => {
  if (isNaN(dni) || dni.toString().length !== 8) return "DNI Erróneo";
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  const numeroDNI = dni % 23;
  const letra = letras[numeroDNI];
  return letra;
}

console.log(obtenerLetraDNI(31708886))