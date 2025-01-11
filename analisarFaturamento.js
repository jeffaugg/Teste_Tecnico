const fs = require('fs');


function analisarFaturamento(caminhoArquivo) {
    try {
        const dadosBrutos = fs.readFileSync(caminhoArquivo, 'utf-8');
        const dados = JSON.parse(dadosBrutos);

        // Filtrando dias com faturamento > 0
        const faturamentosValidos = dados
            .filter(dia => dia.valor > 0)
            .map(dia => dia.valor);

        if (faturamentosValidos.length === 0) {
            console.log("Não há dados de faturamento > 0 para analisar.");
            return;
        }

        // Calculando menor e maior faturamento
        const menorFaturamento = Math.min(...faturamentosValidos);
        const maiorFaturamento = Math.max(...faturamentosValidos);

        // Calculando a média mensal (ignorando dias com faturamento = 0)
        const somaFaturamento = faturamentosValidos.reduce((acc, valor) => acc + valor, 0);
        const mediaMensal = somaFaturamento / faturamentosValidos.length;

        // Calculando o número de dias acima da média
        const diasAcimaMedia = faturamentosValidos.filter(valor => valor > mediaMensal).length;

        console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
        console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
        console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaMedia}`);
    } catch (error) {
        console.error("Erro ao ler ou processar o arquivo:", error.message);
    }
}

// Função principal
function mainFaturamento() {
    const caminhoArquivo = 'faturamento.json';

    analisarFaturamento(caminhoArquivo);
}

mainFaturamento();
