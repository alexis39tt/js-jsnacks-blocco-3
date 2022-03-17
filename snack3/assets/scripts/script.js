// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let i=0;
let somma = 0;
let body = document.body;

while (i<5){
    let num = parseInt(prompt("Inserisci un numero"));
    somma += num;
    i++;
}

body.innerHTML = `<h1>${somma}</h1>`;
console.log(somma);