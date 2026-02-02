import leia = require("readline-sync");
import Stack = require("./Stack");

const pilha = new Stack<string>(); 

pilha.push("Renan");
pilha.push("Vivian");
pilha.push("Erick");
//pilha.push(leia.question("digite um nome: "));

pilha.printStack();

console.log("\n");
console.log("=============================");
pilha.pop();

pilha.printStack();
console.log("=============================");
// ver o tamanho da Pilha
console.log("Tamanho da pilha:", pilha.count());
// ver se o nome contem na pilha
console.log("O nome esta na pilha ? :", pilha.contains("Erick"));
