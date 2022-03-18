// Pari e Dispari
let containerNumber = document.getElementById("containerNumber");
let containerOutput = document.getElementById("containerOutput");


// ANCHOR 1) L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
do {
    var nome = String(prompt("Inserisci il tuo nome"));
  } while (nome.length <= 0);

    // 1.1) ciclo per scegliere PARI o DISPARI
    do {
        var sceltaPariDispari = String(prompt("Pari o dispari? (p / d)"));
    } while (sceltaPariDispari != "p" && sceltaPariDispari != "d");

    // 1.2) ciclo per scegliere un numero da 1 a 5
    let valoreMin = 1;
    let valoreMax = 5;

    do {
        var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5 (1-2-3-4-5)")); 
    } while ((numeroUtente < valoreMin) || (numeroUtente > valoreMax) || (isNaN(numeroUtente) === true) );

    containerNumber.innerHTML += `<div style="text-transform: capitalize;">${nome}: <span style="color: red;">${numeroUtente}</span></div>`



// ANCHOR 2) Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 function numeroRandom(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
 }

 let numeroComputer = numeroRandom(1,5);

 containerNumber.innerHTML += `<div style="text-transform: capitalize;">computer: <span style="color: red;">${numeroComputer}</span></div>`


 
// ANCHOR 3) Sommiamo i due numeri
 let somma = numeroUtente + numeroComputer;



// ANCHOR 4) Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 function oddOrEven(x) {

        if (x % 2 === 0) {
            return "pari";
        } else {
            return "dispari";
        }
    }



// ANCHOR 5) Stabilire chi ha vinto --> se la somma è pari o dispari
 let vincitore;

 if (sceltaPariDispari === "p" && somma % 2 === 0) {
     vincitore = `${nome}`;
 } else if (sceltaPariDispari === "d" && somma % 2 === 1) {
     vincitore = `${nome}`;
 } else if (sceltaPariDispari === "p" && somma % 2 === 1) {
     vincitore = `computer`;
 } else if (sceltaPariDispari === "d" && somma % 2 === 0) {
     vincitore = `computer`;
 }

 

// ANCHOR 6) Stampare il risultato
 containerOutput.innerHTML += 
    `
     <div style="padding: 20px;">
         La somma dei due numeri è <span style="color: red;">${somma}</span>
         ed è un numero <span style="color: red;">${oddOrEven(somma)}</span>
     </div> 
 
     <div style="padding: 20px;">
         <span style="text-transform: capitalize;">${nome}</span> ha scelto
          <span style="color: red; text-transform: capitalize;">${sceltaPariDispari}</span> (P = pari; D = dispari)
     </div>
 
     <div style="padding: 20px;">
         Il vincitore è <span style="font-weight: bold; text-decoration: underline; text-transform: capitalize;">${vincitore}</span>
     </div>
    `;