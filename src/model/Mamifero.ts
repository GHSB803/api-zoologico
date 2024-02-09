import { Animal } from "./Animal";

export class Mamifero extends Animal{
    private raca: string;
    constructor(_nome: string, _idade: number, _genero: string,  _raca: string){
        super(_nome, _idade, _genero)
        this.raca = _raca
    }
    /**
     * Retorna a raça do mamífero
     *
     * @returns _idade : raça do mamífero
     */
    public getRaca(): string {
        return this.raca;
    }

    /**
     * Atribui a raça do mamífero
     *
     * @param _raca : raça do mamífero
     */
    public setRaca(_raca: string): void {
        this.raca = _raca;
    }
}