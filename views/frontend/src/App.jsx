import { useState } from 'react'
import './App.css'
import FormCadastro from './components/cadastrolivro'
import ListarLivros from './components/listalivro'

function App() {
  const [abaAtiva, setAbaAtiva] = useState('cadastro')

  return (
    <div className='App'>
      <h1>BIBLIOTECA</h1>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setAbaAtiva('cadastro')}>Cadastrar Livro</button>
        <button onClick={() => setAbaAtiva('lista')}>Ver livros</button>
      </nav>
      <hr />
      <main>
        {abaAtiva === 'cadastro' ? (
          <section>
            <h2>Novo Cadastro</h2>
            <FormCadastro />
          </section>
        ) : (
          <section>
            <h2>Livros no Banco</h2>
            <ListarLivros />
          </section>
        )}
      </main>
    </div>
  )
}

export default App