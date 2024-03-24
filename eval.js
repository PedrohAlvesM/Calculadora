function ValidaParentesis(expressao) {
    let valido = true;
    let pilhaParentesis = [];

    for (let i = 0; i < expressao.length; i++) {
        if (expressao[i] === "(") {
            pilhaParentesis.push(expressao[i]);
        }
        else if (expressao[i] === ")") {
            if (pilhaParentesis.length === 0) {
                valido = false;
                break
            }
            pilhaParentesis.pop();
        }
    }
    if (pilhaParentesis.length > 0) {
        valido = false
    }

    return valido
}
function ExpressaoComoArray(expressao) {
    let expressaoArr = [];
    let num = '';

    for (let i = 0; i < expressao.length; i++) {
        if (isNaN(expressao[i]) && expressao[i] !== '.') {
            if (num !== '') {
                expressaoArr.push(num);
                num = '';
            }
            expressaoArr.push(expressao[i]);
        }
        else {
            num += expressao[i];
        }
    }

    if (num !== '') {
        expressaoArr.push(num);
    }
    return expressaoArr
}

function Privilegio(a, b) {
    let privilegio = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2,
        "^": 3,
    }
    if (a === "(" || b === ")") {
        return false
    }
    else if (b === "(") {
        return true
    }
    return privilegio[a] > privilegio[b]
}
function InfixaParaPosfixa(expressao) {
    let posfixa = [];
    let pilhaOp = [];

    for (let i = 0; i < expressao.length; i++) {
        if (!isNaN(expressao[i])) {
            posfixa.push(expressao[i]);
        }
        else if (expressao[i] === "(") {
            pilhaOp.push(expressao[i]);
        }
        else if (expressao[i] === ")") {
            while (pilhaOp.length > 0 && pilhaOp[pilhaOp.length-1] !== "(") {
                let temp = pilhaOp.pop();
                posfixa.push(temp);
            }
            pilhaOp.pop();
        }
        else {
            while (pilhaOp.length > 0 && Privilegio(pilhaOp[pilhaOp.length-1], expressao[i])) {
                let temp = pilhaOp.pop();
                posfixa.push(temp);
            }
            pilhaOp.push(expressao[i]);
        }
    }
    while (pilhaOp.length > 0) {
        let temp = pilhaOp.pop();
        posfixa.push(temp);
    }

    return posfixa
}

function Resultado(a, operador, b) {
    switch (operador) {
        case "+":
            return a+b
        case "-":
            return a-b
        case "*":
            return a*b
        case "/":
            return a/b
        case "^":
            return a**b
    }
}
function ResolveExpressao(expressao) {
    let parentesis = ValidaParentesis(expressao);

    if (!parentesis) {
        return "Parentesis estão errados"
    }

    let expressaoTratada = ExpressaoComoArray(expressao);
    expressaoTratada = InfixaParaPosfixa(expressaoTratada);
    
    pilhaExpressao = [];

    for (let i = 0; i < expressaoTratada.length; i++) {
        if (isNaN(expressaoTratada[i])) {
            let op1 = Number(pilhaExpressao.pop());
            let op2 = Number(pilhaExpressao.pop());
            pilhaExpressao.push(Resultado(op2, expressaoTratada[i], op1));
        }
        else {
            pilhaExpressao.push(expressaoTratada[i]);
        }
    }
    return pilhaExpressao[0]
}