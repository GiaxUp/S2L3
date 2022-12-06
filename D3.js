//ESERCIZIO 1
// Scrivi un algoritmo per trovare il più grande tra due numeri interi.

// console.log(Math.max(1, 3));

// let arrayOfNumbers = [4, 74, 192, 3, 435, 12, 9];
// console.log(Math.max.apply(null, arrayOfNumbers));

// ESERCIZIO 2
// Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.

// let insertNumber = 6;
// if (insertNumber !== 5) {
//   console.log("Not equal");
// } else {
//   console.log("Equal to 5.");
// }

// ESERCIZIO 3
// Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)

// let insertNumber = 10;
// if (insertNumber % 5 === 0) {
//   console.log("Divisibile per cinque.");
// } else {
//   console.log("Non divisibile per cinque.");
// }

// ESERCIZIO 4
// Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.

// let arrayOfNumbers = [2, 6];
// if (arrayOfNumbers.includes(8)) || (arrayOfNumbers[0 + 1] === 8) {
//   console.log("Il valore inserito o la loro somma è uguale a 8.");
// } else {
//   console.log("Il valore inserito o la loro somma NON è uguale a 8.");
// } (Chiedere in serata se era possibile fare una cosa del genere)

// let numeroUno = 2;
// let numeroDue = 6;
// if (numeroUno === 8 || numeroDue === 8) {
//   console.log("Il valore inserito o la loro somma/sottrazione è uguale a 8.");
// } else if (numeroUno + numeroDue === 8 || numeroUno - numeroDue === 8) {
//   console.log("Il valore inserito o la loro somma/sottrazione è uguale a 8.");
// } else {
//   console.log("Il valore inserito o la loro somma NON è uguale a 8.");
// }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

// let totalShoppingCart = 40;

// if (totalShoppingCart > 50) {
//   console.log("Spedizione gratuita disponibile!");
// } else if (totalShoppingCart < 50) {
//   console.log("Devi pagare la spedizione di 10€!");
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

// let totalShoppingCart = 70;
// let discountedCart = totalShoppingCart - (totalShoppingCart / 100) * 20;

// console.log("La cifra scontata è di: ");
// console.log(discountedCart);
// if (discountedCart > 50) {
//   console.log("Spedizione gratuita disponibile!");
// } else if (discountedCart < 50) {
//   console.log("Devi pagare la spedizione di 10€!");
// }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

//Con Array
// let numbers = [35, 10, 50];
// let order = numbers.sort().reverse();
// console.log("Final result: ", order);

//Senza Array
// let numero1 = 32;
// let numero2 = 48;
// let numero3 = 2;
// if (numero1 > numero2 && numero1 > numero2) {
//   if (numero2 > numero3) {
//     console.log(numero1, numero2, numero3);
//   } else {
//     console.log(numero1, numero3, numero2);
//   }
// }  else if (numero2 > numero1 && numero2 > numero3) {
// if (numero1 > numero3) {
//   console.log(numero2, numero1, numero3);
// } else {
//   console.log(numero2, numero3, numero1)
// }
// } else {
//   if (numero1 > numero2) {
//     console.log(numero3, numero1, numero2);
//   } else {
//     console.log(numero3, numero2, numero1);
//   }
// }

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

// let numero = 40;
// console.log(typeof numero);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

// let numero = 9;
// if (numero % 2 === 0) {
//   console.log("Numero pari.");
// } else {
//   console.log("Numero dispari.");
// }

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 11
  if (val >= 5 && val < 10) {
      console.log("Meno di 10");
    } else if (val >= 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

// const me = {
//   name: "John",
//   lastName: "Doe",
//   skills: ["javascript", "html", "css"],
// };

// me.city = "Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

// delete lastname;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

// me.skills.pop();
// console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

// let emptyArray = [];
// emptyArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(emptyArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

// emptyArray.splice(9, 1, 100);
// console.log(emptyArray);
