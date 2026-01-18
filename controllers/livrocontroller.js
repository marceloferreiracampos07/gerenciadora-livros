const Livro = require('../models/livrosmodel.js');

class Livrocontroller {
    static async criarlivro(req, res) {
        try {
            const novolivro = await Livro.create(req.body);
            return res.status(201).json({
                message: "Livro criado com sucesso",
                livro: novolivro
            });
        } catch (error) {
            console.error(error);
            return res.status(400).json({ error: error.message });
        }
    }

    static async listarlivros(req, res) {
        try {
            const livros = await Livro.find();
            return res.json(livros);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar os livros' });
        }
    }

    static async buscarlivrobyid(req, res) {
        try {
            const livro = await Livro.findById(req.params.id);
            if (!livro) {
                return res.status(404).json({ error: "Livro não encontrado" });
            }
            return res.status(200).json(livro);
        } catch (error) {
            return res.status(400).json({ error: 'Id inválido ou erro na busca' });
        }
    }

    static async atualizarlivro(req, res) {
        try {
            const livroatualizado = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!livroatualizado) {
                return res.status(404).json({ error: "Livro não encontrado" });
            }
            return res.json(livroatualizado);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async removerlivro(req, res) {
        try {
            const resultado = await Livro.findByIdAndDelete(req.params.id);
            if (!resultado) {
                return res.status(404).json({ error: "Erro ao encontrar livro para deletar" });
            }
            return res.status(200).json({ message: "Livro removido com sucesso" });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

module.exports = Livrocontroller;