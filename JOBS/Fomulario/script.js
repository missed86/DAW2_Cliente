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
    "comentario",
  ];
  for (elem of required) {
    const value = formData[elem];
    console.log(value);
    if (value.trim() == "") {
      console.log("error");
      document.querySelector(`*[name='${elem}']`).classList.add("error");
    } else {
      document.querySelector(`*[name='${elem}']`).classList.remove("error");
    }
  }
}
const regex = {
  email: RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
  ),
  telefono: RegExp("[0-9]{9}"),
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
	if (regex.email.test(email.value.trim())) {
		email.classList.remove("error");
	} else {
		email.classList.add("error");
	}
}
