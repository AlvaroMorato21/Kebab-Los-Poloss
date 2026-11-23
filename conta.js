if (localStorage.getItem('usuarioLogado') !== 'true') {
    window.location.href = 'login.html';
}

const nome = localStorage.getItem('usuarioNome') || 'Não informado';
const email = localStorage.getItem('usuarioEmail') || 'Não informado';
const telefone = localStorage.getItem('usuarioTelefone') || 'Não informado';

document.getElementById('conta-nome').textContent = nome;
document.getElementById('conta-email').textContent = email;
document.getElementById('conta-telefone').textContent = telefone;

// Inicial do nome no avatar
if (nome !== 'Não informado') {
    document.getElementById('avatar').textContent = nome.charAt(0).toUpperCase();
}

document.getElementById('botao-sair').addEventListener('click', function () {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('usuarioNome');
    localStorage.removeItem('usuarioEmail');
    localStorage.removeItem('usuarioTelefone');
    window.location.href = 'index.html';
});

localStorage.setItem('usuarioEmail', document.getElementById('email').value.trim().toLowerCase());
