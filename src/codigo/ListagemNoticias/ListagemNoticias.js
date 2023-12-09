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


function paginate(array, pageSize, pageNumber) {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function exibirNoticiasComPaginacao(pageNumber, pageSize) {
    var noticias = carregarNoticiasDoLocalStorage();
    var paginatedNoticias = paginate(noticias, pageSize, pageNumber);

    var listaNoticias = document.getElementById("listaNoticias");
    listaNoticias.innerHTML = "";

    var reversedPaginatedNoticias = paginatedNoticias.reverse();

    reversedPaginatedNoticias.forEach(function (noticia, index) {
        var li = document.createElement("li");
        li.innerHTML = `
            <h3 class="titleBlog">${noticia.titulo}</h3>
            <p class="newsCategory">Categoria: ${noticia.categoria}</p>
            <div class="contentContainer"><p class="newsContent">${noticia.conteudo}</p></div>
            <div class="imageContainer"><img src="${noticia.imagem}" alt="${noticia.titulo}" class="newsImage"> </div>
        `;

        listaNoticias.appendChild(li);
    });
}

var pageSize = 6;
var currentPage = 1;

window.onload = function () {
    atualizarListaNoticias();
    exibirNoticiasComPaginacao(currentPage, pageSize);
};

function nextPage() {
    var noticias = carregarNoticiasDoLocalStorage();
    var totalPages = Math.ceil(noticias.length / pageSize);
    if (currentPage < totalPages) {
        currentPage++;
        exibirNoticiasComPaginacao(currentPage, pageSize);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        exibirNoticiasComPaginacao(currentPage, pageSize);
    }
}
