import {connect, Mongoose} from 'mongoose';
import {plantaModel} from './persistencia/plantaModel';
import {SensorModel} from './persistencia/sensorModel';
import {SensorRepositorio} from './persistencia/sensorRepositorio'
import {plantaRepositorio} from './persistencia/plantaRepositorio';
import {Sensor} from './entidades/sensor'
import app from './app';

(async() => {
    try{
        const url = ('mongodb://localhost:27017/projeto');
        await connect(url, { useNewUrlParser: true});

        app.listen(app.get('port'));


    }    catch(error){
        console.log(`Erro: ${error}`);
    }
})();

async function main() {

    try {
        console.log('Criar Sensor...');
        let sns: Sensor = {tipo: 'banana'}
        let sensor1 = await SensorRepositorio.criaSensor(sns);
        console.log(sensor1);

     } catch (erro) {
         console.log(`Erro: ${erro.message}`);
    }
}

main();
