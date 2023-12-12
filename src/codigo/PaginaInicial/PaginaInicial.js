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

window.addEventListener('load', () => {
    if(localStorage.getItem('Logado') == null){
        localStorage.setItem("Logado", false);
    }
})

var novaNoticia = {
    titulo: "Caça F-16 americano cai durante treinamento na Coreia do Sul",
    categoria: "Mundo",
    conteudo: "Aeronave caiu após alçar voo na base de Gunsan. O piloto ejetou e foi resgatado em seguida.",
    imagem: "https://s2-g1.glbimg.com/vQrjzgBe-4Jhz9cZwDmkCScoX5c=/0x0:3779x2419/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/R/F/kTgnTSSluOa79jHdqSxw/ap23139795126149.jpg"
};
var noticias = JSON.parse(localStorage.getItem("noticias")) || [];
noticias.push(novaNoticia);
if(localStorage.getItem("noticias") == null) localStorage.setItem("noticias", JSON.stringify(noticias));

var dados = JSON.parse(localStorage.getItem("cadastroItem"));

var auxRegistroItem = {
    nome: "Clean Code",
    tipo: "livro",
    editora: "Prentice Hall PTR",
    link: "https://drive.google.com/file/d/0B9eZlIWAs3-sN3NRbktQNVFUN3l2cTBBcXN4Y3FaUQ/view?resourcekey=0-ZafqCRtyIP8Zw0CKviW5Gw"
}

if (dados === null || dados === undefined){
    dados = {Items: []};
    dados.Items.push(auxRegistroItem);
    localStorage.setItem("cadastroItem", JSON.stringify(dados));
}


var cursos = JSON.parse(localStorage.getItem("listaDeCursos"));
if (cursos === null || cursos === undefined){
    cursos = [
  {
    "curso": "javascript",
    "aula": "O que o JavaScript é capaz de fazer?",
    "link": "https://www.youtube.com/embed/Ptbk2af68e8?si=XYOeDggisj49jApm"
  },
  {
    "curso": "javascript",
    "aula": "JavaScript: como chegamos até aqui?",
    "link": "https://www.youtube.com/embed/rUTKomc2gG8?si=FQjZqxEwaY-dzgjB"
  },
  {
    "curso": "javascript",
    "aula": "Dando os primeiros passos",
    "link": "https://www.youtube.com/embed/FdePtO5JSd0?si=F2-rlamdm_vx10la"
  },
  {
    "curso": "html",
    "aula": "Tags Básicas em HTML5",
    "link": "https://www.youtube.com/embed/EANOXuQsglo?si=VCFmrjcRATa_w2wi"
  },
  {
    "curso": "html",
    "aula": "Parágrafos, Quebras e Símbolos Especiais",
    "link": "https://www.youtube.com/embed/wlgU9ltZwqc?si=37UhEGZsUhWbuRG5"
  },
  {
    "curso": "html",
    "aula": "Formatação de Texto com HTML5",
    "link": "https://www.youtube.com/embed/oQExPqFT7ec?si=Dn2iNBDpQegZ9Yy2"
  },
  {
    "curso": "css",
    "aula": "Variáveis em CSS",
    "link": "https://www.youtube.com/embed/3S5ts5bzvzM?si=Eaoi4PhlDAFssMSr"
  },
  {
    "curso": "css",
    "aula": "Responsividade para sites",
    "link": "https://www.youtube.com/embed/WcGPSeuJDJ0?si=8vftVnv4riPZGHmU"
  },
  {
    "curso": "css",
    "aula": "Configurando o header e o menu do site",
    "link": "https://www.youtube.com/embed/TrfhQwSYCEk?si=UVsfxi1BAnowuPzL"
  }
]
    localStorage.setItem("listaDeCursos", JSON.stringify(cursos));
}
// [
//     {
//         "curso": "javascript",
//         "aula": "O que o JavaScript é capaz de fazer?",
//         "link": "https://www.youtube.com/embed/Ptbk2af68e8?si=XYOeDggisj49jApm"
//     },
//     {
//         "curso": "javascript",
//         "aula": "JavaScript: como chegamos até aqui?",
//         "link": "https://www.youtube.com/embed/rUTKomc2gG8?si=FQjZqxEwaY-dzgjB"
//     },
//     {
//         "curso": "javascript",
//         "aula": "Dando os primeiros passos",
//         "link": "https://www.youtube.com/embed/FdePtO5JSd0?si=F2-rlamdm_vx10la"
//     },
//     {
//         "curso": "html",
//         "aula": "Tags Básicas em HTML5",
//         "link": "https://www.youtube.com/embed/EANOXuQsglo?si=VCFmrjcRATa_w2wi"
//     },
//     {
//         "curso": "html",
//         "aula": "Parágrafos, Quebras e Símbolos Especiais",
//         "link": "https://www.youtube.com/embed/wlgU9ltZwqc?si=37UhEGZsUhWbuRG5"
//     },
//     {
//         "curso": "html",
//         "aula": "Formatação de Texto com HTML5",
//         "link": "https://www.youtube.com/embed/oQExPqFT7ec?si=Dn2iNBDpQegZ9Yy2"
//     },
//     {
//         "curso": "css",
//         "aula": "Variáveis em CSS",
//         "link": "https://www.youtube.com/embed/3S5ts5bzvzM?si=Eaoi4PhlDAFssMSr"
//     },
//     {
//         "curso": "css",
//         "aula": "Responsividade para sites",
//         "link": "https://www.youtube.com/embed/WcGPSeuJDJ0?si=8vftVnv4riPZGHmU"
//     },
//     {
//         "curso": "css",
//         "aula": "Configurando o header e o menu do site",
//         "link": "https://www.youtube.com/embed/TrfhQwSYCEk?si=UVsfxi1BAnowuPzL"
//     }
// ]