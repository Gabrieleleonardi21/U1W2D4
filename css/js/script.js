/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — area
   Funzione area(l1, l2) che ritorna l1 * l2.
   Stampa area(3, 4).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function sum(l1, l2) {
  return l1 * l2;
}
console.log(sum(3, 5));

/* ESERCIZIO 2 — sommaPazza
   Funzione sommaPazza(a, b): ritorna a + b.
   Se a === b: ritorna (a + b) * 3.
   Prova con (2, 3) e (4, 4).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function sommaPazza(a, b) {
  if (a === b) {
    return (a + b) * 3;
  }
  return a + b;
}
console.log(sommaPazza(2, 3));
console.log(sommaPazza(4, 4));

/* ESERCIZIO 3 — distanzaDa19
   Funzione distanzaDa19(n): ritorna Math.abs(n - 19).
   Se n > 19: ritorna distanza * 3.
   Prova con 5 e 25.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function distanzaDa19(n) {
  let distanza = Math.abs(n - 19);
  if (n > 19) {
    return distanza * 3;
  } else {
    return distanza;
  }
}
console.log("Input 5:", distanzaDa19(5));
console.log("Input 25:", distanzaDa19(25));

/* ESERCIZIO 4 — dentroIntervallo
   Funzione dentroIntervallo(n):
   true se n è tra 20 e 100 (compresi) oppure è esattamente 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function dentroIntervallo(n) {
  return (n >= 20 && n <= 100) || n === 400;
}
console.log(dentroIntervallo(20));
console.log(dentroIntervallo(50));
console.log(dentroIntervallo(100));
console.log(dentroIntervallo(400));
console.log(dentroIntervallo(15));
console.log(dentroIntervallo(150));

/* ESERCIZIO 5 — epify
   Funzione epify(testo): aggiunge "EPICODE " davanti.
   Se il testo comincia già con "EPICODE", lo lascia invariato.
   Usa startsWith.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(testo) {
  if (testo.startsWith("EPICODE")) {
    return testo;
  }
  return "EPICODE " + testo;
}

console.log(epify("è figo!"));
console.log(epify("è incredibile"));
console.log(epify("School"));
console.log(epify("EPICODE School"));

/* ESERCIZIO 6 — divisibilePer3o7
   Funzione divisibilePer3o7(n): true se n positivo E divisibile per 3 O per 7.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function divisibilePer3o7(n) {
  return n > 0 && (n % 3 === 0 || n % 7 === 0);
}
console.log(divisibilePer3o7(49));

/* ESERCIZIO 7 — invertiStringa
   Funzione invertiStringa(testo): ritorna la stringa invertita.
   Vincolo: niente .reverse() di array.
   Suggerimento: split("") + for al contrario + join("").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function invertiStringa(testo) {
  // 1. Converte la stringa in un array di caratteri
  let caratteri = testo.split("");
  let risultato = [];

  // 2. Ciclo for al contrario: parte dall'ultimo indice fino a 0
  for (let i = caratteri.length - 1; i >= 0; i--) {
    risultato.push(caratteri[i]);
  }
  return risultato.join(``);
}

console.log(invertiStringa("Ciao Mondo")); // Output: "odnoM oaiC"
console.log(invertiStringa("JavaScript")); // Output: "tpircSavaJ"

/* ESERCIZIO 8 — inizialiMaiuscole
   Funzione inizialiMaiuscole(frase): metti in maiuscolo la prima lettera di ogni parola.
   "ciao mondo" → "Ciao Mondo".
   Suggerimento: split(" ") + for + slice(0,1).toUpperCase() + slice(1) + join(" ").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function inizialiMaiuscole(frase) {
  let parole = frase.split(" ");

  for (let i = 0; i < parole.length; i++) {
    let parola = parole[i];

    if (parola.length > 0) {
      parole[i] = parola.slice(0, 1).toUpperCase() + parola.slice(1);
    }
  }

  return parole.join(" ");
}
console.log(inizialiMaiuscole("ciao mondo"));

/* ESERCIZIO 9 — togliPrimoEUltimo
   Funzione togliPrimoEUltimo(testo): rimuovi primo e ultimo carattere.
   Usa slice. Prova con "EPICODE".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function togliPrimoEUltimo(testo) {
  return testo.slice(1, -1);
}
console.log(togliPrimoEUltimo("EPICODE 2026"));

/* ESERCIZIO 10 — dammiCasuali
   Funzione dammiCasuali(n): ritorna un array di n numeri interi casuali tra 0 e 10 (inclusi).
   Usa Math.random e Math.floor.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function dammiCasuali(n) {
  let arrayRisultato = [];
  for (let i = 0; i < n; i++) {
    let numeroCasuale = Math.floor(Math.random() * 11);
    arrayRisultato.push(numeroCasuale);
  }
  return arrayRisultato;
}
console.log(dammiCasuali(5));

/* --EXTRA-- ESERCIZIO 11 — etaInGiorni
   Funzione etaInGiorni(annoNascita, meseNascita, giornoNascita).
   Ritorna l'età in giorni rispetto a oggi.
   - new Date() per oggi
   - new Date(anno, mese - 1, giorno) per la nascita (mese 0-based!)
   - oggi - nascita = millisecondi
   - dividi per 1000 * 60 * 60 * 24 e Math.floor per i giorni interi
   Stampa: "Hai X giorni!"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function etaInGiorni(annoNascita, meseNascita, giornoNascita) {
  const oggi = new Date();
  const nascita = new Date(annoNascita, meseNascita - 1, giornoNascita);

  const differenzaMillisecondi = oggi - nascita;

  const giorni = Math.floor(differenzaMillisecondi / (1000 * 60 * 60 * 24));

  console.log("Hai " + giorni + " giorni!");
  return giorni;
}

etaInGiorni(1998, 10, 21);
etaInGiorni(2000, 1, 1);
etaInGiorni(1985, 12, 25);
