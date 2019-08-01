import express from 'express';
import {path as pathSensor, router as routerSensor} from './rotas/sensor.rota';
import {path as pathPlantas, router as routerPlantas} from './rotas/planta.rota';
import {path as pathAuth, router as routerAuth } from './rotas/auth.rotas';
import passport from 'passport';
import bodyParser from 'body-parser';
import './auth/auth';

import cors from 'cors';


const app = express();
const port = '3000';

app.use(cors());
app.set('port',port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(passport.initialize());
app.use(pathSensor, routerSensor);
app.use(pathPlantas, routerPlantas);
app.use(pathAuth, routerAuth);


export default app;


