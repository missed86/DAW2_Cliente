class Suma {
  valor1;
  valor2;
  cargaValor1(num) {
    this.valor1 = num;
  }
  cargaValor2(num) {
    this.valor2 = num;
  }
  retornarResultado() {
    return this.valor1+this.valor2
  }
}

let s = new Suma();
s.cargaValor1(10);
s.cargaValor2(20);
console.log("La suma de los dos valores es: " + s.retornarResultado());
