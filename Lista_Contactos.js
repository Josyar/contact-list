// Presentamos una Lista de contactos con datos de los empleados que nos entregaron 
let contactos = ["Juan Gamez", "María Mendez", "Pedro Gonzales"];

// se crea una Función para añadir un nuevo contacto a la lista para los nuevos empleados
function agregarContacto(nombreApellido) {
  contactos.push(nombreApellido);
}

// añadimos una nueva Función para borrar un contacto existente de la lista de empleados que han dejado la empresa 
// en ella buscamos el nombre de el contacto y se elimina de la lista
function borrarContacto(nombreApellido) {
  const index = contactos.indexOf(nombreApellido);
  if (index !== -1) {
    contactos.splice(index, 1);
    console.log(nombreApellido,"contacto eliminado");
  } else {
    console.log(nombreApellido,"contacto no existe");
  }
}

// creamos una funcion que imprime los contactos de las personal que laboran actualmente en la compañia
function imprimirContactos() {
  console.log("Lista de contactos:");
  contactos.forEach((contacto) => {
    console.log(contacto);
    console.log("____________");
  });
}

// imprimir
imprimirContactos();


// ingresamos la informacion de los contactos que se agregaran a la lista con datos mas especificos
agregarContacto(1, "Ana", "García", 95874453, [{ ciudad: "Tegucigalpa", direccion: "las vegas" }]);
agregarContacto(2, "Luis", "Mendez", 54987165, [{ ciudad: "San Pedro Sula", direccion: "col.las colinas"}]);
agregarContacto(3, "Marta", "Lopez", 95785635, [{ ciudad: "La Ceiba", direccion: "col.la palma"}]);


borrarContacto("María Mendez");
borrarContacto("Juan Gamez");
imprimirContactos();


//Ajuste de funciones agregar contacto y tener mayor control sobre la informacion de ellos
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

// Función para eliminar un contacto por su ID o numero unico de el contacto para mantener un control de la informacion 
function eliminarContacto(id) {
  const index = contactos.findIndex(contacto => contacto.id === id);
  if (index !== -1) {
    contactos.splice(index, 1);
  }
}

eliminarContacto(2);
console.log(contactos);

// añadimos una funcion para actualizar la informacion de los contactos atravez de su ID y tener todo correctamente 
function actualizarContacto(id, nuevosDatos) {
  const index = contactos.findIndex(contacto => contacto.id === id);
  
  if (index !== -1) {
    // Combinamos los datos existentes con los nuevos datos usando Object.assign
    const contactoActualizado = Object.assign({}, contactos[index], nuevosDatos);
    contactos[index] = contactoActualizado;
  }
}

// Actualizar el teléfono de un contacto con ID 1
actualizarContacto(1, { telefono: "49895689" });

imprimirContactos();
