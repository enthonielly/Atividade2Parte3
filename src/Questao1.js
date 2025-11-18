function formatarProdutos(json) {
    const dados = JSON.parse(json);
    return dados.itens.map(item => {
        const preco = item.preco.toFixed(2).replace('.', ',');
        return `${item.nome} - R$ ${preco} (Categoria: ${item.categoria})`;
    });
}