// carrega o cabeçalho e o footer na pagina.
$(        
    function () {
        $("#tagCabecalho").load("../Cabeçalho/cabecalho.html");
        $("#tagRodape").load("../Rodapé/rodape.html");

    // aguarda o carregamento do cabeçalho para inserir a logo.
        setTimeout(() => {
            var logo = document.getElementById('logo')
            logo.src = "/src/assets/logoEduPop.png"
        }, 250)
    }
);

