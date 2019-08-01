import {plantaModel} from './persistencia/plantaModel';
import {SensorModel} from './persistencia/sensorModel';
import {Sensor} from './entidades/sensor'
import app from './app';
import { SensorRepositorio } from './persistencia/sensorRepositorio';
import { plantaRepositorio } from './persistencia/plantaRepositorio';
import { Planta } from './entidades/planta';
import { connect } from 'mongoose';
import {user} from './entidades/usuario';
import {UserRepositorio} from './persistencia/userRepositorio';

(async() => {
    try{
        const url = ('mongodb+srv://sensores:'+ 
        process.env.MONGO_ATLAS_PW +
        '@projeto-yan8z.mongodb.net/estufa?retryWrites=true&w=majority');

        try {
            const cliente = await connect(url, { useNewUrlParser: true });
     
            app.listen(app.get('port'));        
            
          } catch (erro) {
            console.log(`Erro: ${erro.message}`);
          }       
        console.log('Rodando o Back dos guri...');
        //let user1: user = {username:'Renan Alves', password:'renan123', email:'renanbmx123@gmail.com'};
        //let newuser = await UserRepositorio.criaUsuario(user1);
        // let s1: Sensor = {tipo: 'morangos',status:'umidade ok'}
        // let sensor1 = await SensorRepositorio.criaSensor(s1);
        // let p1: Planta = {sensor: sensor1, umidade: 70 };
        // let planta1 = await plantaRepositorio.criaPlanta(p1);
        
        // let s2: Sensor = {tipo: 'cactos',status:'umidade ok'}
        // let sensor2 = await SensorRepositorio.criaSensor(s2);
        // let p2: Planta = {sensor: sensor2, umidade: 20 };
        // let planta2 = await plantaRepositorio.criaPlanta(p2);
        
        // let s3: Sensor = {tipo: 'cogumelos',status:'umidade baixa'}
        // let sensor3 = await SensorRepositorio.criaSensor(s3);
        // let p3: Planta = {sensor: sensor3, umidade: 70 };
        // let planta3 = await plantaRepositorio.criaPlanta(p3);
        
        // let s4: Sensor = {tipo: 'violetas',status:'umidade ok'}
        // let sensor4 = await SensorRepositorio.criaSensor(s4);
        // let p4: Planta = {sensor: sensor4, umidade: 50 };
        // let planta4 = await plantaRepositorio.criaPlanta(p4);
        
        // let s5: Sensor = {tipo: 'lavanda',status:'umidade alta'}
        // let sensor5 = await SensorRepositorio.criaSensor(s5);
        // let p5: Planta = {sensor: sensor5, umidade: 50 };
        // let planta5 = await plantaRepositorio.criaPlanta(p5);
        

    }    catch(error){
        console.log(`Erro: ${error}`);
    }
})();
