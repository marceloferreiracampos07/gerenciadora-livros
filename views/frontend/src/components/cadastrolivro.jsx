import { useState } from "react";

function FormCadastro() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [isbn, setIsbn] = useState('');

    const enviarDados = async (e) => {
        e.preventDefault();

        if (isbn.length !== 13) {
            alert("O ISBN deve ter exatamente 13 dígitos!");
            return;
        }

        const novolivro = { titulo, autor, isbn };

        try {
            const resposta = await fetch('http://localhost:3000/livros', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novolivro)
            });

            if (resposta.ok) {
                alert("Novo livro cadastrado!");
                setTitulo('');
                setAutor('');
                setIsbn('');
            } else {
                const erroDados = await resposta.json();
                alert("Erro ao cadastrar: " + (erroDados.error || "Erro desconhecido"));
            }
        } catch (error) {
            console.error("Erro ao cadastrar", error);
            alert("Erro de conexão com o servidor.");
        }
    };

    const handleIsbnChange = (e) => {
        const valor = e.target.value.replace(/\D/g, "");
        if (valor.length <= 13) {
            setIsbn(valor);
        }
    };

    return (
        <form onSubmit={enviarDados}>
            <input 
                type="text" 
                placeholder="Título" 
                value={titulo} 
                onChange={(e) => setTitulo(e.target.value)} 
                required
            />
            <input 
                type="text" 
                placeholder="Autor" 
                value={autor} 
                onChange={(e) => setAutor(e.target.value)} 
                required
            />
            <input 
                type="text" 
                placeholder="ISBN (13 dígitos)" 
                value={isbn} 
                onChange={handleIsbnChange} 
                required
            />
            <button type="submit">Cadastrar Livro</button>
            
            <small style={{ color: isbn.length === 13 ? 'green' : 'orange' }}>
                {isbn.length}/13 dígitos
            </small>
        </form>
    );
}

export default FormCadastro;