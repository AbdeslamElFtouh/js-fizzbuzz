/* for (i = 1; i < 101; i++) {
    if (i % (3*5) === 0) { 
        console.log('FizzBuzz');
    }else if (i % 3 === 0) {
        console.log('Fizz');
    }else if (i % 5 === 0) {
        console.log('Buzz');
    }else
        console.log(i)
} */


alert('Regole del gioco:\nInserisci un numero compreso tra 1 e 100 che sia multiplo di 3, di 5 o di entrambi per ricevere dei feedback: \n  ogni "Fizz" corrisponde ad un multiplo di 3;\n  ogni "Buzz" corrisponde ad un multiplo di 5;\n  ogni "FizzBuzz" corrisponde ad un multiplo sia di 3 che di 5.\nOra prova e divertiti!')

const num_inserito = prompt('Ciao! Prova ad inserire un numero compreso tra 1 e 100:');
const n_inserito = parseInt (num_inserito)


if (isNaN(n_inserito)) {
    alert('Mi dispiace, ma sono ammesse soltanto le cifre.');
} else if (n_inserito < 1 || n_inserito > 100) {
    alert('I numeri inseriti devono essere compresi tra 1 e 100.'); 
} else if (n_inserito % (3 * 5) === 0) {
    alert('FizzBuzz!');
} else if (n_inserito % 3 === 0) {
    alert('Fizz!');
} else if (n_inserito % 5 === 0) {
    alert('Buzz!');
} else {
    alert('Ops... Riprovaci!');
}










































