# 📚 Sistema de Gerenciamento de Biblioteca

Um sistema completo de gerenciamento de livros desenvolvido com a stack MERN (MongoDB, Express, React e Node.js). O projeto permite gerenciar o acervo de uma biblioteca de forma digital, organizada e com validações de dados em tempo real.

## 🚀 Funcionalidades

* **Cadastro de Livros**: Registro de Título, Autor e ISBN.
* **Validação de ISBN**: Input inteligente que aceita apenas números e trava ao atingir exatamente 13 dígitos.
* **Listagem Dinâmica**: Visualização em tempo real de todos os livros salvos no banco de dados.
* **Operações CRUD**: Sistema preparado para Criar, Listar, Atualizar e Remover registros.
* **Interface Centralizada**: Design moderno com tema escuro e layout centralizado via CSS Flexbox.

## 🏗️ Arquitetura MVC

O projeto segue o padrão de arquitetura **MVC (Model-View-Controller)** para garantir uma separação clara de responsabilidades:

* **Model**: Localizado em `/models`, define o `LivroSchema` e as regras de dados com Mongoose.
* **View**: Localizada em `/views/frontend`, desenvolvida em React.js para interação com o usuário.
* **Controller**: Localizado em `/controllers`, processa a lógica de negócio e as requisições.
* **Routes**: Localizado em `/routes`, define os caminhos da API e os conecta aos métodos do Controller.

## 🛠️ Tecnologias Utilizadas

### Front-end
* **React.js (Vite)**: Biblioteca para construção da interface de usuário.
* **Fetch API**: Utilizada para comunicação assíncrona com o servidor (nativo do JS).
* **CSS3**: Estilização com Flexbox para garantir alinhamento centralizado.

### Back-end
* **Node.js & Express**: Servidor e framework para a API REST.
* **Mongoose (ODM)**: Modelagem e conexão com o banco de dados MongoDB.
* **CORS**: Liberação de acesso para o consumo da API pelo Front-end.
* **Dotenv**: Proteção de dados sensíveis e variáveis de ambiente.

## 🔧 Como rodar o projeto

### Pré-requisitos
* Node.js instalado (v16 ou superior)
* MongoDB Compass ou Atlas configurado e rodando

### 1. Clonar o repositório
```bash
git clone [https://github.com/SEU_USUARIO/NOME_DO_REPO.git](https://github.com/SEU_USUARIO/NOME_DO_REPO.git)
cd seu-repositorio

2. Configurar o Back-end
Na pasta raiz do projeto:

Bash
# Instalar as dependências do servidor
npm install

# Iniciar o servidor Node.js
npm start

3. Configurar o Front-end
Abra um segundo terminal e navegue até a pasta do frontend:

Bash
cd views/frontend

# Instalar as dependências do React
npm install

# Iniciar o ambiente de desenvolvimento (Vite)
npm run dev
```bash
git clone [

📝 Estrutura de Pastas
Plaintext
├── controllers/     # Lógica de controle (Livrocontroller.js)
├── models/          # Schemas do Mongoose (livrosmodel.js)
├── routes/          # Definição das rotas da API (livrosroutes.js)
├── views/
│   └── frontend/    # Projeto React (Interface)
├── app.js           # Arquivo principal do servidor Express
├── .gitignore       # Arquivos ignorados pelo Git (node_modules, .env)
└── README.md        # Documentação do projeto


Desenvolvido por [Marcelo ferreira campos junior]





https://github.com/SEU_USUARIO/NOME_DO_REPO.git](https://github.com/SEU_USUARIO/NOME_DO_REPO.git)
cd seu-repositorio
