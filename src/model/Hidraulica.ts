import { Produto } from "./Produto";

export class Hidraulica extends Produto{

    //! ATRIBUTOS DA CLASSE

    private _hidraulica: string;


    //? MÉTODO CONSTRUTOR

	constructor(id: number, nome: string, tipo: number, preco: number, hidraulico: string) {
        super(id, nome, tipo, preco)

		this._hidraulica = hidraulico;
	}

    //* MÉTODOS GET E SET
    
	public get hidraulica(): string {
		return this._hidraulica;
	}

    
	public set hidraulica(value: string) {
		this._hidraulica = value;
	}

    public visualizar(): void {
        super.visualizar();
		console.log(`Nome do Produto Hidráulico: ${this._hidraulica}`);

    }


}