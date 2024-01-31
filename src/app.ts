import express from 'express';
import cors from 'cors';

const port = 3000;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    console.log('Tá chapano zé? Eu disse chamando lá no Isnomnia BUUUUUUUUUUURRRRRRRRRRRROOOOOOOO, da send de novo!!');
    res.send({mensagem: 'EU disse que tão te chamando lá no VSCode!!!!'});
})

server.listen(port, () => {
    console.log(`Servidor está executando no endereço http://localhost.${port}`);
})