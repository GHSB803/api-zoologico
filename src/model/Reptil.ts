import { Animal } from "./Animal";

export class Reptil extends Animal {
    private escamas: string;
    constructor(_nome: string, _idade: number, _genero: string, _escamas: string) {
        super(_nome, _idade, _genero)
        this.escamas = _escamas;
    }

    /**
     * Retorna o tipo de escamas do réptil
     *
     * @returns _idade : de escamas do réptil
     */
    public getEscamas(): string {
        return this.escamas;
    }

    /**
     * Retorna o tipo de escamas do réptil
     *
     * @param _escamas : tipo de escamas do réptil
     */
    public setEnvergadura(_escamas: string): void {
        this.escamas = _escamas;
    }
}