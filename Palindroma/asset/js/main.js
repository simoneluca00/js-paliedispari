// Palidroma
// Chiedere all’utente di inserire una parola
let richiesta = prompt("Inserisci una parola");

// Dichiarazione variabile invertendo la posizione delle lettere (prima -> ultima ...)
let revRichiesta = richiesta.split("").reverse().join("");

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

// Stampare in HTML il risultato dell'analisi
if (palindroma(richiesta) == "è palindroma") {
    containerOutput.innerHTML += `La parola inserita ( <span style="font-weight: bold; text-decoration: underline;"> ${richiesta} </span> ) ${palindroma(richiesta)}`;
} else {
    containerOutput.innerHTML += `La parola inserita ( <span style="font-weight: bold; text-decoration: underline;"> ${richiesta} </span> ) ${palindroma(richiesta)}`;
}

// -------------------------------------- CORREZIONE ALTERNATIVA ----------------------------------------//

/*
let parola = prompt("inserire parola");

function giraParola(parola){
    var parolaReverse = "";

    for( i = parola.lenght - 1; i >= 0; i-- ) {
        parolaReverse += parola[i];
    }

    return parolaReverse;
}

if (parola == giraParola(parola)) {
    console.log("è palindroma");
} else if (parola != giraParola(parola)) {
    console.log("non è palindroma");  
} 

*/