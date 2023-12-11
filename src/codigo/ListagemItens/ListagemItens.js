// carrega o cabeçalho e o footer na pagina.
$(        
    function () {
       if(localStorage.getItem("Logado") == "true"){
            $("#tagCabecalho").load("../CabeçalhoLogado/cabecalhoLogado.html");
        } else {
            $("#tagCabecalho").load("../Cabeçalho/cabecalho.html");
        }
        $("#tagRodape").load("../Rodapé/rodape.html");

    // aguarda o carregamento do cabeçalho para inserir a logo.
        setTimeout(() => {
            var logo = document.getElementById('logo')
            logo.src = "/src/assets/logoEduPop.png"
        }, 250)
    }
);

const auxLocalstorage = JSON.parse(localStorage.getItem("cadastroItem"));

console.log(document.querySelector('.table-list'))

const tableList = document.querySelector('.table-list')

for (let i = 0; i < auxLocalstorage.Items.length; i++){
    const tableRow = document.createElement("tr");

    const auxIconeAndAuxnome = document.createElement("td");
    const auxIcone = document.createElement("img");
    auxIcone.className = "aux-icone"
    const auxNome = document.createTextNode(auxLocalstorage.Items[i].tipo);
    auxIcone.src = auxLocalstorage.Items[i].tipo == "arquivo"? "assets/pasta-aberta.png" : "assets/livro.png"
    auxIconeAndAuxnome.appendChild(auxIcone);
    auxIconeAndAuxnome.appendChild(auxNome);

    const AutorDados = document.createElement("td");
    AutorDados.innerText = auxLocalstorage.Items[i].nome;

    const EditoraDados = document.createElement("td");
    EditoraDados.innerText = auxLocalstorage.Items[i].editora;

    const LinkDados = document.createElement("td");
    LinkDados.innerText = auxLocalstorage.Items[i].link;

    tableRow.appendChild(auxIconeAndAuxnome)
    tableRow.appendChild(AutorDados)
    tableRow.appendChild(EditoraDados)
    tableRow.appendChild(LinkDados)

    tableList.appendChild(tableRow)
};
