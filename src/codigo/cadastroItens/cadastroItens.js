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

function cadastroItem(){
  var nome = document.getElementById("name");
  var livro = document.getElementById("livro");
  var arquivo = document.getElementById("arquivo");
  var tipo

  if(livro.checked) tipo = livro.value
  else if(arquivo.checked) tipo = arquivo.value

  var editora = document.getElementById("editora");
  var link = document.getElementById("link");
  
  var auxRegistroItem = {
    nome: nome.value,
    tipo: tipo,
    editora: editora.value,
    link: link.value
  }

  var dados = JSON.parse(localStorage.getItem("cadastroItem"));

  if (dados === null || dados === undefined){
    dados = {Items: []};
  }

  dados.Items.push(auxRegistroItem);

  localStorage.setItem("cadastroItem", JSON.stringify(dados));
  alert("Registro feito com sucesso!")

  nome.value = "";
  tipo.value = "";
  editora.value = "";
  link.value = "";
}

function validarFormulario() {
  if (document.getElementById("name").value === "") {
    alert("O campo nome do item é obrigatório.");
  }
  else if (document.getElementById("livro").checked == false && document.getElementById("arquivo").checked == false) {
    alert("O campo livro ou arquivo é obrigatório.");
  }
  else if (document.getElementById("editora").value === "") {
    alert("O campo editora é obrigatório.");
  }
  else if (document.getElementById("link").value === "") {
    alert("O campo link do pdf é obrigatório.");
  }
  else cadastroItem();
}
