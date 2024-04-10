function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

function combinacao(n, k) {
  
    if (n < k || n < 0 || k < 0) {
        return "Parâmetros inválidos";
    }

    // Calcular o fatorial de n, k e (n-k)
    var fatorialN = fatorial(n);
    var fatorialK = fatorial(k);
    var fatorialNK = fatorial(n - k);

    // Calcular a combinação usando a fórmula
    var combinacao = fatorialN / (fatorialK * fatorialNK);

    return combinacao;
}

console.log(combinacao(5, 3));