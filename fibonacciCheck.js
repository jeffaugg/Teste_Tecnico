// Função para gerar a sequência de Fibonacci até o limite
function gerarFibonacci(limite) {
    const fib = [0, 1];
    while (fib[fib.length - 1] < limite) {
        const proximo = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(proximo);
    }
    return fib;
}

// Função para verificar se o número está na sequência de Fibonacci
function estaNaFibonacci(numero) {
    if (numero < 0) return false;
    const sequencia = gerarFibonacci(numero);
    return sequencia.includes(numero);
}

// Função principal
function mainFibonacci() {
    // Defina o número aqui ou obtenha via entrada do usuário
    const numero = 4;

    function executarVerificacao(n) {
        if (!estaNaFibonacci(n)) {
            console.log(`O número ${n} NÃO pertence à sequência de Fibonacci.`);
            return
        }
        console.log(`O número ${n} pertence à sequência de Fibonacci.`);
    }

    executarVerificacao(numero);
}

// Executa a função principal
mainFibonacci();
