import leia = require("readline-sync");

const numeros: Array<number> = new Array<number>();

numeros.push(5);
numeros.push(1,5,7,9);
numeros.push(leia.questionInt("digite um numero: "));
//console.table(numeros);

for(let numero of numeros){
    console.log(numero);
}

console.log("O numero 5 existe?", numeros.includes(5));// verifica se o elemento existe
console.log("quando indicie do numero 7?", numeros.indexOf(7));// verifica o index do elemento

// deletar elemento 
numeros.splice(numeros.indexOf(7),2);

console.table(numeros);