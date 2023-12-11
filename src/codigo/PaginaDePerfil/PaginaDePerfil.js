// carrega o cabeçalho e o footer na pagina.
$(        
    function () {
        if(localStorage.getItem("Logado") == "true"){
            $("#tagCabecalho").load("../CabeçalhoLogado/cabecalhoLogado.html");
        } else{
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


function atribuir(){
    const Nome = document.getElementById("Nome")
    const Username = document.getElementById("Username")
    const Email = document.getElementById("Email")
    const NomeCompleto = document.getElementById("NomeCompleto")
    let usuarioAtual = JSON.parse(localStorage.getItem("UsuarioAtual"));
    NomeCompleto.innerText = usuarioAtual.nomeCad
    Nome.innerText = usuarioAtual.nomeCad
    Username.innerText = usuarioAtual.usuarioCad
    Email.innerText = `${usuarioAtual.usuarioCad}@gmail.com`
}

window.addEventListener('load', atribuir);

function Deslogar(){
    localStorage.removeItem("UsuarioAtual");
    setTimeout(()=>{
        window.location.href ='../PaginaInicial/PaginaInicial.html'
    }, 500)
    localStorage.setItem("Logado", false)
}