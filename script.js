const input = document.getElementById("taskInput");
const button = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

button.addEventListener("click", adicionarTarefa);

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const texto = input.value.trim();

    if (texto === ""){
        alert("Escreva algo antes de adicionar.");
        return;
    }

    const item = document.createElement("li");
    const grupoEsquerda = document.createElement("div");
    grupoEsquerda.className = "esquerda";
    
    const botaoConcluido = document.createElement("button");
    botaoConcluido.className ="naoConcluido";
    botaoConcluido.textContent = "";
    botaoConcluido.addEventListener("click", function() {
        if (botaoConcluido.classList.contains("concluido")) {
            botaoConcluido.classList.remove("concluido");
            botaoConcluido.classList.add("naoConcluido");
            botaoConcluido.textContent = "";
        } else {
            botaoConcluido.classList.remove("naoConcluido");
            botaoConcluido.classList.add("concluido");
            botaoConcluido.textContent = "✓";
        }
    })

    const textoTarefa = document.createElement("span");
    textoTarefa.textContent = texto;

    grupoEsquerda.appendChild(botaoConcluido);
    grupoEsquerda.appendChild(textoTarefa);
    
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";
    botaoRemover.className = "remover";
    botaoRemover.addEventListener("click", function() {
        item.remove();
    });
    
    item.appendChild(grupoEsquerda);
    item.appendChild(botaoRemover);
    taskList.appendChild(item);
    
    input.value = "";
    input.focus();
}