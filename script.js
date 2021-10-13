const ligarDesligar = document.getElementById ('botaoLigaDesliga');
const lampada = document.getElementById ('lamp');

function lampadaEstaQuebrada () {
    return lampada.src.indexOf ('quebrada') > -1;
}

function lampadaLigada () {
        if (!lampadaEstaQuebrada() ) {
            lampada.src = './img/ligada.jpg';
        }  
}

function lampadaDesligada () {
    if (!lampadaEstaQuebrada() ) {
        lampada.src = './img/desligada.jpg';
    }
}

function lampadaQuebrada () {
    lampada.src = './img/quebrada.jpg';
}

function lampadaLigadaDesligada () {
    if ( ligarDesligar.textContent == 'Ligar' ) {
        lampadaLigada();
        ligarDesligar.textContent = 'Desligar';
    } else {
        lampadaDesligada();
        ligarDesligar.textContent = 'Ligar';
    }
}

ligarDesligar.addEventListener ('click', lampadaLigadaDesligada);

lampada.addEventListener ('dblclick', lampadaQuebrada);
lampada.addEventListener ('mouseleave', lampadaDesligada);
lampada.addEventListener ('mouseover', lampadaLigada);
