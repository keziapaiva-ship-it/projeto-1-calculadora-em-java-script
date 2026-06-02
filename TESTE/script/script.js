const display = document.getElementById("display");

function adicionar(valor) {
    const ultimo = display.value.slice(-1);

    const operadores = ["+", "-", "×", "÷"];

    if (operadores.includes(valor) && operadores.includes(ultimo)) {
        return;
    }

    display.value += valor;
}
function porcentagem() {
    try {
        let expressao = display.value;

        // transforma número em porcentagem
        if (expressao) {
            display.value = eval(expressao) / 100;
        }
    } catch {
        display.value = "Erro";
    }
}



//limpa tudo//
function limpar() {
    display.value = "";
}

//calcular//

function calcular() {
    try {
        if (!display.value) return;

        let expressao = display.value
            .replaceAll("×", "*")
            .replaceAll("÷", "/");

        const resultado = new Function("return " + expressao)();

        display.value = resultado;
    } catch {
        display.value = "Erro";
    }
}

//apaga so um numero por vez//

function apagar() {
    display.value = display.value.slice(0, -1);
}


//botao claro e escuro//

function toggleTema() {
    document.body.classList.toggle("claro");
    
    const botao = document.querySelector("button");

    if (document.body.classList.contains("claro")) {
        botao.innerHTML = "☀️";
    } else {
        botao.innerHTML = "🌙";
    }
}