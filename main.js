const igualBtn = document.getElementById("igual");
const resultado = document.getElementById("resultado");
const btn = document.getElementsByClassName("botao");

window.addEventListener("keypress", (event)=> {
    resultado.focus();
    if(event.key == "Enter"){
        CalculaResultado();
    }
    else if(event.key == 'Backspace') {
        Especiais('C');
    }
});

function AdicionaNum(n) {
    let txt = resultado.value;
    resultado.value = txt+n;
}

function Especiais(n) {
    if(n == "AC") {
       resultado.value = '';
    }
    else if(n == "C") {
        let txt = resultado.value;
        txt = txt.slice(0, txt.length-1) ;
        resultado.value = txt;
    }
    else if (n == "()") {
       resultado.value += "()";
    }
    else if (n == "√") {
        let valor = ResolveExpressao(resultado.value);
        if (valor === undefined || valor === NaN) {
            valor = "Algo deu errado :(";
        }
        resultado.value = Math.sqrt(valor);
    }
}

function CalculaResultado() {
    if(resultado.value == ''){
        return
    }
    expressao = resultado.value.replaceAll(",", ".");
    let valor = ResolveExpressao(expressao);
        if (isNaN(valor)) {
            valor = "Algo deu errado :(";
        }
    resultado.value = valor;
}