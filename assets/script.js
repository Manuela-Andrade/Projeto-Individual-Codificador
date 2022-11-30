/* Troca do texto do botão */

const codificar = document.getElementById('codificar');
const decodificar = document.getElementById('decodificar');
const botao = document.getElementById('button');

function mudarTexto() {
  if (decodificar.checked) {
    botao.innerText = "decodificar";
  } else if (codificar.checked) {
    botao.innerText = "codificar";
  }
}

/* Mostrar ou esconder a opção inclemento */
const cesar = document.getElementById('cesar');
const base64 = document.getElementById('base64');
const incrementar = document.getElementById('incrementar');

function mostraIncremento() { 
  incrementar.style.display = "block"; 
}

function escondeIncremento() {
  incrementar.style.display = "none";
}

cesar.addEventListener('change', mostraIncremento);
base64.addEventListener('change', escondeIncremento);

const resultado = document.getElementById('resultado');
const incremento = parseInt(document.getElementById('incremento').value);
console.log(incremento);
console.log(typeof incremento);

botao.addEventListener('click', function(event) {
  event.preventDefault();
  opcaoEscolhida();
});

/* Calculos */

function codificarCesar(mensagem) {
  mensagem = mensagem.split("");
    console.log(mensagem);
  const mensagemAtual = mensagem.map((valor) => valor.charCodeAt());
    console.log(mensagemAtual);
  const mensagemInclemento = mensagemAtual.map((valor) => valor+incremento);
    console.log(mensagemInclemento);
  const mensagemNova = mensagemInclemento.map((valor) => String.fromCharCode(valor)).join("");
    console.log(mensagemNova);
      return mensagemNova;
    }

function decodificarCesar(mensagem) {
  mensagem = mensagem.split("");
const mensagemAtual = mensagem.map((valor) => valor.charCodeAt())
const mensagemInclemento = mensagemAtual.map((valor) => valor-incremento);
const mensagemNova = mensagemInclemento.map((valor) => String.fromCharCode(valor)).join("");
  console.log(mensagemNova);
    return mensagemNova;
  }

function opcaoEscolhida () {
  const mensagem = document.getElementById('mensagem').value;
   console.log(mensagem);
     if (codificar.checked) {
      if (cesar.checked) {
      console.log("Codificar Cesar")
          resultado.innerText = codificarCesar(mensagem);
      } else {
          console.log("Codificar Base64")
          resultado.innerText = btoa(mensagem);
      } 
      } else if (decodificar.checked) {
        if (cesar.checked) {
          console.log("Decodificar César")
          resultado.innerText = decodificarCesar(mensagem);
        } else {
          console.log("Decodificar base64")
          resultado.innerText = atob(mensagem);
        } 
        } else {
         resultado.innerText = "Informe o tipo de código ";
      }
  }
  const copiar = document.getElementById("copiar");
  
  copiar.onclick = () => {
    navigator.clipboard.writeText(resultado.innerText);
  }








