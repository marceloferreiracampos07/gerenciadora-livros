require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const livrosRoutes = require('./routes/livrosrouter.js');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;
app.use(cors())

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(' Conectado ao MongoDB (Biblioteca) com sucesso!');
        
        
        app.use('/livros', livrosRoutes);

        app.listen(port, () => {
            console.log(` Servidor rodando em http://localhost:${port}/livros`);
        });
    })
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));