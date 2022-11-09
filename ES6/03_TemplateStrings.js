function Tres(){
    // *** Plantillas literales ``
    /* Evita control de escape para ' y ", permite saltos de línea y tags
    Permite expresiones dentro de la cadena con ${}
    */

    let num1 = 10,
        num2 = 0;
    console.log(`${num1} entre ${num2} resulta: ${num1 / num2}`);
    // 10 entre 0 resulta: Infinity 

    console.log(`<h1>Cabecera1</h2>
    <h2>Cabecera2</h2>`);/// Salto de línea

    console.log(`Hola O'Donnel\nQué tal?`); // Hola O'Donnel
                                            // Qué tal?
}