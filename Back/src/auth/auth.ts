import passport from 'passport';
import passportlocal from 'passport-local';
import passportjwt from 'passport-jwt';
import {UserRepositorio} from '../persistencia/userRepositorio';

const LocalStrategy = passportlocal.Strategy;

passport.use('signup', new LocalStrategy((user,passwd,done) => {
    //cadastrar o usuário na base de dados
    console.log(`Cadastrado: ${user}`);
    return done(undefined, {username:user,password:passwd});
}));

passport.use('login', new LocalStrategy(async (user,passwd,done) => {
    //buscar usuário na base de dados
    let usuario = await UserRepositorio.buscarPorNome(user);
    //console.log(usuario!.password);
    //validar usuário e senha
    if (usuario !== null ){
        if (usuario.username !== user) {
            return done(null, false, {message:'Usuario ou senha invalido'});

        }
        if (passwd !== usuario.password) {
            return done(null, false, {message:'Usuario ou senha invalido'});
        }
        return done(undefined, {username:user,password:passwd});
    }else{
        return done(null, false, {message:'Usuário não encontrado'});
    }
}));

const JwtStrategy = passportjwt.Strategy;

passport.use(new JwtStrategy({
    secretOrKey: 'minhachavesecreta',
    //indicar onde está o token enviado pelo cliente
    //neste caso está no cabeçalho como Authorization: Bearer token 
    jwtFromRequest: passportjwt.ExtractJwt.fromAuthHeaderAsBearerToken()
    }, (token,done) => {
        try {
            return done(undefined, token.user);
        } catch (error) {
            done(error);
        }
    })
);