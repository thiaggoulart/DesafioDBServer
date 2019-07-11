import {Sensor} from "../entidades/sensor";

import { Document, model, Schema, SchemaTypes, Model } from "mongoose";

interface SensorDocument extends Sensor, Document {}

export const SensorModel: Model<SensorDocument> = model<SensorDocument>('Sensor', new Schema({
    planta: { type: String, required: true }
}));