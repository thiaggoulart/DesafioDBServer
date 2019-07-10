import {plantaModel} from './plantaModel';
import {Planta} from '../entidades/planta';

export class plantaRepositorio {
    
    static async criaPlanta(planta:Planta): Promise<Planta> {
        return plantaModel.create(planta);
    }

    static async buscaTipo(tipo: string): Promise<Planta[]> {
        return plantaModel.where('tipo').equals(tipo).populate('tipo', tipo).exec();
    }

    static async buscaSensorId(id: string): Promise<Planta> {
        return plantaModel.where('sensorId').equals(id).populate('sensorId',id).exec();
    }
}
