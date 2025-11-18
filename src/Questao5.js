function parseQueryString(query) {
    const params = query.split('&');
    const obj = {};
    
    
    params.forEach(par => {
        const [chave, valor] = par.split('=');
        const num = Number(valor);
        obj[chave] = isNaN(num) ? valor : num;
    });
    
    
    return obj;
    }