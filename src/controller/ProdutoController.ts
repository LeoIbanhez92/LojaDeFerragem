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
        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }


    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(`\nO Produto ${produto.nome} foi cadastrado com sucesso!`);
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

    public procurarPorNome(nome: string): void {
        const listaPorNome = this.listaProdutos.filter(produto =>
            produto.nome.toUpperCase().includes(nome.toUpperCase())
        );

        if (listaPorNome.length > 0) {
            listaPorNome.forEach(produto => produto.visualizar());
        } else
            console.log(`\nO produto "${nome}" não foi encontrado!`);

    }

    //?MÉTODO AUXILIAR


    public buscarNoArray(numero: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === numero) {
                return produto;
            }
        }
        return null;
    }

    public gerarId(): number {
        return ++this.id;
    }

}