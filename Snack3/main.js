// *Snack3*
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari

// creare un array con dentro numeri
// mettere variabile somma
// creare ciclo con tutti i numeri dell array
// sommare i numeri dispari dell'array


let arr = [0,1,2,3,4,5,6,7,8,9,10];
let somma = 0;

for(i=0; i<arr.length ; i++ ){
  if(i % 2 !=0){
    somma = somma + arr[i]
  }
}
console.log(somma)

