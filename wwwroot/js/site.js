
function Cadastrar() {
    let parametros = {
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensagem: $("#mensagem").val()
    }
    $.post("/Home/Cadastrar", parametros)
        .done(function () {
            $("#frmCadastro").after("<h2>Cadastrado com sucesso! </h2>");
            $("#frmCadastro").hide();
            $("#CabecalhoForm").hide();
            $("#TextoForm").hide();

        })
        .fail(function () {
            $("#frmCadastro").after("<h2>Cadastrado não realizado! </h2>");
            $("#frmCadastro").hide();
            $("#CabecalhoForm").hide();
            $("#TextoForm").hide();
        })
}

$(document).ready(function () {
    $("#frmCadastro").submit(
        function (e) {
            e.preventDefault();
            Cadastrar();
    })
})
