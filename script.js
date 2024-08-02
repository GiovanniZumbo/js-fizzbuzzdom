// PLANNING

/* 
Creo una variabile per l'Ul / Create a <ul> var
Creo un ciclo for per generare gli <li> con dentro i numeri / Create a for cycle and generate <li> elements
Aggiungo le condizioni per i multipli / Add if for multiplies    
Stampo in console / Console output

Milestone 2 = // * M2
 */


// # STAGING

// * M2

const listPageElement = document.getElementById('list-page');

// # GATHERING DATA
// # EVENT HANDLING
// # PROCESSING

// * Creo una variabile per l'Ul / Create a <ul> var

let numberList = '<ul>'


// * Creo un ciclo for per generare gli <li> con dentro i numeri / Create a for cycle and generate <li> elements


for (i = 1; i <= 100; i++) {

    // * Aggiungo le condizioni per i multipli / Add if for multiplies


    if (i % 3 === 0 && i % 5 !== 0) {
        numberList += `<li class="text-red"> Fizz </li>`;


    } else if (i % 5 === 0 && i % 3 !== 0) {
        numberList += `<li class="text-blue"> Buzz </li>`;

    } else if (i % 3 === 0 && i % 5 === 0) {
        numberList += `<li class="text-green"> FizzBuzz </li>`;

    } else {
        numberList += `<li> ${i} </li>`;
    }
}



// # OUTPUT

// * M2

listPageElement.innerHTML = numberList;

