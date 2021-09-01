import validator from "./validator.js";

const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
  const numeroTarjeta = document.getElementById("numeroTarjeta").value;
  console.log(validator.isValid(numeroTarjeta));
});

//para girar boton y para que abra el formulario//
const btnAbrirForm = document.getElementById("btnAbrirForm");
const formulario = document.getElementById("formularioTarjeta");
btnAbrirForm.addEventListener("click", function () {
  btnAbrirForm.classList.toggle("active");
  formulario.classList.toggle("active");
});

//Input numero de tarjeta//
//la e en function es para recibir el evento
//target.value se accede al valor del input numerotarjeta
formulario.numeroTarjeta.addEventListener("keyup", function (e) {
  let valorInput = e.target.value; //aqui se guarda el valor ingresado
  formulario.numeroTarjeta.value = valorInput.replace();
  //para pasar una expresion regular
});

console.log(validator);
