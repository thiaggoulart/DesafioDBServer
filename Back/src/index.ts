import {connect, Mongoose} from 'mongoose';

(async() => {
    try{
        const url = ('mongodb://localhost:27017/plantas');
 
        await connect(url, { useNewUrlParser: true});
    }
    catch(error){
        console.log(`Erro: ${error}`);
    }
})();