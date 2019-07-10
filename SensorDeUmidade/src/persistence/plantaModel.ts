import {Planta} from '../entidades/planta';
import {Document, model, Schema, SchemaTypes, Model } from 'mongoose';

interface plantaDocument extends Planta, Document {}

export const plantaModel: Model<plantaDocument> = model<plantaDocument>('Planta', new Schema({
    sensorId: {type: Number, required: true},
    tipo: {type: String, required: true},
    umidade: {type: Number, required: true},
}))