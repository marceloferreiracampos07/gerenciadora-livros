const mongoose = require("mongoose");

const LivroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true }, 
    isbn: { type: String, unique: true, required: true },
    
    preco: { type: Number, default: 0 }, 
    
    paginas: { type: Number, min: 1 },
    ano: { type: Number },
    categoria: { type: String, enum: ['ficção', 'terror', 'drama'] }, 
    disponivel: { type: Boolean, default: true },
});

module.exports = mongoose.model("Livro", LivroSchema);