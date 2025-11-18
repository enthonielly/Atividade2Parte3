function analisarTexto(texto) {
    const palavras = texto
    .replace(/[.,]/g, "")
    .split(/\s+/)
    .filter(p => p.length > 0);
    
    
    const totalPalavras = palavras.length;
    
    
    const mapaFreq = {};
    palavras.forEach(p => {
    mapaFreq[p] = (mapaFreq[p] || 0) + 1;
    });
    
    
    const frequenciaPalavras = Object.entries(mapaFreq).map(([palavra, frequencia]) => ({
        palavra,
        frequencia,
        }));
    
    
    const tamanhoMedioPalavras = (
        palavras.reduce((acc, p) => acc + p.length, 0) /
        totalPalavras
        ).toFixed(1);
        
    
    return {
        totalPalavras,
        frequenciaPalavras,
        tamanhoMedioPalavras: Number(tamanhoMedioPalavras),
    };
}