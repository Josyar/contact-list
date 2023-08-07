// Lista de contactos con datos predefinidos
let contactos = ["Juan Gamez", "María Mendez", "Pedro Gonzales"];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombreApellido) {
  contactos.push(nombreApellido);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombreApellido) {
  const index = contactos.indexOf(nombreApellido);
  if (index !== -1) {
    contactos.splice(index, 1);
    console.log(nombreApellido,"contacto eliminado");
  } else {
    console.log(nombreApellido,"contacto no existe");
  }
}

// Función para imprimir los contactos presentes en la lista
function imprimirContactos() {
  console.log("Lista de contactos:");
  contactos.forEach((contacto) => {
    console.log(contacto);
    console.log("____________");
  });
}

// imprimir
imprimirContactos();

agregarContacto("Ana García");
agregarContacto("Carlos Ramírez");


borrarContacto("María Mendez");
borrarContacto("Juan Gamez");
imprimirContactos();
