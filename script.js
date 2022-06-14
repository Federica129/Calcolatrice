//Calculator
// 1- Chiede due numeri da input all'utente
//  - se l'utente non inserisce uno o entrambi i numeri, ci ritorna una stringa che c'informa su ciò e interrompe il flusso del programma
// 2- Chieda a questo all'utente l'oper da eseguire
// - se l'utente non inserisce alcuna operazione, ritorna una stringa che c'informa su ciò interrompendo tutto
// 3- Venga mostrato all'utente il risultato dall'operazione

//Calculator - CODE

const firstNum = prompt("Inserisci il primo numero:");
const secondNum = prompt("Inserisci il secondo numero:");
const operationChoice = prompt("Inserisci l'operazione desiderata");

const parsedFirstNum = parseInt(firstNum);
const parsedSecondNum = parseInt(secondNum);

if (firstNum.length === 0 || secondNum.length === 0) {
  console.log("Non hai inserito un numero");
}

//if (operationChoice === "addizione") {
//console.log(
// "Il risultato della tua operazione è:",
// parsedFirstNum + parsedSecondNum
//);
//}

switch (operationChoice) {
  case "+":
    console.log("Il risultato è:", parsedFirstNum + parsedSecondNum);
    break;
  case "-":
    console.log("Il risultato è:", parsedFirstNum - parsedSecondNum);
    break;
  case "/":
    console.log("Il risultato è:", parsedFirstNum / parsedSecondNum);
    break;
  case "*":
    console.log("Il risultato è:", parsedFirstNum * parsedSecondNum);
    break;
  default:
    console.log("Non hai inserito un'operazione");
}
