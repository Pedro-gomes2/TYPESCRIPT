import leia = require("readline-sync");
import Stack = require("./Stack");

const pilha = new Stack<string>(); 
let programa:string = "1";

while(programa !=="0" ){

    console.log("************************************************************");
    
    console.log("1 - Adicionar Livro na pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da pilha");
    console.log("0 - Sair");
    console.log("************************************************************");
    programa = leia.question("Entre com a opcao desejada: ");
    console.log("************************************************************");
    
    switch(programa){
        case "1":
            pilha.push(leia.question("Digite o nome do livro: "));
            console.log("Livro Adicionado");
        break;
        case "2":
            if(pilha.count()>0){
                pilha.printStack();
            }else{
                console.log("A Pilha esta Vazia!!");
            }
        break;
        case "3":
            pilha.pop();
        break;
        case "0":
            console.log("Programa Encerrado");
            programa =="0";
        break;         
    }

}