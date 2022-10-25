// snack3
// Il software deve chiedere per 3 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let somma = 0;

for (let i=0; i<3 ; i++){
    let numero = parseInt(prompt('inserisci un numero'));
    
    somma += numero;
}
console.log (`la somma dei numeri è ${somma}`)