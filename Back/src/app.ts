
import express from 'express';
import {path as pathSensor, router as routerSensor} from './rotas/sensor.rota';
import {path as pathPlantas, router as routerPlantas} from './rotas/planta.rota';

const app = express();
const port = '3000';
app.use(pathSensor, routerSensor);
app.use(pathPlantas, routerPlantas);

export default app;