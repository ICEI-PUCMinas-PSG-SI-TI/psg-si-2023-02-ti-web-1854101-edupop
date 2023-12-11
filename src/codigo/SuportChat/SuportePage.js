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
            logo.src = "./assets/logoEduPop.png"
        }, 250)
    }
);

// Insere lista de professores em formato JSON no local storage!
function InserirListaProfessoresJson() {
    let teachersObject = {
        teachersArray: [
            {
                username: "leomendesrch",
                nome: "Leonardo Mendes Rocha",
                email: "leomendesrch2005@gmail.com",
                photo: "https://static-00.iconduck.com/assets.00/teacher-and-book-icon-2048x1974-gbj3kbyw.png",
                id: 0,
                messages: [{message: "Olá como posso te ajudar?", type: "message recieved"}],
            },
            {
                username: "anaoliveira",
                nome: "Ana Oliveira",
                email: "anaoliveira@gmail.com",
                photo: "https://static-00.iconduck.com/assets.00/teacher-and-book-icon-2048x1974-gbj3kbyw.png",
                id: 1,
                messages: [{message: "Olá como posso te ajudar?", type: "message recieved"}],
            },
            {
                username: "marcosilva",
                nome: "Marco Silva",
                email: "marcosilva@gmail.com",
                photo: "https://static-00.iconduck.com/assets.00/teacher-and-book-icon-2048x1974-gbj3kbyw.png",
                id: 2,
                messages: [{message: "Olá como posso te ajudar?", type: "message recieved"}],
            },
            {
                username: "carlarodrigues",
                nome: "Clara Rodrigues",
                email: "carlarodrigues@gmail.com",
                photo: "https://static-00.iconduck.com/assets.00/teacher-and-book-icon-2048x1974-gbj3kbyw.png",
                id: 3,
                messages: [{message: "Olá como posso te ajudar?", type: "message recieved"}],
            },
            {
                username: "renatomoreira",
                nome: "Renato Moreira",
                email: "renatomoreira@gmail.com",
                photo: "https://static-00.iconduck.com/assets.00/teacher-and-book-icon-2048x1974-gbj3kbyw.png",
                id: 4,
                messages: [{message: "Olá como posso te ajudar?", type: "message recieved"}],
            },
            {
                username: "patriciasilveira",
                nome: "Patrícia Silveira",
                email: "patriciasilveira@gmail.com",
                photo: "https://static-00.iconduck.com/assets.00/teacher-and-book-icon-2048x1974-gbj3kbyw.png",
                id: 5,
                messages: [{message: "Olá como posso te ajudar?", type: "message recieved"}]
            },
            {
                username: "robertonunes",
                nome: "Roberto Nunes",
                email: "robertonunes@gmail.com",
                photo: "https://static-00.iconduck.com/assets.00/teacher-and-book-icon-2048x1974-gbj3kbyw.png",
                id: 6,
                messages: [{message: "Olá como posso te ajudar?", type: "message recieved"}],
            },
            {
                username: "julianamoraes",
                nome: "Juliana Moraes",
                email: "julianamoraes@gmail.com",
                photo: "https://static-00.iconduck.com/assets.00/teacher-and-book-icon-2048x1974-gbj3kbyw.png",
                id: 7,
                messages: [{message: "Olá como posso te ajudar?", type: "message recieved"}]
            },
            {
                username: "victorneiva",
                nome: "Victor Neiva",
                email: "victorNeiva@gmail.com",
                photo: "https://static-00.iconduck.com/assets.00/teacher-and-book-icon-2048x1974-gbj3kbyw.png",
                id: 8,
                messages: [{message: "Olá como posso te ajudar?", type: "message recieved"}],
            }
        ]
    };

    localStorage.setItem("teachers", JSON.stringify(teachersObject));
};

InserirListaProfessoresJson();

// Resgata Lista de professores do local storage
const ObjectTeachersList = JSON.parse(localStorage.getItem("teachers"));
const ArrayTeachers = ObjectTeachersList.teachersArray;
console.log(ArrayTeachers);

// inserindo professores na lista html
   const TeachersBlock = document.querySelector(".teachers-block")

for(let i = 0; i < ObjectTeachersList.teachersArray.length; i++){
    const Teacher = document.createElement("div");
    Teacher.className = "teacher"
    
    const TeacherImage = document.createElement("img");
    TeacherImage.className = "teacher-photo"
    TeacherImage.src = "./assets/teacher-icon.png"
    
    const TeacherInfo = document.createElement("div");
    TeacherInfo.className = "teacher-info"
    
    const TeacherName = document.createElement("span");
    TeacherName.className = "teacher-name"
    TeacherName.innerHTML = ObjectTeachersList.teachersArray[i].nome
    
    
    const LastMessage = document.createElement("span");
    LastMessage.className = "last-message"
    LastMessage.innerHTML = "Ultima Mensagem"
    
    
    TeacherInfo.appendChild(TeacherName)
    TeacherInfo.appendChild(LastMessage)

    Teacher.appendChild(TeacherImage);
    Teacher.appendChild(TeacherInfo);

    TeachersBlock.appendChild(Teacher);
}


let Teachers = document.querySelectorAll(".teacher")

Teachers.forEach((teacher, index) => {
    teacher.addEventListener('click', function(){

        const Display = document.querySelector(".messages-block");
        Display.innerHTML = ""


        const CabecalhoMensagens = document.querySelector(".message-top")
        CabecalhoMensagens.innerHTML = ''

        const InfoProfessor = document.createElement('div')
        InfoProfessor.className = "teacher-message"

        const ContainerNomeProfessor = document.createElement('div')
        ContainerNomeProfessor.className = "teacher-info"
        
        const ImagemProfessor = document.createElement('img')
        ImagemProfessor.src = ArrayTeachers[index].photo;
        ImagemProfessor.className = "teacher-photo"

        const NomeProfessor = document.createElement('span')
        NomeProfessor.className = "teacher-name"
        NomeProfessor.innerHTML = ArrayTeachers[index].nome

        ContainerNomeProfessor.appendChild(NomeProfessor)
        
        InfoProfessor.appendChild(ImagemProfessor)
        InfoProfessor.appendChild(ContainerNomeProfessor)

        CabecalhoMensagens.appendChild(InfoProfessor)

        const input = document.querySelector('.message-input');
        const button = document.querySelector('.message-sender');

        button.addEventListener('click', function(){
            ArrayTeachers[index].messages.push({message: input.value, type: "sent"})
            
            const Display = document.querySelector(".messages-block");
            Display.innerHTML = ""

            ArrayTeachers[index].messages.forEach((mensagem) => {
            const MensagemTela = document.createElement("div")
            MensagemTela.className = `${mensagem.type} message`;
            MensagemTela.innerHTML = mensagem.message
            Display.appendChild(MensagemTela);
            input.value = '';
            })

        })

        ArrayTeachers[index].messages   .forEach((mensagem) => {
            const Display = document.querySelector(".messages-block");
            const MensagemTela = document.createElement("div")
            MensagemTela.className = `${mensagem.type} message`;
            MensagemTela.innerHTML = mensagem.message

            Display.appendChild(MensagemTela);
        })
    })
})

