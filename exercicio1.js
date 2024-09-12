
function Fibonacci(numero){
    let n1 = 0;
    let n2 = 1;
    let fib = n2;

    while(fib < numero){
        fib = n1 + n2;
        n1 = n2;
        n2 = fib;
    }
    return fib === numero;
}
 
console.log(Fibonacci(21));
