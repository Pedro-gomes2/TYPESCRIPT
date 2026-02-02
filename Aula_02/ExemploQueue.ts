import leia = require("readline-sync");
import Queue = require("./Queue");


const fila = new Queue<string>(); 

fila.enqueue("Renan");
fila.enqueue("Vivian");
fila.enqueue("Erick");
//fila.enqueue(leia.question("digite um nome: "));

fila.printQueue();

console.log("\n");
console.log("=============================");
fila.dequeue();

fila.printQueue();
console.log("=============================");

console.log("Tamanho da Fila:", fila.count());

console.log("O nome esta na fila ? :", fila.contains("Erick"));
