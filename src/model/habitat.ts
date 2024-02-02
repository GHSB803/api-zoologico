import { Animal } from "./Animal";

export class Habitat extends Animal{
    private habitat: string;
    constructor(_nome: string, _habitat: string, _genero: string, _idade: number,){
        super(_nome, _idade, _genero);
        this.habitat = _habitat;
    }

    public getHabitat(): string {
        return this.habitat;
    }

    public setRaca(_habitat: string): void {
        this.habitat = _habitat;
    }
}