const mongoose = require('mongoose');
const url = ('mongodb://localhost:27017/plantas');

class Database {
  constructor() {
    this.getInstance();
  }
  
  getInstance() {
     mongoose.connect(url, { useNewUrlParser: true })
       .then(() => {
         console.log('Conectado com sucesso!')
       })
       .catch(error => {
         console.error(`Erro ao tentar se conectar: ${error.message}`)
       })
  }
}