import validator from "./validator.js";

const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
  const numeroTarjeta = document.getElementById("numeroTarjeta").value;
  console.log(validator.isValid(numeroTarjeta));
});

const btnAbrirForm = document.getElementById("btnAbrirForm");
const formulario = document.getElementById("formularioTarjeta");
btnAbrirForm.addEventListener("click", function () {
  btnAbrirForm.classList.toggle("active");
  formulario.classList.toggle("active");
});

console.log(validator);
