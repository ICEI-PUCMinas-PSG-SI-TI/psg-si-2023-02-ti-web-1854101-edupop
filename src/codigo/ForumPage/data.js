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

var defaultThreads = [
    {
        id: 1,
        title: "Bem Vindos ao EduPop",
        author: "Leonardo Mendes Rocha",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Cleiton",
                date: Date.now(),
                content: "Opa, tudo bem?"
            },
            {
                author: "Pablo",
                date: Date.now(),
                content: "E aí, como vai?"
            }
        ]
    },
    {
        id: 2,
        title: "como centralizar divs usando flexbox?",
        author: "Diego",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "JPedro",
                date: Date.now(),
                content: "Como resolvo isso?"
            },
            {
                author: "Ana",
                date: Date.now(),
                content: "Muito complicado, talvez o professor saiba resolver!"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}