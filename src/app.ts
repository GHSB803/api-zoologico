import express from 'express';
import cors from 'cors';

const port = 3000;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    console.log('Recebi sua requisição');
    res.send({mensagem: 'Olá Mundo!'});
})

server.listen(port, () => {
    console.log(`Servidor está executando no endereço http://localhost.${port}`);
})