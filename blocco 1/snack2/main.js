// snack2 
// l'utente inserisce due numeri in successione, con due prompt,il software stampa prima la parola pèiu lunga poi quella piu corta.

let parola1 = (prompt('inserisci parola1'));
let parola2 = (prompt('inserisci parola2'));

console.log(`la parola1 è lunga ${parola1.lenght}`)

if(parola1===parola2){
    console.log('sono uguali')
}
else if(parola1.lenght<parola2.lenght){
    console.log(parola1+ ' ' + parola2)
}
else{
    console.log(parola2+ ' ' + parola1)
}