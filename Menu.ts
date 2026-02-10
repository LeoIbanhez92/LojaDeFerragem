import { Input } from "./src/util/Input";

export function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                 O Rei do Vergalhão");
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
                console.log("\nCriar Produto\n");

                break;
            case 2:
                console.log("\nListar todos os Produtos\n");

                break;
            case 3:
                console.log("\nConsultar dados do Produto - por Id\n");

                break;
            case 4:
                console.log("\nAtualizar dados do Produto\n");

                break;
            case 5:
                console.log("\nApagar um Produto\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

function sobre(): void {
    console.log("\n***************************************************");
    console.log("Projeto Desenvolvido por: Leonardo Ibanhez ");
    console.log("\nE-Mail: Leonardohibanhez@gmail.com");
    console.log("\ngithub.com/LeoIbanhez92");
    console.log("*****************************************************");
}

main();