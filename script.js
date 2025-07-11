const scenes = {
    inicio: {
        text: "DIO acorda em uma floresta sombria, sem memórias. Há dois caminhos à frente.",
        choices: [
            { text: "Seguir o caminho iluminado.", next: "caminhoLuz" },
            { text: "Seguir o caminho escuro.", next: "caminhoEscuro" }
        ]
    },
    caminhoLuz: {
        text: "DIO encontra um velho sábio que lhe dá um mapa misterioso.",
        choices: [
            { text: "Aceitar a ajuda do sábio.", next: "ajudaSábio" },
            { text: "Ignorar o sábio e seguir sozinho.", next: "ignoraSábio" }
        ]
    },
    caminhoEscuro: {
        text: "DIO é cercado por sombras vivas. Ele precisa agir rápido.",
        choices: [
            { text: "Lutar com as sombras.", next: "lutaSombras" },
            { text: "Fugir para a floresta.", next: "fugaFloresta" }
        ]
    },
    ajudaSábio: {
        text: "Com o mapa, DIO descobre o caminho para um templo antigo. Final: Caminho da Luz.",
        choices: []
    },
    ignoraSábio: {
        text: "Sem ajuda, DIO se perde na floresta. Final: Caminho da solidão.",
        choices: []
    },
    lutaSombras: {
        text: "DIO derrota as sombras, mas fica gravemente ferido. Final: Vitória com cicatrizes.",
        choices: []
    },
    fugaFloresta: {
        text: "DIO escapa, mas é amaldiçoado pelas sombras. Final: Maldição eterna.",
        choices: []
    }
};

let currentScene = "inicio";

function renderScene() {
    const scene = scenes[currentScene];
    const sceneText = document.getElementById("scene-text");
    const choicesDiv = document.getElementById("choices");

    sceneText.textContent = scene.text;
    choicesDiv.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => {
            currentScene = choice.next;
            renderScene();
        };
        choicesDiv.appendChild(button);
    });
}

renderScene();