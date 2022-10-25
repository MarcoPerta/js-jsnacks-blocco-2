// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).

let inseriscinumero = parseInt(prompt('inserisci un numero'));

if(inseriscinumero % 2 == 0) {
    console.log(inseriscinumero)
}
else{
    console.log(inseriscinumero+1) 
}
