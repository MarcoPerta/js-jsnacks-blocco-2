// snack4
// crea un array vuoto. chiedi all'utente di inserire un numero, se è dispari inseriscilo nell,array

let arr = []


for(let i=0; i<6; i++){
  let ask = prompt('inserisci un numero');
  if((ask % 2) !=0 ){
    arr.push(ask)
  }
}
console.log(arr)
