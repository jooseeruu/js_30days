function tablaDeMultiplicar() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 10; j >= 1; j--) {
      console.log(i + " * " + j + " = " + i * j);
    }
  }
}
tablaDeMultiplicar();