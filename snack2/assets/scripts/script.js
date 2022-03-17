let i = 0;
let n = parseInt(prompt("Inserisci un numero"));

while (i < n) {
    let array = [];

    for (let c = 0; c < 10; c++) {
        let numeroCasuale = Math.floor(Math.random() * 100) +1; 
        array.push(numeroCasuale);
    }

    console.log(array);
    i++;

}