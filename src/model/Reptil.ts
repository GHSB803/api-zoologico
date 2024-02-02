import { Animal } from "./Animal";

export class Reptil extends Animal {
    private escamas: string;
    constructor(_nome: string, _escamas: string, _genero: string, _idade: number) {
        super(_nome, _idade, _genero);
        this.escamas = _escamas;
    }

    public getEscamas(): string {
        return this.escamas;
    }

    public setEnvergadura(_escamas: string): void {
        this.escamas = _escamas;
    }
}