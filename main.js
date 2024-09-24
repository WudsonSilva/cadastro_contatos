document.getElementById("form-contato").addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    const nomeValido = /^[a-zA-Z\s]+$/.test(nome);

    const telefoneValido = /^[0-9]+$/.test(telefone);

    if (!nomeValido) {
        alert("Por favor, insira um nome válido (somente letras).");
        return;
    }

    if (!telefoneValido) {
        alert("Por favor, insira um número de telefone válido (somente números).");
        return;
    }

    const tabela = document.getElementById("tabela-contatos").getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();

    const celulaNome = novaLinha.insertCell(0);
    const celulaTelefone = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;
})

