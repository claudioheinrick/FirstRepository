let amigos = []; // Lista completa de amigos
let amigosRestantes = []; // Lista de amigos ainda não sorteados

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    amigosRestantes.push(nome); // Adiciona também na lista de sorteio
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultadoDiv = document.getElementById("resultado");

    if (amigosRestantes.length === 0) {
        resultadoDiv.innerHTML = `<li><strong>Todos os nomes já foram sorteados!</strong></li>`;
        return;
    }

    // Escolher um nome aleatório da lista restante
    const indexSorteado = Math.floor(Math.random() * amigosRestantes.length);
    const amigoSorteado = amigosRestantes.splice(indexSorteado, 1)[0]; // Remove o nome sorteado da lista

    // Exibir o resultado na tela
    resultadoDiv.innerHTML = `<li>Seu amigo sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
