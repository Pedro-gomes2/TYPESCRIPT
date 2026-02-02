import leia = require("readline-sync");
import Queue = require("./Queue");

// VARIAVEIS E CONSTANTES
//=======================================\\
const fila = new Queue<string>(); 
let programa: string = "1";
//========================================\\
while (programa !== "0") {

    console.log("*******************************");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("*******************************");

    programa = leia.question("Entre com a opcao desejada: ");

    switch (programa){
        case "1":
            
            fila.enqueue(leia.question("digite um nome: "));
            console.log("Cliente Adicionado!!");
            
        break;
         case "2" :
            if(fila.count()>0){
                fila.printQueue();
            }else{
                console.log("A fila está vazia ");
                
            }
                    
        break;
        case "3":
             console.log("Cliente foi Chamado!!");
            fila.dequeue();

        break;
        case "0":
            console.log("Programa Encerrado");
            programa =="0";

    }
  
    
       
    
}
