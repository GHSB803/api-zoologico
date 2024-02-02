import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';

const port = 3000;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave : Ave = new Ave('Paraguaio', 12, 'Masculino', 30);
    let mamifero : Mamifero = new Mamifero('Cachorro', 'Rottweiler', 'Masculino', 8);
    let reptil : Reptil = new Reptil('Jacaré', 'Córneas', 'Masculino', 42);
    res.json([ave, reptil, mamifero]);
})

server.post('/ave', (req, res) => {
    const { nome, genero, idade, envergadura } = req.body;
    let ave : Ave = new Ave(nome, idade, genero, envergadura);
    res.json(["A nova ave do zoológico é:", ave]);
})

server.listen(port, () => {
    console.log(`Servidor está executando no endereço http://localhost:${port}`);
})