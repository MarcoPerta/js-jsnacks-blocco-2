// *Snack2*
// Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.

let nomi = ['marco','luca','paolo'];
let countnomi = nomi.length;

let cognomi = ['ceglie','magistris','vocci'];
let countcognomi = nomi.length;

let randomnomi = nomi[Math.round(Math.random()*(countnomi -1))];
let randomcognomi = cognomi[Math.round(Math.random()*(countcognomi -1))] ;

console.log(randomnomi + ' ' + randomcognomi); 
