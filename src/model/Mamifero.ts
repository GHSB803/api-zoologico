import { Animal } from "./Animal";

export class Mamifero extends Animal{
    private raca: string;
    constructor(_nome: string, _raca: string, _genero: string, _idade: number,){
        super(_nome, _idade, _genero);
        this.raca = _raca
    }
    
    public getRaca(): string {
        return this.raca;
    }

    public setRaca(_raca: string): void {
        this.raca = _raca;
    }
}