import leia = require("readline-sync");

const cores: Set<string> = new Set<string>();


cores.add("Azul");
cores.add("Verde");
cores.add("Azul");
cores.add("Azul");
cores.add("Vermelho");
cores.add("Amarelo");

console.table(cores);

console.log("A cor verde Existe? ", cores.has("Verde"));
cores.delete("Azul");
console.table(cores );

for(let cor of cores){
    console.log(cor);
}