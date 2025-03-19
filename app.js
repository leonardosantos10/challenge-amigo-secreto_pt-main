//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.




function adicionarAmigo() {
    const inputName = document.getElementById("amigo"); 
    const nome = inputName.value.trim(); // Obtém o valor do campo e remove espaços extras

    if (nome === "") {
        alert("Por favor, insira um nome válido!"); // Valida se o campo está vazio
    } else {
        // Cria um novo item de lista e adiciona o nome
        const listaAmigos = document.getElementById("listaAmigos");
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);

        // Limpa o campo de entrada após adicionar o nome
        inputName.value = "";
        inputName.focus(); // Foca novamente no campo de texto
    }
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById("listaAmigos"); // Captura a lista de amigos
    const amigos = Array.from(listaAmigos.getElementsByTagName("li")); // Cria um array com os nomes da lista

    if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione alguns nomes antes de sortear."); // Verifica se a lista está vazia
    } else {
        // Sorteia um nome aleatoriamente da lista
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio].textContent;

        // Exibe o resultado do sorteio
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
    }
}
