// setTimeout(() => {
//     console.log('Hola mundo');
// }, 1000);

const getUsuarioByID = ({id, nombre}, callback) => {
    const user = {
        id,
        nombre
    }

    console.log('Procesando datos');

    setTimeout(() => {
        callback()
    }, 2000);
}

let nuevoUsuario = {
    id: 10,
    nombre: 'Rodrigo'
}

getUsuarioByID(nuevoUsuario, () => {
    console.log(nuevoUsuario.id);
    console.log(nuevoUsuario.nombre.toUpperCase());
});