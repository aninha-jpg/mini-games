const dino = window.document.getElementById("dino");
const box = window.document.getElementById("box");
const score = window.document.getElementById("score");

// fazendo funcão para chamar a class jump animation da css e remover logo em seguida
function jump(){
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation');
    }, 500);
}

//definindo evento para a função, assim que qualquer tecla(teclado) for apertada, dispara a função, mas não deixa apertar de novo se o dino ainda estiver no ar.

document.addEventListener('keypress', () => {
    if(!dino.classList.contains('jump-animation')){
        jump();
    }
}) 

// definindo o estilo computado(top e left) do dinossauro e da caixa para fazer o loop do game

// só mostra a pedra se o valor for positivo.

setInterval(() => {
    score.innerText++;
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

    const boxLeft = parseInt(window.getComputedStyle(box).getPropertyValue('left'));

    if(boxLeft < 0) {
        box.style.display = 'none';
    } else {
        box.style.display = "";
    }

    // detectando a colisão

    if (boxLeft < 50 && boxLeft > 0 && dinoTop > 150) {
        alert('Fim de Jogo! Sua Pontuação é: ' +  score.innerText + "\n\nJogar Novamente?");
        location.reload();
    }

}, 50);


/*

script feito antes do tutorial para melhorar lógica de programação.


1 - APÓS PASSAR AS VARIÁVEIS, PRECISA TER A INTERAÇÃO DE PULAR - add event

2 - SCORE PRECISAR ATUALIZAR(++) CONFORME ELE AVANÇA SEM MORRER(FUNÇÃO)
3 - O JOGO PRECISA PARAR SE ELE BATER NA PEDRA

4 - O JOGO RESETA O SCORE SE ELE BATER NA PEDRA

5 - ELE DÁ UM ALERT PERGUNTANDO SE QUER JOGAR NOVAMENTE - SE SIM, COMEÇA DE NOVO

*/