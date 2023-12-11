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

const listaRecuperada = localStorage.getItem('listaDeCursos');
listaDeCursos = JSON.parse(listaRecuperada)
let javascript = 0;
const aulasNoHtml = document.querySelector("#conteudo-aulas")


if (!listaDeCursos)
    aulasNoHtml.innerHTML += `<h3>Não possui aulas.</h3>`


for (i = 0; i < listaDeCursos.length; i++)
{
    
    if (listaDeCursos[i].curso === 'javascript') {
        javascript++;
        
        aulasNoHtml.innerHTML += ` 
        <div id="receberAula" class="receberAula">
        <div classe="aula-container">
          <div class="titulo-aula">
            <h1 class="titulo-aula">Aula ${javascript} - ${listaDeCursos[i].aula}</h1>

          </div>
          <div class="video-aula" id="video-aula">
            <iframe class="iframe-aula" src="${listaDeCursos[i].link}"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>

          </div>
        </div>
        <hr color="black" noshade size="5px">
      </div>

        `

    }
}



/******* 
const listaRecuperada = localStorage.getItem('listaDeCursos');
listaDeCursos = JSON.parse(listaRecuperada)
let html = 0;
let css = 0;
let javascript = 0
const numeroAulasHtml = document.querySelector("#numero-aulas-html");
const numeroAulasCss = document.querySelector("#numero-aulas-css");
const numeroAulasJavascript = document.querySelector("#numero-aulas-javascript");

for (i = 0; i < listaDeCursos.length; i++) {

    if (listaDeCursos[i].curso === 'html') {
        html++;
    }

    if (listaDeCursos[i].curso === 'css') {
        css++;
    }

    if (listaDeCursos[i].curso === 'javascript') {
        javascript++;
    }
 
    }
    console.log(css)


numeroAulasHtml.innerHTML = `${html + ' '}`;
numeroAulasCss.innerHTML = `${css + ' '}`;
numeroAulasJavascript.innerHTML = `${javascript + ' '}`;

/************** Aulas ******************/










/*
   for(i = 0; i < listaDeCursos.length; i++){

const listaRecuperada = localStorage.getItem('listaDeCursos');

listaDeCursos = JSON.parse(listaRecuperada)

 listaDeCursos.find((cursoHtml) =>{
    return cursoHtml.curso === 'html';
})

--------------------
const listaRecuperada = localStorage.getItem('listaDeCursos');

const buscarHtml = listaRecuperada.find((buscandoHtml) =>{
    return buscandoHtml.curso === 'html';
})



------------
const quantidadeHtml = listaDeCursos;
const listaRecuperada = localStorage.getItem('listaDeCursos')

listaDeCursos = JSON.parse(listaRecuperada)

function mostrarItem(){
    
    
    listaDeCursos.forEach((elemento, index) => {

        numeroAulasHtml.innerHTML += `${index + ' '}`
         
    })
    
}

mostrarItem()
const itemComNomeMaria = listaDeObjetos.find((objeto) => objeto.nome === "Maria");
/*

const numeroAulasHtml = document.querySelector("#numero-aulas-html");
const numeroAulasCss = document.querySelector("#numero-aula-css");
const numeroAulasJavascript = document.querySelector("#numero-aulas-javascript");
const listaRecuperada = localStorage.getItem('listaDeCursos')
        
function mostrarItem(){
   
    
    listaDeCursos.forEach(() => {
        
    })
}

mostrarItem()







/*
const numeroAulasHtml = document.querySelector("#numero-aulas");

function mostrarItem(){
    
    
    listaDeCursos.forEach(() => {
        numeroAulasHtml.innerHTML += index
    })
}


mostrarItem()




/*

const receber = document.querySelector("#receber");

receber.innerHTML = "oi";
numeroAulasHtml.innerHTML = "5 ";



function mostrarItem(){
    alert('oi')
    numeroAulasHtml.innerHTML = 'oi';
    listaDeCursos.forEach((elemento, index) => {
        numeroAulasHtml.innerHTML += "oi"
    })
}


function mostrarAulas(){
    alert("oi")
}

mostrarAulas();


*/