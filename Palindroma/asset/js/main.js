// Palidroma
// Chiedere all’utente di inserire una parola
let richiesta = prompt("Inserisci una parola");

// Dichiarazione variabile invertendo la posizione delle lettere (prima -> ultima ...)
let revRichiesta = richiesta.split("").reverse().join("");
console.log(revRichiesta)

// Dichiarazione tag HTML per stampare risultato
let containerOutput = document.getElementById("containerOutput");

// Creare una funzione per capire se la parola inserita è palindroma
function palindroma(){
    if ( richiesta === revRichiesta ){
        return "è palindroma"
    } else if ( richiesta !== revRichiesta ) {
        return "non è palindroma"
    }
}

if (palindroma(richiesta) == "è palindroma") {
    containerOutput.innerHTML += `La parola inserita ( <span style="font-weight: bold; text-decoration: underline;"> ${richiesta} </span> ) ${palindroma(richiesta)}`;
} else {
    containerOutput.innerHTML += `La parola inserita ( <span style="font-weight: bold; text-decoration: underline;"> ${richiesta} </span> ) ${palindroma(richiesta)}`;
}

