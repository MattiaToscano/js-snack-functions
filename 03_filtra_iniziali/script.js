/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraIniziali(array, Iniziale) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(0) !== Iniziale) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}
// Invoca la funzione qui e stampa il risultato in console
filtraIniziali(names, "A");
console.log(filtraIniziali(names, "A"))



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]