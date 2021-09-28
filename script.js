let order = [];
let userOrder = [];
let score = 0;


const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const red = document.querySelector('.red');

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250 );
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    userOrder = [];

    for(let o in order){
        let elementColor = createColorElement(order[o]);
        lightColor(elementColor, Number(o) + 1);
    }
}

let checkOrder = () => {
    for(let i in userOrder) {
        console.log(userOrder[i], order[i])
        if(userOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(userOrder.length == order.length){
        alert(`Pontuação : ${score}\nVocê acetou! Iniciando o próximo nível`);
        nextLevel();
    }
}

let click = (color) => {
    userOrder[userOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else{
        return blue;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () =>{
    alert(`Pontuação: ${score}!Você perdeu o jogo. Clique em ok para iniciar um novo jogo`);
    order = [];
    userOrder = [];

    playGame();
}


let playGame = () => {
    alert('Seja bem vindo ao Genius');
    score = 0;

    nextLevel();

}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
