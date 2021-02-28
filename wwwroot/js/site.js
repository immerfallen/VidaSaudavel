
function Cadastrar() {
    let parametros = {
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensagem: $("#mensagem").val()
    }
    $.post("/Home/Cadastrar", parametros)
        .done(function (data) {
            if (data.status == "OK") {
                $("#frmCadastro").after("<h2>Cadastrado com sucesso! </h2>");
                $("#frmCadastro").hide();
                $("#CabecalhoForm").hide();
                $("#TextoForm").hide();
            }
            if (data.status == "ERR") {
                $("#frmCadastro").after("<h2>"+ data.mensagem + "</h2>");
                $("#frmCadastro").hide();
                $("#CabecalhoForm").hide();
                $("#TextoForm").hide();
            }          
            

        })
        
}

$(document).ready(function () {
    $("#frmCadastro").submit(
        function (e) {
            e.preventDefault();
            Cadastrar();
    })
})
