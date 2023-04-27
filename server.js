const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurando as rotas do servidor
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  res.send('Dados recebidos!');
});

// Iniciando o servidor
const PORT = 5555;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
