import {Request, Response, NextFunction} from 'express';
import {SensorRepositorio} from '../persistencia/sensorRepositorio';

export async function postSensor(req: Request, res: Response, next: NextFunction){
    try {
        const sensor = await SensorRepositorio.criaSensor(req.body);
        res.json(sensor);
    }
    catch (error) {
        next(error);
    }
}

export async function updateSensor(req: Request, res: Response, next: NextFunction){
    try {
      console.log(`chegou`)
        const id = req.params.id;
        const status = req.params.status;
        const sensor = await SensorRepositorio.setStatus(id,status);
        console.log(sensor)
        res.json(sensor);
    }
    catch (error) {
        next(error);
    }
}


export async function getSensores(req: Request, res: Response, next: NextFunction) {
    try{
        const sensores = await SensorRepositorio.buscaTodos();
        res.json(sensores);
    } catch (error) {
        next(error);
    }
}

export async function getSensorId(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        const sensor = await SensorRepositorio.buscaSensorId(id);
        if(sensor !== null){
            res.json(sensor);
        } else {
            res.status(404).end();
        }
    } catch (error) {
        next(error);
    }
}

export async function getSensorTipo(req: Request, res: Response, next: NextFunction) {
    try {
        const tipo = req.params.tipo;
        const sensores = await SensorRepositorio.buscarPorTipo(tipo);
        res.json(sensores);
    } catch (error) {
        next(error);
    }
}
