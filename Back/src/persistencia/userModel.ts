import {user} from "../entidades/usuario";

import { Document, model, Schema, SchemaTypes, Model } from "mongoose";
import { ObjectID } from "bson";

interface UserDocument extends user, Document {}

export const UserModel: Model<UserDocument> = model<UserDocument>('user', new Schema({
    username: { type: String, required: true },
    password:{type: String, required: true},
    email: {type: String, required: true }
}), 'user');
