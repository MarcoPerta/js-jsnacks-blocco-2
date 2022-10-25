// snack1 
// l'utente inserisce due numeri in successione, con due prompt, stampa il maggiore.

let number1 = parseInt(prompt('stampa il primo numero'));
let number2 = parseInt(prompt('stampa il secondo numero'));

if(number1===number2){
    console.log('sono uguali')
}
else if(number1>number2){
    console.log(`il numero maggiore è ${number1}`)
}
else{
    console.log(`il numero maggiore è ${number2}`)
}