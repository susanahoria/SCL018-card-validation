const validator = {
  isValid: function (numeroTarjeta) {
    const numeroIngresado = numeroTarjeta;

    const numerosInvertidos = numeroTarjeta.split("").reverse().join("");
    let sumaTotal = 0;
    for (let i = 0; i < numerosInvertidos.length; i++) {
      const numero = numerosInvertidos[i];
      const posicion = i + 1;
      // real posicion 012345678
      // posicion prof 123456789
      if (posicion % 2 === 0) {
        const numeroMultiplicado = numero * 2;
        if (numeroMultiplicado >= 10) {
          const numeroSeparado = numeroMultiplicado.toString().split("");
          const primerNumero = parseInt(numeroSeparado[0]);
          const segundoNumero = parseInt(numeroSeparado[1]);
          const numeroSumado = primerNumero + segundoNumero;
          sumaTotal += numeroSumado;
        } else {
          sumaTotal += numeroMultiplicado;
        }
      } else {
        sumaTotal += parseInt(numero);
      }
    }

    console.log(sumaTotal);
    console.log(numerosInvertidos);
    if (sumaTotal % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  maskify: function () {},
};

export default validator;
