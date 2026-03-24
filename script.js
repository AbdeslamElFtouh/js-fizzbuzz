for (i = 1; i < 101; i++) {
    if (i % (3*5) === 0) { 
        console.log('FizzBuzz');
    }else if (i % 3 === 0) {
        console.log('Fizz');
    }else if (i % 5 === 0) {
        console.log('Buzz');
    }else
        console.log(i)
}












































/* const n_inserito = prompt('Ciao! Inserisci un numero compreso tra 1 e 100.');

if (n_inserito === ''){
    alert('Dovresti inserire qualcosa...');

}else if (n_inserito == isNaN){
    alert('Sono ammessi soltanto i numeri');

}else if (n_inserito < 1 && n_inserito > 100){
    alert('Valgono solo i numeri compresi tra 1 e 100');

}else{
    for(n_inserito; n_inserito > 101; n_inserito++) {
        if (n_inserito % 3 === 0) {
            alert('Fizz')

        }if (n_inserito % 5 === 0) {
            alert('Buzz')

        }if (n_inserito % 3 === 0 && n_inserito % 5 === 0) {
            alert('FizzBuzz')

        }else {
            alert('Ops... questo non è un multiplo')
        }
    }
} */