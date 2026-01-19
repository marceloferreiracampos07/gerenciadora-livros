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

    const excluir = async (id) => {
        if (window.confirm("Deseja realmente excluir este livro?")) {
            try {
                const resposta = await fetch(`http://localhost:3000/livros/${id}`, {
                    method: 'DELETE'
                });

                if (resposta.ok) {
                    setLivros(livros.filter(livro => livro._id !== id));
                } else {
                    alert("Erro ao excluir o livro no servidor.");
                }
            } catch (error) {
                console.error('Erro ao deletar:', error);
            }
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
                    <li key={livro._id} style={{ marginBottom: '10px' }}>
                        <strong>{livro.titulo}</strong> - {livro.autor} (ISBN: {livro.isbn})
                        <button 
                            onClick={() => excluir(livro._id)} 
                            className="btn-excluir" 
                            style={{ marginLeft: '10px' }}
                        >
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListarLivros;