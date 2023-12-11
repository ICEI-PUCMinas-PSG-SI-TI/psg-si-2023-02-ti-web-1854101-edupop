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

// Cadastrar Aula
const html = document.querySelector("#html")
const css = document.querySelector("#css")
const javascript = document.querySelector("#javascript")
let cursoEscolhido = "";
const cadNomeCurso = document.querySelector("#botao-cadastrar-aula")
const receberCurso = document.querySelector("#receberCurso")
const receberAula = document.querySelector("#receberAula")
const receberLink = document.querySelector("#receberLink")
const numeroAulasHtml = document.querySelector("#numero-aulas-html")
const listaRecuperada = localStorage.getItem('listaDeCursos');
listaDeCursos = JSON.parse(listaRecuperada)
let htmlQuantidadeAulas = 0;
const aulasNoHtml = document.querySelector("#conteudo-aulas")

function atulizaLocalSotorage(){
    localStorage.setItem('listaDeCursos', JSON.stringify(listaDeCursos))
}

html.addEventListener("click", htmlReceber)
function htmlReceber() {
    cursoEscolhido = "html";
    html.style.backgroundColor = "#00bb00"
    html.style.color = "#bbffbe";
    css.style.backgroundColor = "black"
    css.style.color = "#F4F4F4";
    javascript.style.backgroundColor = "black"
    javascript.style.color = "#F4F4F4";   

}
css.addEventListener("click", cssReceber)
function cssReceber() {
    cursoEscolhido = "css";
    css.style.backgroundColor = "#00bb00"
    css.style.color = "#bbffbe";
    html.style.backgroundColor = "black"
    html.style.color = "#F4F4F4";
    javascript.style.backgroundColor = "black"
    javascript.style.color = "#F4F4F4";
   
    
}

javascript.addEventListener("click", javascriptReceber)
function javascriptReceber() {
    cursoEscolhido = "javascript";
    javascript.style.backgroundColor = "#00bb00"
    javascript.style.color = "#bbffbe";
    html.style.backgroundColor = "black"
    html.style.color = "#F4F4F4";
    css.style.backgroundColor = "black"
    css.style.color = "#F4F4F4";
}




cadNomeCurso.addEventListener("click", function (evento) {
    evento.preventDefault()
    salvarCurso()
})
if (!listaDeCursos)
    aulasNoHtml.innerHTML += `Não possui Aulas`

function salvarCurso() {
   
    const salvarAula = receberAula.value
    const salvarLink = receberLink.value

     if (!listaDeCursos)
     {
        let listaDeCursos = [{
            curso: cursoEscolhido,
            aula: salvarAula,
            link: salvarLink
        }]
      
        localStorage.setItem('listaDeCursos', JSON.stringify(listaDeCursos))
        alert("Aula cadastrada com sucesso.")
        location.reload();
     }  
     else{ 
        
    

                const checarDuplicadoLink = listaDeCursos.some((elemento) => elemento.link === salvarLink)



        if (cursoEscolhido === ''  || salvarLink === '')
            alert('Selecione um curso, complete todos os campos para cadastrar a aula');
       

        else if(checarDuplicadoLink)
        {
            alert('Esse link de vídeo já existe')
        }
    
        else {
            

            listaDeCursos.push({
                curso: cursoEscolhido,
                aula: salvarAula,
                link: salvarLink
            })
            console.log(listaDeCursos)
            atulizaLocalSotorage()
            alert("Aula cadastrada com sucesso.")

        }
    }


}







