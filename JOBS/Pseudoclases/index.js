/*

Crear una pseudoclase llamada Instituto que permita crear objetos de este tipo. Se deben utilizar funciones constructoras y la propiedad prototype. Para instanciar la clase, se debe utilizar la referencia Instituto(codigo,nombre,grupos), donde grupos es un array simple que contiene las pseudoclases de todos los grupos que tiene el instituto. Por cada grupo es necesario almacenar descripción y número de alumnos.

Crear, además, los métodos necesarios para:

- Conocer el código del instituto, devuelve la cadena (miInstituto.getCodigo())
- Conocer el total de alumnos del centro, devuelve el total (miInstituto.totalAlumnos())
- Añadir un grupo nuevo al Instituto (miInstituto.nuevoGrupo(nombre,numAlumnos))

*/

class Instituto {
  codigo
  nombre
  grupos = []
  constructor(codigo,nombre,grupos) {

  }
  getCodigo() {
    return this.codigo
  }
  totalAlumnos() {
    
  }
}
