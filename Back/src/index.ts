import {connect} from 'mongoose';
import {SensorRepositorio} from './persistencia/sensorRepositorio'
import {plantaRepositorio} from './persistencia/plantaRepositorio';
import app from './app';

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
        let sensorID = await SensorRepositorio.criaSensor({
            tipo: 'Violeta'
        });

        await plantaRepositorio.criaPlanta({
            sensor: sensorID,
            umidade: 300
        });

    }    catch(error){
        console.log(`Erro: ${error}`);
    }
})();
