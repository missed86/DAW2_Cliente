/*

Mediante la dirección web:
 https://apis.datos.gob.ar/georef/api/provincias
 Se nos retorna un objeto JSON con la información de los nombres de las provincias de
Argentina, su id etc.
 Recuperar mediante el API fetch los datos y mostrarlos.
 La estructura del archivo JSON es:
 {
 "provincias": [
 {
 "nombre": "Santiago del Estero",
 "id": "86",
 "centroide": {
 "lat": -27.782412,
 "lon": -63.252387
 }
 },
 {
 "nombre": "Córdoba",
 "id": "23",
 "centroide": {
 "lat": -25.72323412,
 "lon": -63.2523322387
 }
 }
 //Aquí las otras provincial
 ],
 "cantidad": 23,
 }

*/
fetch("https://apis.datos.gob.ar/georef/api/provincias")
  .then((response) => response.json())
  .then((data) => {
    data.provincias.forEach((e) => {
      console.log(e.id, e.nombre);
    });
  })
  .catch((error) => {
    console.warn = error;
  });


