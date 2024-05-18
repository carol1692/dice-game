let btPlayer1 = document.querySelector("btDice1");
let btPlayer2 = document.getElementById('btDice2');

let spanPlayer1 = document.getElementById("namePlayer1");
let spanPlayer2 = document.getElementById("namePlayer2");

let namePlayer1 = "";
let namePlayer2 = "";

let diceImg1 = document.getElementById("dicePlayer1");
let diceImg2 = document.getElementById("dicePlayer2");

let dice1 = false;
let dice2 = false;

let results = [];

function askName(id, user){
    let playerName = prompt( user + " , what's your name?");

    return id.textContent = playerName, playerName;
}

window.addEventListener("load", function(){
    while (namePlayer1 === ""){
        namePlayer1 = askName(spanPlayer1,'Player 1');
    }
    while (namePlayer2 === ""){
        namePlayer2 = askName(spanPlayer2,'Player 2');
    }
    
    }
)

// document.getElementById("btDice1").addEventListener("click", function(){
//     let dicesImg = ['./imgs/dice_1.jpg','./imgs/dice_2.jpg','./imgs/dice_3.jpg','./imgs/dice_4.jpg','./imgs/dice_5.jpg','./imgs/dice_6.jpg'];
//     let animationDice = './imgs/dice_animation.gif';
//     let numberPlayer1 = Math.floor(Math.random() * dicesImg.length)
//     document.getElementById("dicePlayer1").setAttribute("src", animationDice);
//     setTimeout(function() {return document.getElementById("dicePlayer1").setAttribute("src", dicesImg[numberPlayer1])}, 1000);
//     }
// )

document.getElementById("btDice1").addEventListener("click", function(){
     let player1 = rollDice("dicePlayer1");
     results.push([namePlayer1, player1]);
     verifyWinner(results);
    }
)

document.getElementById("btDice2").addEventListener("click", function(){
    let player2 = rollDice("dicePlayer2");
    results.push([namePlayer2, player2]);
    verifyWinner(results);
    
   }
)



// btPlayer2.addEventListener("click", rollDice("Player 2"))



function rollDice(id){
    let dicesImg = ['./imgs/dice_1.jpg','./imgs/dice_2.jpg','./imgs/dice_3.jpg','./imgs/dice_4.jpg','./imgs/dice_5.jpg','./imgs/dice_6.jpg'];
    let animationDice = './imgs/dice_animation.gif';
    let numberPlayer = Math.floor(Math.random() * dicesImg.length)
    let dice = document.getElementById(id);
    dice.setAttribute("src", animationDice);
    setTimeout(function() {return dice.setAttribute("src", dicesImg[numberPlayer])}, 1000);
    if (id == "dicePlayer1"){
        dice1 = true;
    }else{
        dice2 = true
    }
    return numberPlayer;

    
    // if( dice1 == true && dice2 == true){
    //     setTimeout(verifyWinner, 3000);
    // }
    
}

function verifyWinner(results){
    if (dice1 == true && dice2 == true){
        setTimeout(function() {
            if(results[0][1] > results[1][1]){
                alert( results[0][0] + " is the winner!");
                return results.length = 0, dice1 = false, dice2 = false
            }
            else if(results[0][1] == results[1][1]){
                alert( "It's even, Play again losers!");
                return results.length = 0, dice1 = false, dice2 = false
            }else{
                alert( results[1][0] + " is the winner!");
                return results.length = 0, dice1 = false, dice2 = false
            }
        }, 2000)
    }
}

