import {plantaModel} from './plantaModel';
import {Planta} from '../entidades/planta';
import {SensorModel} from './sensorModel'

export class plantaRepositorio {
    
    static async criaPlanta(planta:Planta): Promise<Planta> {
        return plantaModel.create(planta);
    }

    static async buscaPorId(id: string): Promise<Planta|null>{
        return plantaModel.findById(id).exec();
    }

    static async buscaPorSensor(id: string): Promise<Planta[]>{
        return plantaModel.where('sensor').equals(id).populate('sensor', SensorModel).exec();
    }
}
