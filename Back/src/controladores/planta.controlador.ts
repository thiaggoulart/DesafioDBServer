import {Request, Response, NextFunction} from 'express';
import {plantaRepositorio} from '../persistencia/plantaRepositorio';
import { json } from 'body-parser';

export async function postPlanta(req: Request, res: Response, next: NextFunction){
    try {
        const planta = await plantaRepositorio.criaPlanta(req.body);
        res.json(planta);
    }catch(erro){
        next(erro);
    }
}

export async function getSensorId(req: Request, res: Response, next: NextFunction){
    try{
        const id = req.params.id;
        const planta = await plantaRepositorio.buscaSensorId(id);
        if(id !== null){
            const {umidade, tipo} = planta;
            res.json({umidade, tipo});
        } else {
            res.status(404).end();
        }
    }catch(erro){
        next(erro);
    }
}

export async function getPlantaTipo(req: Request, res: Response, next: NextFunction){
    try{
        const planta = req.params.tipo;
        const tipos = await plantaRepositorio.buscaTipo(planta);
        res.json(tipos);
    }catch(erro){
        next(erro);
    }
}