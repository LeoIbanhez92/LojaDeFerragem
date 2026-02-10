import { Produto } from "./Produto";

export class Eletrica extends Produto{

    //! ATRIBUTOS DA CLASSE

    private _eletrica: string;


    //? MÉTODO CONSTRUTOR

    constructor(id: number, nome: string, tipo: number, preco: number, eletrica: string) {
        super(id, nome, tipo, preco)

        this._eletrica = eletrica;
    }

    //* MÉTODOS GET E SET
    
    public get eletrica(): string {
        return this._eletrica;
    }

    
    public set eletrica(value: string) {
        this._eletrica = value;
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`Nome do Produto Elétrico: ${this._eletrica}`);

    }


}