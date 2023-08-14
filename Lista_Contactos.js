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

agregarContacto(1, "Ana", "García", 95874453, [{ ciudad: "Tegucigalpa", direccion: "las vegas" }]);
agregarContacto(2, "Luis", "Mendez", 54987165, [{ ciudad: "San Pedro Sula", direccion: "col.las colinas"}]);
agregarContacto(3, "Marta", "Lopez", 95785635, [{ ciudad: "La Ceiba", direccion: "col.la palma"}]);


borrarContacto("María Mendez");
borrarContacto("Juan Gamez");
imprimirContactos();


//Ajuste de funciones agregar contacto y eliminar contacto
function agregarContacto(id, nombres, apellidos, telefono, ubicaciones)  {
  const nuevoContacto = {
    id,
    nombres,
    apellidos,
    telefono,
    ubicaciones: {
      ciudad: "",
      direccion: "",
    },
  };
  contactos.push(nuevoContacto);

}

// Función para eliminar un contacto por su ID
function eliminarContacto(id) {
  const index = contactos.findIndex(contacto => contacto.id === id);
  if (index !== -1) {
    contactos.splice(index, 1);
  }
}

eliminarContacto(2);
console.log(contactos);