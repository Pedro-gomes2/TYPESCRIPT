import leia = require("readline-sync");

const partcipantes : Map <number, string> = new Map<number, string>();

partcipantes.set(1,"Ana");
partcipantes.set(2,"Samuel");
partcipantes.set(3,"Leo");
partcipantes.set(4,"Joao");
partcipantes.set(5,"Pedro");
partcipantes.set(6,"lucy");

let matricula = leia.questionInt(`Digite o numero da matricula  `);
let nome = leia.question("Digite o nome do participante  ");

partcipantes.set(matricula, nome);


/*for(let [matricula,nome]of partcipantes){
    
    console.log(`Matricula:${matricula} -  Nome ${nome}`)

}*/


 console.table(partcipantes);
// procura elemento pela chave
 console.log("Existe a matricula 2? " ,partcipantes.has(2));
// procura elemento pelo valor (starwith - endwhith)
 console.log("Existe a participante Ana  " , Array.from(partcipantes.values()).includes("Ana"));

 
 for(let matricula of partcipantes.keys()){
    
    console.log(matricula);
 
}


//procura elemento pela chave 
console.log("Qual é o nome do aluno com a matricula 3 ", partcipantes.get(3));

partcipantes.delete(3); 
console.table(partcipantes);