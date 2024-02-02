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
    const { nome, genero, idade } = req.body;
    const ave : Ave = new Ave('Harpia', 12, 'Masculino', 30);
    const mamifero : Mamifero = new Mamifero('Cachorro', 'Rottweiler', 'Masculino', 8);
    const reptil : Reptil = new Reptil('Jacaré', 'Córneas', 'Masculino', 42);
    res.json(['Essa é a nova ave do zoológico!', ave]);
})

server.listen(port, () => {
    console.log(`Servidor está executando no endereço http://localhost:${port}`);
})