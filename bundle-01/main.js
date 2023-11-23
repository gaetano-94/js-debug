/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }
//1)Crea un ciclo fin quando il valore [i] non sia maggiore di 5

//2)No

//3)Si perche cosi si entra in un loop infinito.
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//invece in questo caso il ciclo finira nel momento che [i] non sara piu minore del 5, oppure al posto del <, se inseriamo <=, il ciclo finira nel momento che il nostro indice sia uguale al 5 


// ESERCIZIO 2
/*function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}*/
//1)E una funzione con un variabile, che al suo interno si svolge una condizione, del tipo (nun) diviso per 2 mi da come risultato 0 e quindi true. Allora a (nun) vado ad aggiungere il numero 5, e come ritorno finale mia dia la somma di nun + 5.

//2)Si, e sono il(=) invece del (===), che e un modo per fare si che la nostra condizione si attivi, solamente nell'instante che la divisione del nostro (nun) dia come risultato 0
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
//3)Si, perché il nostro (nun) da dove lo prendiamo? quindi ci sara un array. E un altra cosa avremo bisogno di un ciclo, che vada a scorrere l'indice del nostro per far si che la nostra condizione venga innescata


// ESERCIZIO 3
/*function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}*/
//1)E una funzione anomina che al suo interno ha il ciclo for, il cui fa partire un ciclo sul nostro [i] e finira nel momento che il nostro indice non sia piu minore del 5 "il nostro punto di arrivo".E quindi ci stampa il console l'indice dei numeri che sono minori del 5

//2)Si, che al posto della virgola(,) vicino allo 0 e al 5 vadino il punto e virgola(;)
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
//3)No, nel senso che poi questa funzione la possiamo utilizzare anche il altri casi


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
//1)E una funzione anonima con al suo interno due array e un ciclo. Il primo array (numbers) genera una lista di numeri, il secondo array (evenNumbers)essendo vuoto dovrà essere riempito con dei numeri, e questo succedera grazie al ciclo for e alla sua condizione. Nel senso che tutti i numeri del primo array(numbers), che possono essere divisi per due e dare come risultato 0, verranno pushati(inseriti) nel array vuoto(evenNumbers).E poi grazie a (return) dacci il risulato dei numeri del nuovo array(evenNumbers)

//2)Si,