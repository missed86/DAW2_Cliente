/*

Mediante la dirección web:
https://freegeoip.app/json/
freegeoip.app nos proporciona una API de geolocalización IP. Utiliza una base de datos de
direcciones IP asociadas a ciudades junto con otra información relevante como zona horaria,
latitud y longitud.
La estructura del archivo JSON es:
{
 "ip":"186.123.122.56",
 "country_code":"AR",
 "country_name":"Argentina",
 "region_code":"X",
 "region_name":"Córdoba",
 "city":"Córdoba",
 "zip_code":"5000",
 "time_zone":"America/Argentina/Cordoba",
 "latitude":-31.4015,
 "longitude":-64.1803,
 "metro_code":0}
Mostrar en la página el nombre del país, ciudad, código postal e ip

*/

fetch("https://freegeoip.app/json/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.warn = error;
  });