import {connect, Mongoose} from 'mongoose';
import app from './app';

(async() => {
    try{
        const url = ('mongodb://localhost:27017/projeto'); 
        await connect(url, { useNewUrlParser: true});

        app.listen(app.get('port'));
        

    }    catch(error){
        console.log(`Erro: ${error}`);
    }
})();