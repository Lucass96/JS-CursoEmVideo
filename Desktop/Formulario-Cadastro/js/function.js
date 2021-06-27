//VALIDACAO DE NOME
var confirmacao = true
$(function() {
    $('#botao').click(function() {
        nome_input = $("input[name='nome']")

        if (nome_input.val() == "" || nome_input.val() == null) {
            $("#erro-nome").html("O nome é obrigatório.")
            confirmacao = false
            return (false)
        }

        return (true)
    })
})

//VALIDACAO DE CPF
$(function() {
    $('#botao').click(function() {
        cpf_input = $("input[name='cpf']")

        if (cpf_input.val() == "" || cpf_input.val() == null) {
            $("#erro-cpf").html("O CPF é obrigatório.")
            confirmacao = false
            return (false)
        }

        return (true)
    })
})

$(function() {
    $('#botao').click(function() {
        cpf_input = $("input[name='cpf']")

        if ($('#cpf').validateCPF()) {
            $("#erro-cpf").html("O CPF é valido.")
        } else {
            $("#erro-cpf").html("O CPF é invalido.")
            alert('O CPF é invalido.')
            confirmacao = false
            return (false)
        }
        return (true)
    })
})

//VALIDACAO DE EMAIL
$(function() {
    $('#botao').click(function() {
        email_input = $("input[name='email']")

        if (email_input.val() == "" || email_input.val() == null) {
            $("#erro-email").html("O endereço de email é obrigatório.")
            confirmacao = false
            return (false)
        }

        return (true)
    })
})

//VALIDACAO DATA DE NASCIMENTO
$(function() {
    $('#botao').click(function() {
        data_input = $("input[name='data']")
        data2 = new Date()
        dia = String(data2.getDate()).padStart(2, '0')
        mes = String(data2.getMonth() + 1).padStart(2, '0')
        ano = data2.getFullYear()
        dataAtual = dia + mes + ano

        if (data_input > dataAtual) {
            $("#erro-nasc").html("A data de nascimento é invalido.")
            alert("A data de nascimento é invalido.")
            confirmacao = false
            return (false)
        }
        return (true)
    })
})


//VALIDACAO DE SENHA
$(function() {
    $('#botao').click(function() {
        senha_input = $("input[name='senha']")

        if (senha_input.val() == "" || senha_input.val() == null) {
            $("#erro-senha").html("A senha é obrigatório.")
            confirmacao = false
            return (false)
        }

        return (true)
    })
})


//CONFIRMACAO DE SENHA
$(function() {
    $('#botao').click(function() {
        csenha_input = $("input[name='csenha']")

        if (csenha_input.val() == "" || csenha_input.val() == null) {
            $("#erro-csenha").html("A confirmação de senha é obrigatório.")
            confirmacao = false
            return (false)
        }
        if (csenha_input.val() != senha_input.val()) {
            $("#erro-csenha").html("As senhas devem ser iguais.")
            confirmacao = false
            return (false)
        }

        return (true)
    })
})

// VALIDACAO DO BOTAO CADASTRO
$(function() {
    $('#botao').click(function() {
        if (confirmacao == true) {
            alert("Cadastro feito com sucesso!")
        }
    })
})

//RESET DO BOTAO CANCELAR
$(document).ready(function() {
    $("#bcancelar").click(function() {
        $("#form")[0].reset()
    })
})

//MASCARA CPF
$(document).ready(function() {
    $("#cpf").mask("000.000.000-00")
})