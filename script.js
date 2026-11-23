const track = document.querySelector('.carrossel-girar');
const total = track.children.length;
let current = 0;

setInterval(() => {
  current = (current + 1) % total;
  track.style.transform = `translateX(-${current * 100}%)`;
}, 4000);


function mascara_cep(){
  var cep_formatado = document.getElementById("cep-input").value
  if (cep_formatado[2] != "."){
      if (cep_formatado[2] != undefined){
         document.getElementById("cep-input").value = cep_formatado.slice(0, 2) + "."+cep_formatado[2];
      }
  }

  var cep_formatado = document.getElementById("cep-input").value
  if (cep_formatado[6] != "-"){
      if (cep_formatado[6] != undefined){
         document.getElementById("cep-input").value = cep_formatado.slice(0, 6) + "-"+cep_formatado[6];
      }
  }
  }

const loginLink = document.getElementById('login');

if (localStorage.getItem('usuarioLogado') === 'true') {
  loginLink.textContent = 'ver conta';
  loginLink.href = 'conta.html';
}

