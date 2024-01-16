// Importação de Módulos
const express = require("express");

//Arquivo json usado com uma fonte de dados para as rotas da aplicação.
const produtos = require("./db.json");

// Criação da aplicação
const app = express();

//Configuração do Porta dp Servidor.
const port = process.env.PORT || 3000;

// Rota raiz que vai receber requisicao e respostas
app.get("/", (req, res) => res.status(200).send("API express"));

//Rota de listagem de produtos
app.get("/produtos", (req, res) => res.status(200).json(produtos));

// Rota de detalhes do produto ID
app.get("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const produto = produtos.filter((item) => item.id == id);
  if (produto.length > 0) {
    res.status(200).json(produto);
  } else {
    res.status(200).send('Produto nao encontrado');
  }
});

//Inicio do servidor 
app.listen(port, () => console.log(`server listen on port ${port}`));

