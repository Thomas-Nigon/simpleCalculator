// creation de la fonction calculator
function calculator(){
    // on demande une variable  firstValue a l'utilisateur   
    let firstValue = prompt("first number:");
    // on parseInt pour eviter une concatenation de string (2+2 22 a la place de 2+2=4).
    
    firstValue = parseInt(firstValue);          
    
    
    
    let operator= prompt("selector operator:")
    let secondValue = prompt("last value")
    secondValue = parseInt(secondValue)

    // commande switch pour effecter ce que l'utilisateur tape comme opérateur.
    switch (operator) {
    case '+': console.log(firstValue + secondValue);
    break;
    case '-': console.log(firstValue - secondValue);
    break;
    case '*': console.log(firstValue * secondValue);
    break;
    case '/': console.log(firstValue / secondValue);
    break;
    }
}
calculator();