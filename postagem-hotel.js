function enviarReserva() {
    // Obter valores dos campos
    var nome = document.getElementById("nome").value;
    var dataEntrada = document.getElementById("dataEntrada").value;
    var observacoes = document.getElementById("observacoes").value;
    var email = document.getElementById("email").value;
    var dataSaida = document.getElementById("dataSaida").value;
    var adultos = document.getElementById("adultos").value;
    var criancas = document.getElementById("criancas").value;

    // Criar objeto com os dados
    var dadosReserva = {
        nome: nome,
        dataEntrada: dataEntrada,
        observacoes: observacoes,
        email: email,
        dataSaida: dataSaida,
        adultos: adultos,
        criancas: criancas
    };

    // Enviar dados para o servidor JSON (substitua a URL pelo seu endpoint)
    fetch('http://localhost:3000/solicitacoes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosReserva),
    })
    .then(response => response.json())
    .then(data => {
        // Exibir resultado na div com id "result"
        document.getElementById("result").innerHTML = "Reserva enviada com sucesso!";
        console.log('Success:', data);

        document.getElementById("nome").value = "";
        document.getElementById("dataEntrada").value = "";
        document.getElementById("observacoes").value = "";
        document.getElementById("email").value = "";
        document.getElementById("dataSaida").value = "";
        document.getElementById("adultos").value = "";
        document.getElementById("criancas").value = "";
    })
    .catch((error) => {
        console.error('Error:', error);
        // Exibir mensagem de erro na div com id "result"
        document.getElementById("result").innerHTML = "Erro ao enviar reserva. Por favor, tente novamente.";
    });
}
