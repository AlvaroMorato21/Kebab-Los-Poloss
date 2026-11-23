
    document.querySelector('.adicionarcarrinho').addEventListener('click', function () {
        const produto = { nome: 'Kebab de carne', preco: 20.00, quantidade: 1 };
        const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');

        const existente = carrinho.find(item => item.nome === produto.nome);

        if (existente) {
            existente.quantidade += 1;
        } else {
            carrinho.push(produto);
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        window.location.href = 'carrinho.html';
    });

    
