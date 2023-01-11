const botonEnviar = document.getElementById("enviar");

function getFormData() {
  const formTags = document.querySelectorAll("#formulario *");
  let formData = {};
  for (elem of formTags) {
    if (elem.name !== undefined && elem.name !== "") {
      formData[elem.name] = elem.value;
    }
  }
  return formData;
}

function validacion(formData) {
  // Comprobar requeridos
  const required = [
    "nombre",
    "apellido1",
    "apellido2",
    "telefono",
    "e-mail",
    "contraseña",
    "contraseña2",
    "comentario",
  ];
  for (campo of required) {
    const value = formData[campo];
    // console.log(value);
    const element = document.querySelector(`*[name='${campo}']`);
    if (value.trim() == "") {
      // console.log("error");
      element.classList.add("error");
      addError(element, "Campo obligatorio");
    } else {
      element.classList.remove("error");
      addError(element, "");
    }
  }
  validarContraseña();
  validarEmail();
  nombreCompleto.forEach((input) => {
    validarNombre(input);
  });
}
const regex = {
  email: RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  ),
  telefono: RegExp("[0-9]{9}"),
  nombre: RegExp("^[A-ZÁÉÍÓÚÄËÏÖÜÑ][a-záéíóúäëïöüñ]{1,}"),
  pass: RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
  ),
};

//Formatear teléfono
const telefono = document.getElementById("telefono");
telefono.addEventListener("keyup", (e) => formatearTelefono(e));
telefono.addEventListener("change", (e) => formatearTelefono(e));

function formatearTelefono(e) {
  {
    if (e.key != "Backspace") {
      const numero = e.target.value.replace(/\D/g, "").replaceAll(" ", "");

      array = numero.split("");

      if (array.length >= 3) {
        array.splice(3, 0, " ");
      }
      if (array.length >= 6) {
        array.splice(6, 0, " ");
      }
      if (array.length >= 9) {
        array.splice(9, 0, " ");
      }
      formateado = array.join("");

      e.target.value = formateado;
    }
  }
}

//Validar email

const email = document.getElementById("email");
email.addEventListener("change", validarEmail);
email.addEventListener("keyup", validarEmail);

function validarEmail() {
  if (email.value.trim() != "") {
    if (regex.email.test(email.value.trim())) {
      email.classList.remove("error");
      addError(email, "");
    } else {
      email.classList.add("error");
      addError(email, "Formato incorrecto");
    }
  }
}

const nombreCompleto = [
  document.getElementById("nombre"),
  document.getElementById("apellido1"),
  document.getElementById("apellido2"),
];

// nombreCompleto.forEach((input) => {
//   input.addEventListener("keyup", (e) => {
//     validarNombre(input);
//   });
// });

function validarNombre(e) {
  if (e.value.trim() != "") {
    if (regex.nombre.test(e.value.trim())) {
      e.classList.remove("error");
      addError(e, "");
    } else {
      e.classList.add("error");
      addError(e, "Formato incorrecto, empieza por una Mayúscula");
    }
  }
}

const pass = document.getElementById("contraseña");
const pass2 = document.getElementById("contraseña2");
function validarContraseña() {
  console.log(pass.value, regex.pass.test(pass.value));
  if (pass.value.trim() != "" || pass2.value.trim() != "") {
    if (pass.value == pass2.value) {
      if (regex.pass.test(pass.value)) {
        pass.classList.remove("error");
        pass2.classList.remove("error");
        addError(pass, "");
        addError(pass2, "");
      } else {
        pass.classList.add("error");
        pass2.classList.add("error");
        addError(
          pass2,
          "La contraseña debe contener al menos una mayúscula, un numero y un carácter especial, y tener al menos 8 caratéres"
        );
      }
    } else {
      pass.classList.add("error");
      pass2.classList.add("error");
      addError(pass2, "Las contraseñas deben coincidir");
    }
  }
}

function addError(element, msg = "") {
  // console.log(element, msg);
  const errorElement = element.parentNode.querySelector("* ~ .error-msg");
  errorElement.innerHTML = " " + msg;
}
