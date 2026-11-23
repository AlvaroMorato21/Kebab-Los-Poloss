
if (localStorage.getItem('usuarioLogado') === 'true') {
    const loginLink = document.getElementById('login');
    loginLink.textContent = 'ver conta';
    loginLink.href = 'conta.html';
}


document.getElementById('form-login').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim().toLowerCase();
    const emailSalvo = (localStorage.getItem('usuarioEmail') || '').trim().toLowerCase();


    if (emailSalvo !== email) {
        localStorage.removeItem('usuarioNome');
        localStorage.removeItem('usuarioTelefone');
    }

    localStorage.setItem('usuarioLogado', 'true');
    localStorage.setItem('usuarioEmail', email);

    window.location.href = 'index.html';
});