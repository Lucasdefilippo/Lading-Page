const quadro = document.querySelector('.quadro');
const botao = document.getElementById('botao');

botao.addEventListener('click', function() {
    quadro.classList.toggle('ativo');
});