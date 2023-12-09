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


function cadastrarNoticias() {
    var titulo = document.getElementById("titulo").value;
    var categoria = document.getElementById("categoria").value;
    var conteudo = document.getElementById("newsContent").value;
    var imagem = document.getElementById("newsImage").value;


    if (titulo && categoria && conteudo && imagem) {

        var novaNoticia = {
            titulo: titulo,
            categoria: categoria,
            conteudo: conteudo,
            imagem: imagem
        };


        var noticias = JSON.parse(localStorage.getItem("noticias")) || [];


        noticias.push(novaNoticia);


        localStorage.setItem("noticias", JSON.stringify(noticias));


        document.getElementById("titulo").value = "";
        document.getElementById("categoria").value = "";
        document.getElementById("newsContent").value = "";
        document.getElementById("newsImage").value = "";

        atualizarListaNoticias();
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
    event.preventDefault();
}

function carregarNoticiasDoLocalStorage() {
    var noticias = JSON.parse(localStorage.getItem("noticias")) || [];
    return noticias;
}


function atualizarListaNoticias() {
    var noticias = carregarNoticiasDoLocalStorage();
    var listaNoticias = document.getElementById("listaNoticias");
    listaNoticias.innerHTML = "";

    noticias.forEach(function (noticia, index) {
        var li = document.createElement("li");
        li.textContent = `Título: ${noticia.titulo}, Categoria: ${noticia.categoria}, Conteúdo: ${noticia.conteudo}, Imagem: ${noticia.imagem}`;

        var editarButton = document.createElement("button");
        editarButton.textContent = "Editar";
        editarButton.onclick = function () {
            editarNoticia(index);
        };

        var excluirButton = document.createElement("button");
        excluirButton.textContent = "Excluir";
        excluirButton.onclick = function () {
            excluirNoticia(index);
        };

        li.appendChild(editarButton);
        li.appendChild(excluirButton);

        listaNoticias.appendChild(li);
    });
}

function editarNoticia(index) {
    var noticias = carregarNoticiasDoLocalStorage();
    var noticia = noticias[index];

    document.getElementById("titulo").value = noticia.titulo;
    document.getElementById("categoria").value = noticia.categoria;
    document.getElementById("newsContent").value = noticia.conteudo;
    document.getElementById("newsImage").value = noticia.imagem;

    noticias.splice(index, 1);
    localStorage.setItem("noticias", JSON.stringify(noticias));
    atualizarListaNoticias();
}

function excluirNoticia(index) {
    var noticias = carregarNoticiasDoLocalStorage();
    noticias.splice(index, 1);
    localStorage.setItem("noticias", JSON.stringify(noticias));
    atualizarListaNoticias();
}

li.textContent = `Título: ${noticia.titulo}, Categoria: ${noticia.categoria}, Conteúdo: ${noticia.conteudo}, Imagem: ${noticia.imagem}`;

var editarButton = document.createElement("button");
editarButton.textContent = "Editar";
editarButton.onclick = function () {
    editarNoticia(index);
};

var excluirButton = document.createElement("button");
excluirButton.textContent = "Excluir";
excluirButton.onclick = function () {
    excluirNoticia(index);
};

li.appendChild(editarButton);
li.appendChild(excluirButton);


window.onload = function () {
    atualizarListaNoticias();
  
};

