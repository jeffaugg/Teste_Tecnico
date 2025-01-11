
function inverterString(texto) {
    let invertida = '';

    // Percorrendo a string do final para o início
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }

    return invertida;
}


function mainInverterString() {
    // Defina a string aqui ou obtenha via entrada do usuário
    const textoOriginal = "Teste de inversão";


    function executarInversao(texto) {
        const textoInvertido = inverterString(texto);
        console.log(`Original: ${texto}`);
        console.log(`Invertida: ${textoInvertido}`);
    }

    executarInversao(textoOriginal);
}

// Executa a função principal
mainInverterString();
