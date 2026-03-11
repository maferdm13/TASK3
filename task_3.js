function isPalindrome(num) { //Aqui se crea la funcion con los parametros n
    let ld = num; //creamos las dos variables que se van a utilizar adelante
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10; //Aqui lo dividimos para poder sacar el ultimo digito
        reversed = reversed * 10 + digit; // aqui vamos poniendo nuestros numeros al reves 
        num = (num - digit) / 10; //aqui vamos quitando los ultimos dgitos que vamos utilizando
    }

    if (ld === reversed) { //aqui va a igualarlo para saber si es el mismo 
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(123));
console.log(isPalindrome(121));