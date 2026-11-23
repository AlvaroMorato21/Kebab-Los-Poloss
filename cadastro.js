

const telefone = document.getElementById("telefone");

telefone.addEventListener("input", function () {

  let numero = telefone.value.replace(/\D/g, "");

  if (numero.length <= 2) {
    telefone.value = numero;
  }

  else if (numero.length <= 7) {
    telefone.value =
      "(" + numero.substring(0, 2) + ") " +
      numero.substring(2);
  }

  else {
    telefone.value =
      "(" + numero.substring(0, 2) + ") " +
      numero.substring(2, 7) + "-" +
      numero.substring(7, 11);
  }

});

document.getElementById('form-login').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim().toLowerCase();
  const telefone = document.getElementById('telefone').value.trim();
  const senha = document.getElementById('senha').value;
  const confirmar = document.getElementById('confirmar').value;

  if (senha !== confirmar) {
      alert('As senhas não são iguais. Tente novamente.');
      return;
  }

  localStorage.setItem('usuarioLogado', 'true');
  localStorage.setItem('usuarioNome', nome);
  localStorage.setItem('usuarioEmail', email);
  localStorage.setItem('usuarioTelefone', telefone);

  window.location.href = 'index.html';
});