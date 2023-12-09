// carrega o cabeçalho e o footer na pagina.
$(        
    function () {
        $("#tagCabecalho").load("../Cabeçalho/cabecalho.html");
        $("#tagRodape").load("../Rodapé/rodape.html");

    // aguarda o carregamento do cabeçalho para inserir a logo.
        setTimeout(() => {
            var logo = document.getElementById('logo')
            logo.src = "../assets/logoEduPop.png"
        }, 250)
    }
);


// Inseri lista de usuarios em formato JSON no local storage!
function InserirListUsuariosJson() {
    let usersObject = {
    usersArray: [
        {
            username: "leomendesrch",
            nome: "Leonardo Mendes Rocha",
            email: "leomendesrch2005@gmail.com",
            pais: "Brasil",
            gender: "masculino"
        },
        {
            username: "tati_ribeiro",
            nome: "Tatiane Ribeiro",
            email: "tati_ribeiro@gmail.com",
            pais: "Brasil",
            gender: "feminino"
        },
        {
            username: "marcio_silva",
            nome: "Márcio da Silva",
            email: "marcio_silva@hotmail.com",
            pais: "Brasil",
            gender: "masculino"
        },
        {
            username: "carol_souza",
            nome: "Carolina Souza",
            email: "carol_souza@gmail.com",
            pais: "Brasil",
            gender: "feminino"
        },
        {
            username: "fernanda_oliveira",
            nome: "Fernanda Oliveira",
            email: "fernanda_oliveira@yahoo.com",
            pais: "Brasil",
            gender: "feminino"
        },
        {
            username: "pedro_santos",
            nome: "Pedro Santos",
            email: "pedro.santos@gmail.com",
            pais: "Brasil",
            gender: "masculino"
        },
        {
            username: "amanda_costa",
            nome: "Amanda Costa",
            email: "amanda.costa@hotmail.com",
            pais: "Brasil",
            gender: "feminino"
        },
        {
            username: "bruno_rodrigues",
            nome: "Bruno Rodrigues",
            email: "bruno_rodrigues@gmail.com",
            pais: "Brasil",
            gender: "masculino"
        },
        {
            username: "rafaela_almeida",
            nome: "Rafaela Almeida",
            email: "rafaela_almeida@yahoo.com",
            pais: "Brasil",
            gender: "feminino"
        },
        {
            username: "gustavo_gomes",
            nome: "Gustavo Gomes",
            email: "gustavo_gomes@gmail.com",
            pais: "Brasil",
            gender: "masculino"
        },
        {
            username: "luiza_nascimento",
            nome: "Luiza Nascimento",
            email: "luiza.nascimento@hotmail.com",
            pais: "Brasil",
            gender: "feminino"
        },
        {
            username: "rodrigo_machado",
            nome: "Rodrigo Machado",
            email: "rodrigo.machado@gmail.com",
            pais: "Brasil",
            gender: "masculino"
        },
        {
            username: "ana_silva",
            nome: "Ana Silva",
            email: "ana.silva@yahoo.com",
            pais: "Brasil",
            gender: "feminino"
        },
        {
            username: "mariana_santos",
            nome: "Mariana Santos",
            email: "mariana_santos@gmail.com",
            pais: "Brasil",
            gender: "feminino"
        },
        {
            username: "rafael_pereira",
            nome: "Rafael Pereira",
            email: "rafael_pereira@hotmail.com",
            pais: "Brasil",
            gender: "masculino"
        },
        {
            username: "lucas_oliveira",
            nome: "Lucas Oliveira",
            email: "lucas.oliveira@gmail.com",
            pais: "Brasil",
            gender: "masculino"
        }
    ]
};
    localStorage.setItem("users", JSON.stringify(usersObject));
};

InserirListUsuariosJson();

// Resgata Lista de usuarios do local storage
const ObjectUsersList = JSON.parse(localStorage.getItem("users"));
console.log(ObjectUsersList);

// inserindo usuarios na tabela de usuarios
const tableList = document.querySelector(".table-list")

for(let i = 0; i < ObjectUsersList.usersArray.length; i++){
    const tableRow = document.createElement("tr");

    const UserIconAndUsernameData = document.createElement("td");
    const userIcon = document.createElement("img");
    userIcon.className = "user-icon"
    const username = document.createTextNode(ObjectUsersList.usersArray[i].username);
    userIcon.src = ObjectUsersList.usersArray[i].gender == "masculino"? "./assets/man.png" : "./assets/woman.png"
    UserIconAndUsernameData.appendChild(userIcon);
    UserIconAndUsernameData.appendChild(username);

    const NameData = document.createElement("td");
    NameData.innerText = ObjectUsersList.usersArray[i].nome;

    const EmailData = document.createElement("td");
    EmailData.innerText = ObjectUsersList.usersArray[i].email;

    const CountryData = document.createElement("td");
    CountryData.innerText = ObjectUsersList.usersArray[i].pais;
    
    tableRow.appendChild(UserIconAndUsernameData)
    tableRow.appendChild(NameData)
    tableRow.appendChild(EmailData)
    tableRow.appendChild(CountryData)

    tableList.appendChild(tableRow)
}
