// Exercício 1
function add(valor1, valor2) {
    return valor1 + valor2
}
console.log(add(2, 4))


// Exercício 2
function multiply(valor1, valor2) {
    let resultado = 0
    for (let i = 0; i < valor2; i++) {
        resultado += add(0, valor1)
    }
    return resultado
}
console.log(multiply(6, 8))


// Exercício 3
function power(valor1, valor2) {
    let resultado = [valor1]
    for (let i = 0; i < valor2 - 1; i++) {
        resultado.push(multiply(valor1, resultado[i]))
    }
    return resultado[resultado.length - 1]
}

console.log(power(2, 8))


// Exercício 4
function factorial(valor1) {
    let resultado = 1
    for (let i = valor1; i >= 1; i--) {
        resultado = multiply(resultado, i)
    }
    return resultado
}
console.log(factorial(4))


// Exercício 5 (Bonus)
function fibonacci(valor1) {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < valor1; i++) {
        fibonacci[i] = add([i] - 2, [i] - 1);
    }
    return fibonacci;
}
console.log(fibonacci(7))