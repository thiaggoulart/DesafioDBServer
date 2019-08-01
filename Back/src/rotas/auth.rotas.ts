import {Router} from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import {user} from '../entidades/usuario';
import {UserRepositorio} from '../persistencia/userRepositorio';

export const router = Router();
export const path = '/';


const generateToken = (params = {}) => {
    return jwt.sign({ params }, 'chavesegreta', {
        expiresIn: 120
    })
}


router.post('/signup', passport.authenticate('signup', {session:false}),async (req,res,next) => {
    const {username,password,email} = req.body;
    const emailExist = await UserRepositorio.buscarPorEmail(email);
    let newUser:user;
    try{
        
        if(!emailExist){
            newUser = {
                username: username,
                email: email,
                password: password 
            };
        
            console.log(newUser);
            await UserRepositorio.criaUsuario(newUser);
            res.send("Usuário cadastrado")
        }else{
            res.send("E-mail já cadastrado. ")
        }
    }catch(error){
        return next(error);
    }
    
    
});


router.post('/login', (req,res,next) => {
    passport.authenticate('login', (err,user,info) => {
        //console.log('ai pai para!!!');
        console.log(user);
        // const { body: { _user } } = req;
        try
        {
            if (err || !user) {
                console.log('Nao tem pao velho');
                return res.json('Usuario nao encontrado');
                //return next(err);
            }
            req.logIn(user, {session:false}, (err) => {
                if (err) {
                    return next(err);
                }
                //construir o token com informação não sensíveis
                //assinar o token
                const token = jwt.sign({user:user.username}, 'minhachavesecreta');
                //retornar o token
                return res.json({token});
            });
        }
        catch (error) {
            return next(error);
        }
    })(req,res,next);
}); 