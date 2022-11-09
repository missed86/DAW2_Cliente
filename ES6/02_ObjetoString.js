function Dos(){
    // *** Funciones nuevas del objeto STRING *** 
    //Evita código e indexOf no booleano

    var cadena = "Esto es Cuba !!";

    console.log(cadena.startsWith('E')); //true
    console.log(cadena.endsWith('!')); // true
    console.log(cadena.includes('C')); // true
    console.log(cadena.includes('Cuba')); // true
    console.log(cadena.startsWith('C',8));  // true

    console.log("Pepe".repeat(3)); //PepePepePepe
}