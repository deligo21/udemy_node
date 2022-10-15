import fs from 'fs';
import axios from "axios";

class Busquedas{
    historial = [];
    dbPath = './db/database.json';
    

    constructor(){
        this.leerDB();
    }

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es',
        }
    }

    get paramsOpenWeather() {
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'units':'metric',
            'lang':'es',
        }
    }
    get historialCapitalizado(){
        
        return this.historial.map(lugar => {
            let palabras = lugar.split(' ');
            palabras = palabras.map(p=> p[0].toUpperCase() + p.substring(1));

            return palabras.join(' ');
        });
    }

    async ciudad (lugar = ''){

        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox,
            });

            const resp = await instance.get();

            return resp.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));
            
            
        } catch (error) {
            
            return [];
        }
        
    }

    async climaLugar (lat, lon) {
        try {
              
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`,
                params: this.paramsOpenWeather,
            });

            const resp = await instance.get();

            const {weather, main} = resp.data;

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
            }


        } catch (error) {
            console.log(error);
        }
    }

    agregarHistorial(lugar =''){

        if (this.historial.includes(lugar.toLocaleLowerCase())){
            return;
        }
        
        //Limitando el historiual solo a 5
        this.historial = this.historial.splice(0,5);

        this.historial.unshift(lugar.toLocaleLowerCase());

        //grabar en db
        this.guardarDB();
    }

    guardarDB(){

        const payload = {
            historial:this.historial,
        }

        fs.writeFileSync(this.dbPath, JSON.stringify(payload))
    }

    leerDB(){

        const archivo = './db/database.json';

        if(!fs.existsSync(archivo)){
            return null;
        }
    
        const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
        const data = JSON.parse(info);
    
        return this.historial = data.historial;
    }
}

export {Busquedas};