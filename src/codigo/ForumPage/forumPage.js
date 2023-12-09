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

var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Aluno",
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
        title: "Thread 2",
        author: "Aluno 2",
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

console.log(threads);
            var container = document.querySelector('ol');
            for (let thread of threads) {
                var html = `
                <li class="row">
                    <a href="/thread.html?${thread.id}">
                        <h4 class="title">
                            ${thread.title}
                        </h4>
                        <div class="bottom">
                            <p class="timestamp">
                                ${new Date(thread.date).toLocaleString()}
                            </p>
                            <p class="comment-count">
                                ${thread.comments.length} comments
                            </p>
                        </div>
                    </a>
                </li>
                `
                container.insertAdjacentHTML('beforeend', html);
            }