import { crearArchivo } from './helpers/multiplicar.js';

console.clear();

const base = 6;

crearArchivo( base )
    .then(nombreArchivo => console.log(nombreArchivo, ' ha sido creado'))
    .catch(err => console.log(err));