/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contoVocali (word) {
    const vocali = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let arrayVocali = [];
    for (let i = 0; i < word.length; i++) {
        if (vocali.includes(word[i])) {
            count++;
            arrayVocali.push(word[i]);
        }
    }
    return count;
    
}
// Invoca la funzione qui e stampa il risultato in console
console.log(contoVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

