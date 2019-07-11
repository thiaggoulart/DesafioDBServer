
import express from 'express';
import {path as pathSensor, router as routerSensor} from './rotas/sensor.rota';
import {path as pathPlantas, router as routerPlantas} from './rotas/planta.rota';
import bodyParser from 'body-parser'

const app = express();
const port = '3000';

app.set('port',3000)
app.use(bodyParser.json())
app.use(pathSensor, routerSensor);
app.use(pathPlantas, routerPlantas);

export default app;