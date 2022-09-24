import { crearArchivo } from './helpers/multiplicar.js';
import { argv } from "./config/yargs.js";
import colors from 'colors';

console.clear();

crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, ' ha sido creado'))
    .catch(err => console.log(err));


//===============Logica anterior=====================
// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.b);

//Manera primitiva
// const[,,arg3 = 'base=5'] = process.argv;
// const[,base = 5] = arg3.split('=');

// console.log(base);

// const base = 6;