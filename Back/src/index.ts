import {connect, Mongoose} from 'mongoose';
import {plantaModel} from './persistencia/plantaModel';
import {SensorModel} from './persistencia/sensorModel';
import {Sensor} from './entidades/sensor'
import app from './app';
import { SensorRepositorio } from './persistencia/sensorRepositorio';
import { plantaRepositorio } from './persistencia/plantaRepositorio';
import { Planta } from './entidades/planta';

(async() => {
    try{
        const url = ('mongodb://localhost:27017/projeto');
        await connect(url, { useNewUrlParser: true});

        app.listen(app.get('port'));

        //Insere Sensor
        /*await SensorRepositorio.criaSensor({
            tipo: 'Morango'
        });*/

        //Insere Planta
        /*let sensorID = await SensorRepositorio.criaSensor({
            tipo: 'Banana'
        });

        await plantaRepositorio.criaPlanta({
            sensor: sensorID,
            umidade: 300
        });*/

    }    catch(error){
        console.log(`Erro: ${error}`);
    }
})();

async function main() {

    try {
        //console.log('Criar Sensor...');
        //morangos: 60%  a 80%
        //cactos: 20%  a 50%
        //cogumelos: 80%  a 90%
        // violetas:  40%  a  80%
        // lavanda:  20%  a  30%.

        // let s1: Sensor = {tipo: 'morangos'}
        // let sensor1 = await SensorRepositorio.criaSensor(s1);
        // let p1: Planta = {sensor: sensor1, umidade: 70 };
        // let planta1 = await plantaRepositorio.criaPlanta(p1);
        //
        // let s2: Sensor = {tipo: 'cactos'}
        // let sensor2 = await SensorRepositorio.criaSensor(s2);
        // let p2: Planta = {sensor: sensor2, umidade: 20 };
        // let planta2 = await plantaRepositorio.criaPlanta(p2);
        //
        // let s3: Sensor = {tipo: 'cogumelos'}
        // let sensor3 = await SensorRepositorio.criaSensor(s3);
        // let p3: Planta = {sensor: sensor3, umidade: 88 };
        // let planta3 = await plantaRepositorio.criaPlanta(p3);
        //
        // let s4: Sensor = {tipo: 'violetas'}
        // let sensor4 = await SensorRepositorio.criaSensor(s4);
        // let p4: Planta = {sensor: sensor4, umidade: 50 };
        // let planta4 = await plantaRepositorio.criaPlanta(p4);
        //
        // let s5: Sensor = {tipo: 'lavanda'}
        // let sensor5 = await SensorRepositorio.criaSensor(s5);
        // let p5: Planta = {sensor: sensor5, umidade: 10 };
        // let planta5 = await plantaRepositorio.criaPlanta(p5);
        //
        let planta = await plantaRepositorio.buscaTodos();

        planta.forEach(async function(p,i){
          let sensor = await plantaRepositorio.buscaPorSensorId();
          switch (sensor[i].tipo){
            case 'morangos':
              if(p.umidade < 60 || p.umidade > 80)
              console.log('Morango: Vai dar um M...');
            break;

            case 'cactos':
              if(p.umidade < 20 || p.umidade > 50)
                console.log('Cactos: Vai dar um M...');
            break;

            case 'lavanda':
              if(p.umidade < 20 || p.umidade > 30)
                console.log('Lavanda: Vai dar um M...');
            break;

        }
        });

     } catch (erro) {
         console.log(`Erro: ${erro.message}`);
    }
}

main();
