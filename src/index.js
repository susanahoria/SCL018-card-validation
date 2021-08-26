import validator from "./validator.js";

const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
  const numeroTarjeta = document.getElementById("numeroTarjeta").value;

  console.log(validator.isValid(numeroTarjeta));
});

//console.log(validator);
