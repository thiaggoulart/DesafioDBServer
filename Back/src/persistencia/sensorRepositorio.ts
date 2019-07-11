import {SensorModel} from './sensorModel';
import{Sensor} from '../entidades/sensor';

export class SensorRepositorio{
    static async criaSensor(sensor: Sensor): Promise<Sensor>{
        let novoSensor = await SensorModel.create(sensor);
        return novoSensor.save();
    }
    static async buscaSensorId(id: string): Promise<Sensor|null>{
        return SensorModel.findById(id).exec();
    }
    static async buscarPorTipo(tipo: string): Promise<Sensor[]>{
        return SensorModel.where('tipo').equals(tipo).exec();
    }

    static async buscaTodos(): Promise<Sensor[]> {
        return SensorModel.find().exec();
    }
}