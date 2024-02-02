class Reptil extends Animal {
    private escamas: number;
    constructor(_escamas: number, _nome: string, _idade: number, _genero: string) {
        super(_nome, _idade, _genero);
        this.escamas = _escamas;
    }

    public getEscamas(): number {
        return this.escamas;
    }

    public setEnvergadura(_envergadura: number): void {
        this.escamas = _envergadura;
    }
}