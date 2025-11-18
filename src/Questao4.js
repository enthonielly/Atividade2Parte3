function sanitizarDados(dados) {
    const copia = JSON.parse(JSON.stringify(dados));
    
    
    copia.usuarios = copia.usuarios.map(u => ({
        nome: u.nome,
        cpf: u.cpf.replace(/\d{3}\.\d{3}\.\d{3}/, "***.***.***"),
        cartaoCredito: u.cartaoCredito.replace(/\d{4}-\d{4}-\d{4}/, "****-****-****"),
        telefone: u.telefone.replace(/\(\d{2}\) \d{5}/, m => m.replace(/\d/g, "*")),
    }));
    
    
    copia.metadata.token = copia.metadata.token.slice(0, 10) + "...";
    
    
    return copia;
    }