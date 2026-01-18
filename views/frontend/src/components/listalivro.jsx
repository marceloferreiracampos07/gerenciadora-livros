import { useState, useEffect } from "react";

function ListarLivros() {
    const [livros, setLivros] = useState([]);

    const buscarLivros = async () => {
        try {
            const resposta = await fetch('http://localhost:3000/livros');
            const dados = await resposta.json();
            setLivros(dados);
        } catch (error) {
            console.error('Erro ao buscar os dados da biblioteca', error);
        }
    };

    useEffect(() => {
        buscarLivros();
    }, []);

    return (
        <div>
            <h2>Livros cadastrados</h2>
            <ul>
                {livros.map((livro) => (
                    <li key={livro._id}>
                        <strong>{livro.titulo}</strong> - {livro.autor} (ISBN: {livro.isbn})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarLivros;