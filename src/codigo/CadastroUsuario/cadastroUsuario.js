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


//// JS do Olho Login ////
let botao = document.querySelector('.fa-eye')
botao.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    }
    else {
        inputSenha.setAttribute('type', 'password')
    }
}
)


//// JS do  Olho Cadastro ////
let cadastro = document.querySelector('.fa-eye')
cadastro.addEventListener('click', () => {
    let inputSenha2 = document.querySelector('#cadastro')
    if (inputSenha2.getAttribute('type') == 'password') {
        inputSenha2.setAttribute('type', 'text')
    }
    else {
        inputSenha2.setAttribute('type', 'password')
    }
}
)
//// Fim JS do Olho Cadastro ////

//// Regras e a Lógica do Cadastro ////

//// Regras e a Lógica dos Inputs do Cadastro ////
let nomeCadastro = document.querySelector('#nome')
let usuarioCadastro = document.querySelector('#usuario')
let senhaCadastro = document.querySelector('#senha')
let senhaCadastroConfirmar = document.querySelector('#cadastro')

//// Regras e a Lógica dos Label e Input do Cadastro ////
let labelNomeCadastro = document.querySelector('#labelNome')
let labelUsuarioCadastro = document.querySelector('#labelUsuario')
let labelSenhaCadastro = document.querySelector('#labelSenha')
let labelSenhaCadastroConfirmar = document.querySelector('#labelConfirmarSenha')

//// Variáveis de Validação ////
let validNome = false;
let validApelido = false;
let validSenha = false;
let validConfirmarSenha = false;

//// variável da Mensagem de Erro ////
let mensagemSucesso = document.querySelector('#mensagemSuccess')
let mensagemErro = document.querySelector('#mensagemErro')


//// variável da Mensagem de seucesso ////



//// Convertendo o Input Senha e Confirmar senha para inteiro
////let senhaConvertida = parseInt(senha) 

//// Configuração do Nome ////

nomeCadastro.addEventListener('keyup', () => {
    if (nomeCadastro.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red;')
        nomeCadastro.setAttribute('style', 'border-color: red')
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres.'
        validNome = false;
    }
    else {
        labelNome.setAttribute('style', 'color: #32CD32;')
        nomeCadastro.setAttribute('style', 'border-color: #32CD32')
        labelNome.innerHTML = 'Nome '
        validNome = true;
    }
})

/////////////////////////
//// Configuração do Usuário ////

usuarioCadastro.addEventListener('keyup', () => {
    if (usuarioCadastro.value.length < 5) {
        labelUsuarioCadastro.setAttribute('style', 'color: red;')
        usuarioCadastro.setAttribute('style', 'border-color: red')
        labelUsuarioCadastro.innerHTML = 'Usuário *Insira no mínimo 5 caracteres.'
        validApelido = false;
    }
    else {
        labelUsuario.setAttribute('style', 'color: #32CD32;')
        usuarioCadastro.setAttribute('style', 'border-color: #32CD32')
        labelUsuario.innerHTML = 'Usuário '
        validApelido = true;
    }
})

/////////////////////////
//// Senha do Usuário ////

senhaCadastro.addEventListener('keyup', () => {


    if (senhaCadastro.value.length < 6) {
        labelSenhaCadastro.setAttribute('style', 'color: red;')
        senhaCadastro.setAttribute('style', 'border-color: red')
        labelSenhaCadastro.innerHTML = 'Senha *Insira no mínimo 6 dígitos.'
        validSenha = false;
    }
    else {
        labelSenhaCadastro.setAttribute('style', 'color: #32CD32;')
        senhaCadastro.setAttribute('style', 'border-color: #32CD32')
        labelSenhaCadastro.innerHTML = 'Senha '
        validSenha = true;
    }
})

//// Senha do Usuário ////

senhaCadastroConfirmar.addEventListener('keyup', () => {

    if (senhaCadastro.value === senhaCadastroConfirmar.value && senhaCadastro.value > 1) {

        labelSenhaCadastroConfirmar.setAttribute('style', 'color: #32CD32;')
        senhaCadastroConfirmar.setAttribute('style', 'border-color: #32CD32')
        labelSenhaCadastroConfirmar.innerHTML = 'Senha Confirmada '
        validConfirmarSenha = true;
    }
    

    

    else {
        labelSenhaCadastroConfirmar.setAttribute('style', 'color: red;')
        senhaCadastroConfirmar.setAttribute('style', 'border-color: red')
        labelSenhaCadastroConfirmar.innerHTML = 'Use somente números, e veja se estão iguais.'
        validConfirmarSenha = false;

    }

})

senhaCadastro.addEventListener('keyup', () => {

    if (senhaCadastro.value === senhaCadastroConfirmar.value && senhaCadastro.value > 1) {

        labelSenhaCadastroConfirmar.setAttribute('style', 'color: #32CD32;')
        senhaCadastroConfirmar.setAttribute('style', 'border-color: #32CD32')
        labelSenhaCadastroConfirmar.innerHTML = 'Senha Confirmada '
    }

    else {
        labelSenhaCadastroConfirmar.setAttribute('style', 'color: red;')
        senhaCadastroConfirmar.setAttribute('style', 'border-color: red')
        labelSenhaCadastroConfirmar.innerHTML = 'Senha não confirmada, corrija.'

    }

})

function cadastrar() {
    if (validNome == true && validApelido == true && validSenha == true && validConfirmarSenha == true) {
          
            mensagemSucesso.setAttribute('style' , 'display: block;')   
            mensagemErro.setAttribute('style' , 'display: none;')  
            
            let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]')
            listaUsuario.push(
                {
                    nomeCad: nomeCadastro.value,
                    usuarioCad: usuarioCadastro.value,
                    senhaCad: senhaCadastro.value
                }
            )
            
            localStorage.setItem('listaUsuario' , JSON.stringify(listaUsuario))
            setTimeout(()=>{
                window.location.href ='login.html'
        }, 3000)
    
       

    }
    else {
        mensagemErro.setAttribute('style' , 'display: block;')  
        mensagemSucesso.setAttribute('style' , 'display: none;')

    }
}


/*
  nomeCadastro.addEventListener('keyup', () => {
            location.reload()
        })
        usuarioCadastro.addEventListener('keyup', () => {
            location.reload()
        })
        senhaCadastro.addEventListener('keyup', () => {
            location.reload()
        })
        senhaCadastroConfirmar.addEventListener('keyup', () => {
            location.reload()
        })
        */
