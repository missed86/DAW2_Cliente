/*

Haz la siguiente petición:
https://swapi.dev/api/people/
Y recorre el resultado para mostrar una lista con los datos recuperados.

*/

fetch("https://swapi.dev/api/people/")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((e) => {
      console.log(e);
    });
  })
  .catch((error) => {
    console.warn = error;
  });

