function normalizarUsuarios(json) {
    const usuarios = JSON.parse(json);
    
    
    return usuarios.map(user => {
        const nomeTratado = user.nome
        .trim()
        .toLowerCase()
        .split(" ")
        .map(n => n.charAt(0).toUpperCase() + n.slice(1))
        .join(" ");
        
        
        const email = user.email.toLowerCase();
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        
        
        const idade = Number(user.idade);
        const maiorDeIdade = idade >= 18;
        
        
        return {
            nome: nomeTratado,
            email,
            emailValido,
            idade,
            maiorDeIdade,
        };
    });
}