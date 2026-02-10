import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    

    private listaProdutos = new Array<Produto>();
    public id: number = 0;


    //?MÉTODOS DO CRUD

    procurarPorId(numero: number): void {
        const produtoBusca = this.buscarNoArray(numero);

        if(produtoBusca){
            produtoBusca.visualizar();
        }else
            console.log("\nProduto ID não encontrado!");
    }
    

    listarTodos(): void {
        for (let Produto of this.listaProdutos) {
            Produto.visualizar();
        }
    }


    cadastrar(Produto: Produto): void {
        this.listaProdutos.push(Produto);
        console.log(`\nO Produto ${Produto.nome} foi cadastrado com sucesso!`);
    }

    atualizar(produto: Produto): void {
        const buscarProduto = this.buscarNoArray(produto.id);

        if(buscarProduto){
            const indice = this.listaProdutos.indexOf(buscarProduto);
            this.listaProdutos[indice] = produto;
            console.log("\nProduto Atualizado com Sucesso!");
        }else
            console.log("\nProduto não Encontrado!");
    }

    deletar(numero: number): void {
        const buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(`\nO Produto de ID ${numero} foi Deletado com Sucesso!`, );
        } else
            console.log("\nProduto não Encontrado!");


    }

    //?MÉTODO AUXILIAR

    public gerarNumero(): number {
        return ++this.id;
    }

    public buscarNoArray(numero: number): Produto | null {
        for (let Produto of this.listaProdutos) {
            if (Produto.id === numero) {
                return Produto;
            }
        }
        return null;
    }

    public gerarId(): number {
        return ++this.id;
    }

}