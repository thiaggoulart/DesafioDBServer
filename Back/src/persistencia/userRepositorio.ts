import {UserModel} from './userModel';
import{user} from '../entidades/usuario';


export class UserRepositorio{    
    static async criaUsuario(_user: user): Promise<user>{
        return await UserModel.create(_user);
    }
    static async listar (): Promise<user []> {
        return await UserModel.find().exec()
    }

    static async buscarPorNome(username: string): Promise<user | null> {
        return await UserModel.findOne().where('username').equals(username).exec();
    }

    static async buscarPorEmail(email: string): Promise<user | null> {
        return await UserModel.findOne().where('email').equals(email).exec()
    }

    static async buscarPorEmailAuth(email: string): Promise<user | null> {
        return await UserModel.findOne().where('email').equals(email).select('+password')
    }
}
