import leia = require("readline-sync");

const numeros: Set<number> = new Set<number>();
let localizar






for( let i = 0; i <10;i++){
    let leitura = leia.questionInt("Digite um numero : ");
    numeros.add(leitura);
}

localizar=leia.questionInt("Digite o numero que voce deseja encontrar: ");

if(numeros.has(localizar)){
    console.log(`O numero ${localizar} foi localizado`);
}else{
    console.log(`O numero ${localizar} nao foi encontrado!`);
}