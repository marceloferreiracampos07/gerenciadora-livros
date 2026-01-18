const mongoose = require('mongoose');

async function conectarDB() {
    try {
        
        const uri = process.env.MONGO_URI; 
        
        await mongoose.connect(uri);
        
        console.log(' Conectado ao MongoDB ');
    } catch (err) {
        console.error('Erro na conexão com o banco:', err);
        process.exit(1); 
    }
}

module.exports = conectarDB;