import {Planta} from '../entidades/planta';
import {Document, model, Schema, SchemaTypes, Model } from 'mongoose';

interface plantaDocument extends Planta, Document {}

export const plantaModel: Model<plantaDocument> = model<plantaDocument>('Planta', new Schema({
    sensor: {type: SchemaTypes.ObjectId, ref: 'Sensor'},
    umidade: {type: Number, required: true, min:0 , max: 100},
}))
