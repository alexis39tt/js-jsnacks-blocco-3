// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. Interrompi il ciclo appena il nome è stato trovato.

let i = 0;
let lista = ["Aldo", "Domenico", "Pippo", "Giorgio", "Filippo", "Marco"];
let nome = prompt("Inserisci il tuo nome");
let accesso = false;

while (i < lista.length) {
    if (nome == lista[i]) {
        accesso = true;
    }
    i++;
    if(accesso == true){
        i = lista.length+1;
        console.log("Identificazione riuscita");
    }
}
if(accesso == false){
    console.log("Identificazione non riuscita");
}