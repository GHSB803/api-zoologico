import { Animal } from "./Animal";

export class Atracao{
   
    private nome_atracao: string;
    private lista_atracao: Array<Animal>;

    constructor( _nome_atracao: string, _lista_atracao: Array<Animal>){
        this.nome_atracao = _nome_atracao
        this.lista_atracao = _lista_atracao
    }
    /**
     * Retorna o nome do habitat
     *
     * @returns nome_habitat : nome do habitat
     */
    public getNomeHabitat(): string {
        return this.nome_atracao;
    }

    /**
     * Atribui o parâmetro ao atributo nome_habitat
     *
     * @param _nome_habitat : nome do habitat
     */
    public setNomeHabitat(_nome_atracao: string): void {
        this.nome_atracao = _nome_atracao;
    }

    /**
     * Retorna a lista de animais do habitat
     *
     * @returns lista_animal : lista de animais do habitat
     */
    public getListaAtracao(): Array<Animal> {
        return this.lista_atracao;
    }

    /**
     * Atribui o parâmetro à lista de animais do habitat
     *
     * @param _lista_animal : lista de animais do habitat
     */
    public setListaAtracao(_lista_animal: Array<Animal>): void {
        this.lista_atracao = _lista_animal;
    }
}