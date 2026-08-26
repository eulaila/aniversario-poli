const telas = document.querySelectorAll(".tela");

function mostrarTela(id) {
    telas.forEach(function (tela) {
        tela.classList.remove("ativa");
    });

    document.getElementById(id).classList.add("ativa");
}

/* SENHA DE ENTRADA */
const inputSenhaEntrada = document.getElementById("inputSenhaEntrada");
const botaoSenhaEntrada = document.getElementById("botaoSenhaEntrada");
const erroSenhaEntrada = document.getElementById("erroSenhaEntrada");

function verificarSenhaEntrada() {
    const senhaDigitada = inputSenhaEntrada.value.trim();

    if (senhaDigitada === "Ta cheia Poliana?") {
        erroSenhaEntrada.textContent = "";
        mostrarTela("inicio");
    } else {
        erroSenhaEntrada.textContent = "Hmmm... acho que você não é a Poli 👀";
    }
}

botaoSenhaEntrada.addEventListener("click", verificarSenhaEntrada);

inputSenhaEntrada.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        verificarSenhaEntrada();
    }
});

/* ABERTURA */
document.getElementById("botaoComecar").addEventListener("click", function () {
    mostrarTela("missao");
});

/* MISSÃO */
document.getElementById("botaoMissao").addEventListener("click", function () {
    mostrarTela("senhaLevel");
});

/* SENHA DO LEVEL */
const inputSenhaLevel = document.getElementById("inputSenhaLevel");
const botaoSenhaLevel = document.getElementById("botaoSenhaLevel");
const erroSenhaLevel = document.getElementById("erroSenhaLevel");

function verificarSenhaLevel() {
    const senhaDigitada = inputSenhaLevel.value.trim().toUpperCase();

    if (senhaDigitada === "GOGRAFIA") {
        erroSenhaLevel.textContent = "";
        mostrarTela("levelUp");
    } else {
        erroSenhaLevel.textContent = "Conhecimento geográfico insuficiente 👀";
    }
}

botaoSenhaLevel.addEventListener("click", verificarSenhaLevel);

inputSenhaLevel.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        verificarSenhaLevel();
    }
});

/* LEVEL 20 */
document.getElementById("botaoMemorias").addEventListener("click", function () {
    mostrarTela("memoria1");
});

/* MEMÓRIAS */
document.getElementById("botaoMemoria1").addEventListener("click", function () {
    mostrarTela("memoria2");
});

document.getElementById("botaoMemoria2").addEventListener("click", function () {
    mostrarTela("memoria3");
});

document.getElementById("botaoMemoria3").addEventListener("click", function () {
    mostrarTela("memoria4");
});

document.getElementById("botaoMemoria4").addEventListener("click", function () {
    mostrarTela("memoria5");
});

document.getElementById("botaoMemoria5").addEventListener("click", function () {
    mostrarTela("memoria6");
});

document.getElementById("botaoMemoria6").addEventListener("click", function () {
    mostrarTela("carta");
});

/* CARTA */
document.getElementById("botaoCarta").addEventListener("click", function () {
    mostrarTela("final");
});

/* RECOMEÇAR */
document.getElementById("botaoReiniciar").addEventListener("click", function () {
    inputSenhaEntrada.value = "";
    inputSenhaLevel.value = "";

    erroSenhaEntrada.textContent = "";
    erroSenhaLevel.textContent = "";

    mostrarTela("senhaEntrada");
});

/* PÉTALAS */
const containerPetalas = document.querySelector(".petalas");

const coresPetalas = [
    "#f8bfd4",
    "#f6acc6",
    "#ffd3e0",
    "#ffe1ea",
    "#f4c7d7",
    "#ffc4d0",
    "#f9dbe5",
    "#f5b2c8",
    "#ffd6b8",
    "#ffe1b5",
    "#d7efc2",
    "#dcefcf"
];

function criarPetala() {
    const petala = document.createElement("div");
    petala.classList.add("petala");

    const tamanho = Math.random() * 14 + 9;
    petala.style.width = `${tamanho}px`;
    petala.style.height = `${tamanho * 0.55}px`;

    petala.style.left = `${Math.random() * 100}vw`;

    const indiceCor = Math.floor(Math.random() * coresPetalas.length);
    petala.style.backgroundColor = coresPetalas[indiceCor];

    const duracao = Math.random() * 7 + 7;
    petala.style.animationDuration = `${duracao}s`;

    const atraso = Math.random() * 1.2;
    petala.style.animationDelay = `${atraso}s`;

    containerPetalas.appendChild(petala);

    setTimeout(function () {
        petala.remove();
    }, (duracao + atraso) * 1000 + 1000);
}

setInterval(criarPetala, 180);

for (let i = 0; i < 18; i++) {
    setTimeout(criarPetala, i * 80);
}
/* =========================================
   BOTÕES DE VOLTAR
========================================= */

document
    .getElementById("voltarMemoria1")
    .addEventListener("click", function () {
        mostrarTela("levelUp");
    });


document
    .getElementById("voltarMemoria2")
    .addEventListener("click", function () {
        mostrarTela("memoria1");
    });


document
    .getElementById("voltarMemoria3")
    .addEventListener("click", function () {
        mostrarTela("memoria2");
    });


document
    .getElementById("voltarMemoria4")
    .addEventListener("click", function () {
        mostrarTela("memoria3");
    });


document
    .getElementById("voltarMemoria5")
    .addEventListener("click", function () {
        mostrarTela("memoria4");
    });


document
    .getElementById("voltarMemoria6")
    .addEventListener("click", function () {
        mostrarTela("memoria5");
    });


document
    .getElementById("voltarCarta")
    .addEventListener("click", function () {
        mostrarTela("memoria6");
    });