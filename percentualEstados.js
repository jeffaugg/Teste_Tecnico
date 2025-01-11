function calcularPercentuais() {
    // Dados de faturamento por estado
    const faturamentoPorEstado = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    };

    // Cálculo do faturamento total
    const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

    console.log(`Faturamento Total: R$ ${faturamentoTotal.toFixed(2)}\n`);

    // Cálculo e exibição do percentual de cada estado
    for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
        const percentual = ((valor / faturamentoTotal) * 100).toFixed(2);
        console.log(`${estado}: ${percentual}%`);
    }
}

function mainPercentuais() {
    calcularPercentuais();
}

mainPercentuais();
