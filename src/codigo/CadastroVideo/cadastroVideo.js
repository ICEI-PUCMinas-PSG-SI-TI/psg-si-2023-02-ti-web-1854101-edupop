  $(
        // carrega o cabeçalho e o footer na pagina.
        function () {
        $("#tagCabecalho").load("../Cabeçalho/cabecalho.html");
        $("#tagRodape").load("../Rodapé/rodape.html");
        // aguarda o carregamento do cabeçalho para inserir a logo.
        setTimeout(() => {
            var logo = document.getElementById('logo')
            logo.src = "../../assets/logoEduPop.png"
        }, 500)
    });

    let listaDeVideos = [];

    const btnEnviar = document.querySelector("#btn-salvar");

    btnEnviar.addEventListener("click", enviarForm);

    function enviarForm () {
        
    }

    function cadastraVideo() {
        const curso = document.getElementById('curso').value;
        const titulo = document.getElementById('titulo').value;
        const descrição = document.getElementById('descrição').value;
        const link = document.getElementById('link').value;

        const video = {
            curso: curso,
            titulo: titulo,
            descrição: descrição,
            link: link
    };

    listaDeVideos.push(video);

    document.getElementById('videoForm').reset();

    atualizarListaDeVideos();



}

function atualizarListaDeVideos() {
    const listaVideosElement = document.getElementById('listaVideos');
    listaVideosElement.innerHTML = '';

    listaDeVideos.forEach(video => {
        const listItem = document.createElement('li');
        listItem.textContent = `curso: ${video.curso}, titulo: ${video.titulo}, descrição: ${video.descrição}, link: ${video.link}`;
        listaVideosElement.appendChild(listItem);
    });
}

