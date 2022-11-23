const root = document.getElementById('root')

// Crear elementos
const p = document.createElement('p')
p.textContent = 'Esto está rellenado desde JS'
root.appendChild(p)


// Borrar elementos
const borrame = document.createElement('p')
borrame.textContent = 'borrame'
root.appendChild(borrame)

root.removeChild(borrame)

//Pruebas con bucles
// for (let i = 65; i < 91; i++) {
//   const char = String.fromCharCode(i)
//   const btn = document.createElement('button')
//   btn.textContent = char
//   root.appendChild(btn)
// }

//Fragmentos de nodos
const fragment = document.createDocumentFragment()
for (let i = 65; i < 91; i++) {
  const char = String.fromCharCode(i)
  const btn = document.createElement('button')
  btn.textContent = char
  btn.id = char
  btn.className = 'char'
  btn.classList.add('char',char)
  btn.dataset.char = char
  fragment.appendChild(btn)
}

root.appendChild(fragment)

removeChildrenNodes(root)

/**
 * @param {HTMLElement} element
 */

function removeChildrenNodes(element) {
  while (element.firstElementChild) {
    element.removeChild(element.firstElementChild)
  }
}