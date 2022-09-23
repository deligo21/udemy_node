import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type:'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar',
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muesra la tabla de multiplicar en consola',
    })
    .check((argv, options) =>{
        if (isNaN(argv.b)) {
            throw('La base tiene que ser un numero');
        }
        return true;
    })
    .argv;

export{ argv };