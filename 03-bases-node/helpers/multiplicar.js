import { writeFile, writeFileSync } from 'fs';
import colors from 'colors';

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        let salida = '', consola = '';
        
        for (let i = 1; i <= hasta; i++){
            consola += (`${base} ${colors.red('x')} ${i} ${colors.green('=')} ${base * i}\n`);
            salida += (`${base} x ${i} = ${base * i}\n`);
        }
        
        if (listar) {

            console.log(`Tabla del ${colors.blue(base)}\n`.green);
            console.log(consola);
        }
        
        let nombreArchivo = `tabla-${base}.txt`;

        writeFileSync(`./salida/${nombreArchivo}`, salida, (err) => {
            if (err) throw err;
        });
        
        return nombreArchivo;

    } catch (err) {
        throw err;
    }
}

export { crearArchivo };