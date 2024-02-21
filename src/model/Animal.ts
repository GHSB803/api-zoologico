export class Animal {
    private nome: string;
    private idade: number;
    private genero: string;

    constructor(_nome: string, _idade: number, _genero: string) {
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }
    /**
         * Retorna o nome do animal
         *
         * @returns _nome_zoologico : nome do animal
         */
    public getNome(): string {
        return this.nome;
    }

    /**
         * Atribui o nome do animal
         *
         * @param _nome : nome do animal
         */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    /**
     * Retorna a idade do animal
     *
     * @returns _idade : idade do animal
     */
    public getIdade(): number {
        return this.idade;
    }

    /**
     * Atribui a idade do animal
     *
     * @param _idade : idade do animal
     */
    public setIdade(_idade: number): void {
        this.idade = _idade;
    }

    /**
     * Retorna o genêro do animal
     *
     * @returns _genero : gênero do animal
     */
    public getGenero(): string {
        return this.genero;
    }
    /**
         * Atribui o genêro do animal
         *
         * @param _genero : gênero do animal
         */
    public setGenero(_genero: string): void {
        this.genero = _genero;
    }
}