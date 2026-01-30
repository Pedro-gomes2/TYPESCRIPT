import leia = require("readline-sync");

const cores: Array<string> = new Array<string>();

for (let i=0; i< 5;i++){

    cores.push(leia.question("Digite uma cor: "));
  
}
console.table(cores);
cores.sort();
console.table(cores);