(function () {
    // Bloqueando arrasta imagens do site para baixar

    function desativarDragDrop() {
        document.addEventListener(
            "dragstart",
            (evento) => evento.preventDefault(),
            false
        );
        document.addEventListener(
            "drop",
            (evento) => evento.preventDefault(),
            false
        );
    }

    desativarDragDrop();
})();
window.addEventListener("scroll", function () {
    // Obtém a posição vertical atual da página
    var posicaoPagina = window.scrollY;

    // Obtém a posição da tag com a classe .um em relação ao topo da página
    var posicaoUm = document.querySelector(".um").offsetTop;

    // Se a posição atual da página for maior ou igual à posição da tag .um, inicia a animação da barra
    if (posicaoPagina >= posicaoUm) {
        // Adiciona a classe 'animado' à barra para iniciar a animação
        document.querySelector(".um").classList.add("ativo");
    }
});
window.addEventListener("scroll", function () {
    // Obtém a posição vertical atual da página
    var posicaoPagina = window.scrollY;

    // Obtém a posição da tag com a classe .um em relação ao topo da página
    var posicaoUm = document.querySelector(".tres").offsetTop;

    // Se a posição atual da página for maior ou igual à posição da tag .um, inicia a animação da barra
    if (posicaoPagina >= posicaoUm) {
        // Adiciona a classe 'animado' à barra para iniciar a animação
        document.querySelector(".tres").classList.add("ativo");
    }
});
