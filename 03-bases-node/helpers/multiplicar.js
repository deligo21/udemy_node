import { writeFile, writeFileSync } from 'fs';

const crearArchivo = async(base = 5, listar = false) => {

    try {
        let salida = '';
        
        for (let i = 1; i < 11; i++){
            salida += (`${base} x ${i} = ${base * i}\n`);
        }
        
        if (listar) {
            
            console.log(`Tabla del ${base}\n`);
            console.log(salida);
        }
        
        let nombreArchivo = `tabla-${base}.txt`;

        writeFileSync(nombreArchivo, salida, (err) => {
            if (err) throw err;
        });
        
        return nombreArchivo;

    } catch (err) {
        throw err;
    }
}

export { crearArchivo };