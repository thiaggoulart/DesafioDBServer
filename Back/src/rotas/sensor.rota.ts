import { Router } from 'express';
import * as controlador from '../controladores/sensor.controlador';

export const router = Router();
export const path = '/sensor';

router.post('', controlador.postSensor);
router.get('', controlador.getSensores);
router.get('/:id', controlador.getSensorId);
router.get('/tipo/:tipo', controlador.getSensorTipo);
router.post('/id=:id/status=:status', controlador.updateSensor);
