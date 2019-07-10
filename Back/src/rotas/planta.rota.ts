import {Router} from 'express';
import * as controlador from '../controladores/planta.controlador';

export const router = Router();
export const path = '/planta';

router.post('', controlador.postPlanta);
router.get('/:id', controlador.getSensorId);
router.get('/tipo/:tipo', controlador.getPlantaTipo);