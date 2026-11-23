const lista = document.getElementById('lista');
const totalEl = document.getElementById('total');
const resumo = document.getElementById('resumo');

function lerCarrinho() {
    return JSON.parse(localStorage.getItem('carrinho') || '[]');
}

function salvarCarrinho(itens) {
    localStorage.setItem('carrinho', JSON.stringify(itens));
}

function formatarPreco(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

function renderizar() {
    const itens = lerCarrinho();
    lista.innerHTML = '';

    let total = 0;

    itens.forEach(function (item, indice) {
        total += item.preco * item.quantidade;

        const li = document.createElement('li');
        li.className = 'item-carrinho';
        li.innerHTML = `
            <div>
                <span class="item-nome">${item.nome}</span>
                <span class="item-detalhe">${item.quantidade}x ${formatarPreco(item.preco)}</span>
            </div>
            <button type="button" class="botao-remover" data-indice="${indice}">remover</button>
        `;
        lista.appendChild(li);
    });

    resumo.textContent = itens.length === 0
        ? 'Nenhum item adicionado ainda.'
        : itens.length + (itens.length === 1 ? ' item no pedido.' : ' itens no pedido.');

    totalEl.textContent = formatarPreco(total);
}

lista.addEventListener('click', function (e) {
    if (!e.target.classList.contains('botao-remover')) return;

    const itens = lerCarrinho();
    itens.splice(Number(e.target.dataset.indice), 1);
    salvarCarrinho(itens);
    renderizar();
});

document.getElementById('esvaziar').addEventListener('click', function () {
    localStorage.removeItem('carrinho');
    renderizar();
});

document.getElementById('finalizar').addEventListener('click', function () {
    if (lerCarrinho().length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }
    alert('Pedido enviado!');
});

renderizar();