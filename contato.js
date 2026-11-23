
const loginLink = document.getElementById('login');

if (localStorage.getItem('usuarioLogado') === 'true') {
  loginLink.textContent = 'ver conta';
  loginLink.href = 'conta.html';
}