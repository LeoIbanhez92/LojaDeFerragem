import { ProdutoController } from "./src/controller/ProdutoController";
import { Input } from "./src/util/Input";
import { Hidraulica } from "./src/model/Hidraulica";
import { Eletrrica } from "./src/model/Eletrica";
import { formatarMoeda } from "./src/util/Currency";

const produto = new ProdutoController();
const tipoProduto = ['Hidraulica', 'Eletrica'];

export function main() {

    criarProdutosTeste();

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                 O Rei do Vergalhão                  ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastra Produto                     ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por ID                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");

        opcao = Input.questionInt("");

        if (opcao === 0) {
            console.log("\nO Rei do Vergalhão - Material de Construção!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\nCadastrar Produto\n");
                cadastrarProduto();

                keyPress();
                break;
            case 2:
                console.log("\nListar todos os Produtos\n");
                listarTodosProdutos();

                keyPress();
                break;
            case 3:
                console.log("\nConsultar dados do Produto - por Id\n");
                consultarProdutoPorId();

                keyPress();
                break;
            case 4:
                console.log("\nAtualizar dados do Produto\n");
                atualizarProduto();

                keyPress();
                break;
            case 5:
                console.log("\nApagar um Produto\n");
                deletarProduto();

                keyPress();
                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

//! OPÇÃO 1: CADASTRAR
function cadastrarProduto() {
    console.log("Digite a marca do produto:");
    const nome = Input.question("");

    const tipo = Input.keyInSelect(tipoProduto, "Selecione o tipo:", { cancel: false }) + 1;

    console.log("Digite o preço do Produto:");
    const preco = Input.questionFloat("");

    if (tipo === 1) {
        console.log("Digite o nome do material (ex: Cano, Registro de Parede, Torneira...): ");
        const hidraulico = Input.question("");
        
        produto.cadastrar(new Hidraulica(produto.gerarId(), nome, tipo, preco, hidraulico));
    } else {
        console.log("Digite o nome do material (ex: Tomada, Fio, Disjuntor...): ");
        const eletrica = Input.question("");
        
        produto.cadastrar(new Eletrrica(produto.gerarId(), nome, tipo, preco, eletrica));
    }
}

//! OPÇÃO 2: LISTAR TODOS OS PRODUTOS

function listarTodosProdutos() {
    produto.listarTodos();
}


function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    Input.prompt();
}

//! OPÇÃO 3: BUSCAR PRODUTO POR ID
function consultarProdutoPorId() {
    const id = Input.questionInt("Digite o ID: ");
    produto.procurarPorId(id);
}

//! OPÇÃO 4: ATUALIZAR DADOS DO PRODUTO
function atualizarProduto(): void {
    console.log("Digite o ID do Produto: ");
    const id = Input.questionInt("");

    const produtoBusca = produto.buscarNoArray(id);

    if (produtoBusca !== null) {
        let nome: string = produtoBusca.nome;
        const tipo: number = produtoBusca.tipo;
        let preco: number = produtoBusca.preco;

        console.log(`\nNome atual: ${nome}`);
        nome = Input.question("Digite o (Novo) nome da Marca: ", { defaultInput: nome });

        console.log(`\nPreço atual: ${formatarMoeda(preco)}`);
        preco = Input.questionFloat("Digite o novo preço: ", { defaultInput: preco.toString() });

        switch (tipo) {
            case 1: {
                let hidraulico: string = (produtoBusca as Hidraulica).hidraulico;
                console.log(`Informação atual: ${hidraulico}`);
                hidraulico = Input.question("Digite o (Novo) nome do material: ", { defaultInput: hidraulico });
                produto.atualizar(new Hidraulica(id, nome, tipo, preco, hidraulico));
                break;
            }
            case 2: {
                let eletrica: string = (produtoBusca as Eletrrica).eletrica;
                console.log(`Informação atual: ${eletrica}`);
                eletrica = Input.question("Digite o (Novo) nome do material: ", { defaultInput: eletrica });
                produto.atualizar(new Eletrrica(id, nome, tipo, preco, eletrica));
                break;
            }
        }
    } else {
        console.log(`\nO produto com ID ${id} não foi encontrado!`);
    }
}

//! OPÇÃO 5: DELETAR PRODUTO
function deletarProduto() {
    const id = Input.questionInt("Digite o ID para deletar: ");
    const encontrado = produto.buscarNoArray(id);
    if (encontrado) {
        encontrado.visualizar();
        if (Input.keyInYNStrict("Confirmar exclusão?")) {
            produto.deletar(id);
        }
    } else {
        console.log("Produto não encontrado.");
    }
}

//TODOS Função com os dados da pessoa desenvolvedora 

function sobre(): void {
    console.log("\n***************************************************");
    console.log("Projeto Desenvolvido por: Leonardo Ibanhez ");
    console.log("\nE-Mail: Leonardohibanhez@gmail.com");
    console.log("\ngithub.com/LeoIbanhez92");
    console.log("*****************************************************");
}

function criarProdutosTeste(): void {
    //? Ordem: id, marca(nome), tipo, preço, item(especificação)

    produto.cadastrar(new Hidraulica(produto.gerarId(), "Tigre", 1, 85.90, "Misturadoura"));
    produto.cadastrar(new Hidraulica(produto.gerarId(), "Amanco", 1, 2.50, "Registro de parede"));
    
    produto.cadastrar(new Eletrrica(produto.gerarId(), "Sil", 2, 189.00, "Disjuntor 10A"));
    produto.cadastrar(new Eletrrica(produto.gerarId(), "Soprano", 2, 15.20, "Tomada 20A"));
}

main();