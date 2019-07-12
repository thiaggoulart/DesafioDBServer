import {Request, Response, NextFunction} from 'express';
import {plantaRepositorio} from '../persistencia/plantaRepositorio';
import { SensorRepositorio } from '../persistencia/sensorRepositorio';

export async function postPlanta(req: Request, res: Response, next: NextFunction){
    try {
        const sensor = await SensorRepositorio.buscaSensorId(req.body.sensor);
        if(sensor !== null){
            const planta = await plantaRepositorio.criaPlanta({umidade: req.body.valorLeitura, sensor: sensor});

            switch (sensor.tipo){
                case 'morango':
                    if(planta.umidade > 80){
                        res.send(`Muita umidade no sensor ${sensor}`);
                    }
                    else if(planta.umidade < 60){
                        res.send(`Pouca umidade no sensor ${sensor}`);
                    }
                break;

                case 'violeta':
                    if(planta.umidade > 80){
                        res.send(`Muita umidade no sensor ${sensor}`);
                    }
                    else if(planta.umidade < 40){
                        res.send(`Pouca umidade no sensor ${sensor}`);
                    }
                break;

                case 'lavanda':
                    if(planta.umidade > 30){
                        res.send(`Muita umidade no sensor ${sensor}`);
                    }
                    else if(planta.umidade < 20){
                        res.send(`Pouca umidade no sensor ${sensor}`);
                    }
                break;

                case 'cacto':
                    if(planta.umidade > 50){
                        res.send(`Muita umidade no sensor ${sensor}`);
                    }
                    else if(planta.umidade < 20){
                        res.send(`Pouca umidade no sensor ${sensor}`);
                    }
                break;

                case 'cogumelo':
                    if(planta.umidade > 90){
                        res.send(`Muita umidade no sensor ${sensor}`);
                    }
                    else  if(planta.umidade < 80){
                        res.send(`Pouca umidade no sensor ${sensor}`);
                    }
                break;
            }

            res.json(planta);
        } else {
            res.status(404).end();
        }
    }
    catch (error) {
        next(error);
    }
}

export async function getTodasPlantas(req: Request, res: Response, next: NextFunction){
    try{
        const plantas = await plantaRepositorio.buscaTodos();
        res.json(plantas);
    }catch (error){
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