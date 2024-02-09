import { Animal } from "./Animal";

export class Ave extends Animal {
    private envergadura: number;
    constructor(_nome: string, _idade: number, _genero: string, _envergadura: number) {
        super(_nome, _idade, _genero)
        this.envergadura = _envergadura;
    }

    /**
     * Retorna a envergadura da ave
     *
     * @returns _idade : envergadura da ave
     */
    public getEnvergadura(): number {
        return this.envergadura;
    }
    /**
         * Atribui a envergadura da ave
         *
         * @param _envergadura : envergadura da ave
         */
    public setEnvergadura(_envergadura: number): void {
        this.envergadura = _envergadura;
    }
}