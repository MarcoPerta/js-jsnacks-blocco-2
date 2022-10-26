// *Snack2*
// Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.

let nomi = ['marco','luca','paolo','giacomo','roby','eleonora'];
let countnomi = nomi.length;

let cognomi = ['ceglie','magistris','vocci','bianco','rossi','ciuppa'];
let countcognomi = nomi.length;

let fullnome = [];

// let randomnomi = nomi[Math.round(Math.random()* countnomi)];
// let randomcognomi = cognomi[Math.round(Math.random()* countcognomi)] ;


for(let i = 0; i<cognomi.length; i++){

    let randomnomi = nomi[Math.round(Math.random()* countnomi)];
    let randomcognomi = cognomi[Math.round(Math.random()* countcognomi)] ;


    fullnome.push(`${nomi[randomnomi]} + ' ' + ${cognomi[randomcognomi]}`);
}

console.log(fullnome)

