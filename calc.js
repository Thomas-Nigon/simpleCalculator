// creation de la fonction calculator
function calculator(){
    // on demande  a l'utilisateur un premier chiffre, firstValue, pour notre calcul 
    let firstValue = prompt("first number:");
    // on parseInt pour eviter une concatenation de string (2+2 22 a la place de 2+2=4).    
    firstValue = parseInt(firstValue);    
    // on demande l'operateur du calcul a realiser
    let operator= prompt("selector operator:")
    //on demande un 2eme chiffre
    let secondValue = prompt("last value")
    secondValue = parseInt(secondValue)

    // commande switch pour effecter ce que l'utilisateur tape comme opérateur.
    switch (operator) {
    case '+': alert(firstValue + secondValue);
    break;
    case '-': alert(firstValue - secondValue);
    break;
    case '*': alert(firstValue * secondValue);
    break;
    case '/': alert(firstValue / secondValue);
    break;
    }
}
calculator()