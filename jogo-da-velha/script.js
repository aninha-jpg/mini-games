let tabuleiro = window.document.getElementsByClassName("div.xoro");

let jogadorDaVez = window.document.getElementsByClassName("p.jogadorDaVez");

let jogadasVencedoras = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [2, 5, 8],
    [6, 7, 8],
];

tabuleiro.addEventListener("click", function jogadorDaVez(jogadaDaVez){
    const divEscolhida = jogadaDaVez.target;

});

/* 



Primeiro preciso fazer com que a vez do jogador passe a cada rodada.

se o jogador completar uma reta ou diagonal, vence o jogo.

se nenhum dos dois conseguirem, o jogo é finalizado com empate.

a cada vez que o X clicar, embaixo troca para "Vez do Jogador O"

quando o jogo finalizar(botao de reiniciar), preciso resetar e iniciar novamente

*/