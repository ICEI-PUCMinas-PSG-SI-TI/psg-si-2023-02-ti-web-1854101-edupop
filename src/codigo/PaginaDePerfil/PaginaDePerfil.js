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


function atribuir(){
    const dados = [
        { id: 1, Nome: "Rafaela", Sobrenome: "Gomes", Username: "@RafaelaGomes", Email: "RafaelaGomes@Email.com" },
    ]
    localStorage.setItem("pessoas", JSON.stringify(dados))

    const Nome = document.getElementById("Nome")
    const Sobrenome = document.getElementById("Sobrenome")
    const Username = document.getElementById("Username")
    const Email = document.getElementById("Email")
    const NomeCompleto = document.getElementById("NomeCompleto")

    let pessoas = JSON.parse(localStorage.getItem("pessoas"))


    console.log(pessoas)

    function preencher() {
        Nome.innerText = pessoas[0].Nome
        Sobrenome.innerText = pessoas[0].Sobrenome
        Username.innerText = pessoas[0].Username
        Email.innerText = pessoas[0].Email
        NomeCompleto.innerText = pessoas[0].Nome + " " + pessoas[0].Sobrenome
    }

    preencher()
}

var elemento = document.querySelector('#atribuir');
console.log(elemento)
elemento.addEventListener('click', atribuir);

window.onload = function () {
    const Nome = document.getElementById("Nome")
    const Sobrenome = document.getElementById("Sobrenome")
    const Username = document.getElementById("Username")
    const Email = document.getElementById("Email")
    const NomeCompleto = document.getElementById("NomeCompleto")

    let pessoas = JSON.parse(localStorage.getItem("pessoas"))

    console.log(pessoas)

    function preencher() {
        Nome.innerText = pessoas[0].Nome
        Sobrenome.innerText = pessoas[0].Sobrenome
        Username.innerText = pessoas[0].Username
        Email.innerText = pessoas[0].Email
        NomeCompleto.innerText = pessoas[0].Nome + " " + pessoas[0].Sobrenome
    }

    preencher()
}

