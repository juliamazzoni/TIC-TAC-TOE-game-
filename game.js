//global variables 

let numberOfGames =  1;
let counterX = 0;
let counterO = 0;
let playerTurn = 0;
let dataArrX = [];
let dataArrO = [];
let newArray =[];
const arrWin = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

//DOM elements 

const boxesElem = document.querySelectorAll('.boxes');
const numOfGames = document.querySelector('.num-of-games');
const scoreX = document.querySelector('.score-x');
const scoreO = document.querySelector('.score-o');
const message = document.querySelector('.message');
const playerXElem = document.querySelector('.playerX');
const playerOElem = document.querySelector('.playerO');
const resetBtnElem = document.querySelector('.reset-btn');


playerXElem.classList.add('player-turn');

//handle functions 

resetBtnElem.addEventListener('click', handleResetGame);

for (let box of boxesElem){
    box.addEventListener('click', handleClick);
}

function handleClick(event){
    let box = event.target;
    box.disabled = true;
    
    if (playerTurn === 0){
        playerOElem.classList.add('player-turn');
        playerXElem.classList.remove('player-turn');
        box.textContent = "X";
        box.style.color='white';
        box.classList.add('clicked');
        dataArrX.push(Number(box.dataset.num));
        
        if (checkWinNum(arrWin, dataArrX)){
            message.textContent = `X won`;
            counterX = counterX + 1;
            scoreX.textContent = counterX;
            changeBgDisableBtn();
            setTimeout(resetBoard,1000);

        }else if(document.querySelectorAll('.clicked').length === boxesElem.length){
            isADraw();
        }
        playerTurn++;
        
    }else if(playerTurn === 1){
        playerXElem.classList.add('player-turn');
        playerOElem.classList.remove('player-turn');
        box.textContent = "O";
        box.style.color='yellow';
        box.classList.add('clicked');
        dataArrO.push(Number(box.dataset.num));
        
        if (checkWinNum(arrWin, dataArrO)){
            message.textContent = `O won`;
            counterO = counterO + 1;
            scoreO.textContent = ' ' + counterO;
            changeBgDisableBtn();
            setTimeout(resetBoard,1000);

        }else if (document.querySelectorAll('.clicked').length === boxesElem.length){
            isADraw();
        }
        playerTurn--;
    }
}

function handleResetGame(){
    resetBothCases();
    playerXElem.classList.add('player-turn');
    numberOfGames = 1;
    numOfGames.textContent = numberOfGames;
    counterX = 0;
    scoreX.textContent = counterX;       
    counterO = 0;
    scoreO.textContent = ' ' + counterO; 
    }

//other functions 

function checkWinNum(array1, array2){
    for (let i=0; i<array1.length; i++){
        for(let j=0; j<array1[i].length; j++){
            if(array2.includes(array1[i][j])&&
                array2.includes(array1[i][j+1])&&
                array2.includes(array1[i][j+2])){
                    newArray.push(array1[i][j],array1[i][j+1],array1[i][j+2]);
                    return true;
            }
        }
    }
}

function changeBgDisableBtn(){
    for (let box of boxesElem){
        box.disabled = true;
        for (let numbers of newArray){
            if(Number(box.dataset.num) === numbers){
                box.classList.add('win-color');
                box.classList.add('animate__animated');
                box.classList.add('animate__wobble');
            } 
        }
    }
}

function isADraw() {
    message.textContent = `It's a draw`;
    setTimeout(reset,1000);
}

function resetBoard(){
    resetBothCases();
    numberOfGames++;
    numOfGames.textContent = numberOfGames;
    setTimeout(playerTurnColor, 1000);
}

function resetBothCases(){
    dataArrX = [];
    dataArrO = [];
    newArray =[];
    message.textContent = "";
    playerXElem.classList.remove('player-turn');
    playerOElem.classList.remove('player-turn');
    for (let box of boxesElem){
        box.textContent = "";
        box.disabled = false;
        box.classList.remove('clicked');  
        box.classList.remove('win-color');
        box.classList.remove('animate__animated');
        box.classList.remove('animate__wobble');
    }
}

function playerTurnColor(){
    if(playerTurn === 0){
        return playerXElem.classList.add('player-turn');
    }else if (playerTurn === 1){
        return playerOElem.classList.add('player-turn');
    }
}



// function checkWinCondition(array1, array2) {
//   return array2.every(function(element) {
//     return array1.includes(element);
//   })
// }

// const isSubset = (array1, array2) =>
//   array2.every((element) => array1.includes(element));


// function checkWinNum(array){
//     if(array.includes(1) && array.includes(2) && array.includes(3)||
//         array.includes(4) && array.includes(5) && array.includes(6)||
//         array.includes(7) && array.includes(8) && array.includes(9)||
//         array.includes(1) && array.includes(4) && array.includes(7)||
//         array.includes(2) && array.includes(5) && array.includes(8)||
//         array.includes(3) && array.includes(6) && array.includes(9)||
//         array.includes(1) && array.includes(5) && array.includes(9)||
//         array.includes(3) && array.includes(5) && array.includes(7)){
//             return true;
//         }else{
//             return false;
//         }
// }
















