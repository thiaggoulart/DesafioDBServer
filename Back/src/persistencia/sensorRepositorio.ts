import {SensorModel} from './sensorModel';
import{Sensor} from '../entidades/sensor';

export class SensorRepositorio{
    static async criaSensor(sensor: Sensor): Promise<Sensor>{
        return await SensorModel.create(sensor);
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