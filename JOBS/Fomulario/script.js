
function getFormData() {
  const formTags = document.querySelectorAll('#formulario *')
  let formData = {}
  for (elem of formTags) {
    if (elem.name !== undefined && elem.name !== "") {
      formData[elem.name] = elem.value
    }
  }
  return formData
}

function validacion(formData) {
  const required = ['nombre', 'apellido1', 'apellido2', 'telefono', 'e-mail', 'contraseña', 'comentario']
  for (elem of required) {
    const value = formData[elem]
    console.log(value)
    if (value.trim() == "") {
      console.log("error")
      document.querySelector(`*[name='${elem}']`).classList.add('error')
    } else {
      document.querySelector(`*[name='${elem}']`).classList.remove('error')
    }
  }
}