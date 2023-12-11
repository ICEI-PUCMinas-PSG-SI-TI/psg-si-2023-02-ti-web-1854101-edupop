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

const botao = document.querySelector("#botao");

botao.addEventListener("click", acesso)
function acesso() {

    const usuario = document.querySelector("#usuario")
    const senha = document.querySelector("#senha")

    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))

    let usuarioEncontrado = listaUsuario.find((item) => {
        return usuario.value == item.usuarioCad && senha.value == item.senhaCad
    })
    
    if(usuarioEncontrado){
        alert("Usuario Logado com Sucesso!")
        setTimeout(()=>{
            window.location.href ='../ExibirCursos/exibirCursos.html'
        }, 500)
        localStorage.setItem("Logado", true)
        localStorage.setItem("UsuarioAtual", JSON.stringify(usuarioEncontrado))
    } else {
        alert("Usuario ou senha incorreto, ou não cadastrado.")
    }
}

