import leia = require("readline-sync");

//const numeros: Array<number> = new Array<number>();


//let numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numeros =[];
let localizar;


for( let i = 0; i <10;i++){
    let leitura = leia.questionInt("Digite um numero : ");
    numeros.push(leitura);
}

localizar=leia.questionInt("Digite o numero que voce deseja encontrar: ");

if(numeros.includes(localizar)){
    console.log(`O numero está localizado na Posição`, numeros.indexOf(localizar));
}else{
    console.log(`O numero ${localizar} nao foi encontrado!`);
}