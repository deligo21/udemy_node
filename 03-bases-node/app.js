import { crearArchivo } from './helpers/multiplicar.js';
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const argv = yargs(hideBin(process.argv)).argv


console.clear();

console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base);

//Manera primitiva
// const[,,arg3 = 'base=5'] = process.argv;
// const[,base = 5] = arg3.split('=');

// console.log(base);

// const base = 6;

// crearArchivo( base )
//     .then(nombreArchivo => console.log(nombreArchivo, ' ha sido creado'))
//     .catch(err => console.log(err));