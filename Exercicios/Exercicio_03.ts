import leia = require("readline-sync");


const numeros: Set<number> = new Set<number>();


for ( let i=0; i<10; i++){
    
    numeros.add(leia.questionInt("Digite um valor inteiro: "));
      
}
// transforma o Set em array 
const numerosOrdenados = Array.from(numeros); 
//ordena em ordem crescente
numerosOrdenados.sort((a, b) => a - b);


console.table(numeros);

console.table(numerosOrdenados);