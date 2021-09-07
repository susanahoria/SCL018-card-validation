import validator from "./validator.js";

const boton = document.getElementById("boton");

boton.addEventListener("click", function () {
  const numeroTarjeta = document
    .getElementById("numeroTarjeta")
    .value.replaceAll(" ", "");
  if (numeroTarjeta === "") {
    alert("Ingrese numero tarjeta");
  } else {
    if (validator.isValid(numeroTarjeta) === true) {
      alert("Su tarjeta es valida <3");
    } else {
      alert("Su tarjeta no es valida :(");
    }
  }
  console.log(validator.isValid(numeroTarjeta));
  console.log("Tarjeta enmascarada " + validator.maskify(numeroTarjeta));
});

//para girar boton y para que abra el formulario//
const btnAbrirForm = document.getElementById("btnAbrirForm");
const formulario = document.getElementById("formularioTarjeta");
btnAbrirForm.addEventListener("click", function () {
  btnAbrirForm.classList.toggle("active");
  formulario.classList.toggle("active");
});

const numeroTarjetaInput = document.getElementById("numeroInput");
const nombreTarjetaInput = document.getElementById("nombreInput");
//Input numero de tarjeta//
//la e en function es para recibir el evento
//target.value se accede al valor del input numerotarjeta
formulario.numeroTarjeta.addEventListener("keyup", function (e) {
  let valorInput = e.target.value.trim(); //aqui se guarda el valor ingresado
  formulario.numeroTarjeta.value = valorInput
    .replace(/\D/g, "")
    .replace(/([0-9]{4})/g, "$1 ")
    .trim();

  if (valorInput === "") {
    numeroTarjetaInput.textContent = "#### #### #### ####";
  } else {
    const tarjetaEnmascarada = validator.maskify(
      valorInput.replaceAll(" ", "")
    );
    numeroTarjetaInput.textContent = tarjetaEnmascarada
      .match(/.{1,4}/g)
      .join(" ");
  }
});

formulario.nombreTarjeta.addEventListener("keyup", function (e) {
  let valorInput = e.target.value.trim();
  formulario.nombreTarjeta.value = valorInput.replace(/[0-9]/g, "");

  if (valorInput === "") {
    nombreTarjetaInput.textContent = "##### #####";
  } else {
    nombreTarjetaInput.textContent = valorInput;
  }
});

//console.log(validator);
