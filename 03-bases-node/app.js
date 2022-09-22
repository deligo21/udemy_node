import { crearArchivo } from './helpers/multiplicar.js';

console.clear();

//Manera primitiva
const[,,arg3 = 'base=5'] = process.argv;
const[,base = 5] = arg3.split('=');

console.log(base);

// const base = 6;

crearArchivo( base )
    .then(nombreArchivo => console.log(nombreArchivo, ' ha sido creado'))
    .catch(err => console.log(err));