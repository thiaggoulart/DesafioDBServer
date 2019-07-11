import {Request, Response, NextFunction} from 'express';
import {plantaRepositorio} from '../persistencia/plantaRepositorio';
import { SensorRepositorio } from '../persistencia/sensorRepositorio';

export async function postPlanta(req: Request, res: Response, next: NextFunction){
    try {
        console.log('chegou')
        const sensor = await SensorRepositorio.buscaSensorId(req.body.sensor);
        if(sensor !== null){
            const planta = await plantaRepositorio.criaPlanta({umidade: req.body.valorLeitura, sensor: sensor});
            res.json(planta);
        } else {
            res.status(404).end();
        }
    }
    catch (error) {
        next(error);
    }
}

export async function getPlantaSensor(req: Request, res: Response, next: NextFunction) {
    try {
        const sensorId = req.params.sensorId;
        const plantas = await plantaRepositorio.buscaPorSensor(sensorId);
        res.json(plantas);
    } catch (error) {
        next(error);
    }
}