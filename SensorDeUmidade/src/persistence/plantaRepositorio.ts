import {plantaModel} from './plantaModel';
import {Planta} from '../entidades/planta';

export class plantaRepositorio {
    
    static async criarPlanta(planta:Planta): Promise<Planta> {
        return plantaModel.create(planta);
    }

    static async buscaTipo(tipo: string): Promise<Planta[]> {
        return plantaModel.where('tipo').equals(tipo).populate('tipo', tipo).exec();
    }
}
