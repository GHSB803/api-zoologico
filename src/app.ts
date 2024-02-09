import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Mamifero } from './model/Mamifero';
import { Reptil } from './model/Reptil';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

const port = 3000;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave : Ave = new Ave('Paraguaio', 12, 'Macho', 60);
    let reptil : Reptil = new Reptil('Jacaré', 42, 'Macho', 'Córneas');
    let mamifero : Mamifero = new Mamifero('Urso', 8, 'Fêmea', 'Pardo');
    res.json([ave, reptil, mamifero]);
})

server.post('/ave', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    let ave : Ave = new Ave(nome, idade, genero, envergadura);
    res.json(["A nova ave do zoológico é:", ave]);
})

server.post('/reptil', (req, res) => {
    const { nome, idade, genero, escamas } = req.body;
    let reptil: Reptil = new Reptil(nome, idade, genero, escamas);
    res.json(["A novo Reptíl do zoológico é:", reptil]);
})

server.post('/mamifero', (req, res) => {
    const { nome, idade, genero, raca} = req.body;
    let mamifero : Mamifero = new Mamifero(nome, idade, genero, raca);
    res.json(["A novo mamífero do zoológico é:", mamifero]);
})

server.post('/habitat', (req, res)=>{
    const { nome, lista_animais } = req.body;
    const habitat : Habitat = new Habitat(nome, lista_animais);
    console.log(habitat);
    res.status(200).json('Habitat criado')
})

server.post('/atracao', (req, res)=>{
    const { nome, habitat } = req.body;
    const atracao : Atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criado')
})

server.post('/zoologico', (req, res)=>{
    const { nome, atracao } = req.body;
    const zoo : Zoologico = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoologico criado')
})

server.listen(port, () => {
    console.log(`Servidor está executando no endereço http://localhost:${port}`);
})