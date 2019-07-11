import { Router } from 'express';
import * as controlador from '../controladores/planta.controlador';

export const router = Router();
export const path = '/planta';

router.post('', controlador.postRegistro);
router.get('/sensor/:sensorId', controlador.getPlantaSensor);