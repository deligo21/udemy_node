import { inquirerMenu, inquirerPausa, leerInput, listarLugares } from "./helpers/inquirer.js"
import { Busquedas } from "./models/busquedas.js";
import dotenv from "dotenv";
dotenv.config({path:'./.env'});


const main = async() => {

    let opt = '';

    const busquedas = new Busquedas();
    

    do {

        opt = await inquirerMenu();

        switch (opt){
            case 1:
                //Mostrar mensaje
                const termino = await leerInput('Ciudad: ');

                //Buscar los lugares
                const lugares  = await busquedas.ciudad(termino);

                //Seleccionar el lugar
                const id = await listarLugares(lugares);

                if (id === '0') continue;
                const lugarSeleccionado = lugares.find(lugar => lugar.id === id);

                // Guardar en DB
                busquedas.agregarHistorial(lugarSeleccionado.nombre);

                //Clima
                const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);

                console.clear();
                console.log('\nInformacion de la ciudad: \n'.yellow);
                console.log('Ciudad:', lugarSeleccionado.nombre.yellow);
                console.log('Lat:', lugarSeleccionado.lat);
                console.log('Lng:', lugarSeleccionado.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Minima:', clima.min);
                console.log('Maxima:', clima.max);
                console.log('Descripcion del clima:', clima.desc.yellow);
                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) =>{
                    const idx = `${i + 1}.`.yellow;
                    console.log(`${idx} ${lugar}`);
                })
                break;
        }

        if (opt !== 0) {
            await inquirerPausa();
        }
    } while (opt !== 0);
}

main();