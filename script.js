/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in pagina forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

const distance = parseInt(prompt("Quanti chilometri dovrai percorrere?"))

console.log(distance)

const age = parseInt(prompt('quanti anni hai?'))

console.log(age)

const ticketPrice = distance * 0.21

console.log(ticketPrice)

/* non so se aveva senso fare le due const qua sotto che non ho usato perche ho fatto direttamente il calcolo */

const underAge = ticketPrice * 0.20

const overAge = ticketPrice * 0.40


let messaggio

if (age < 18) { messaggio = ('il prezzo del suo biglietto è ' + ticketPrice * 0.20)

}


else if (age > 65) {messaggio = ('il prezzo del suo biglietto è ' + ticketPrice * 0.40)}

else {messaggio = ('il prezzo del suo biglietto è  ' + ticketPrice)}


document.getElementById("prezzo").innerHTML = messaggio









