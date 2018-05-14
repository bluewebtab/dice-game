////*
//3 Challenges
//
//1.A player loses his entire score when he rolls two 6 in a row. After that, it's the next player's turn.(Hint:"Always save the previous dice roll in a separate variable")
//
//2. Add an input field to the html where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the value property in Js, This is a good opportunity to use google to figure this out.)
//3.Add another dice to the fame, so that there are two dices now. The player loses his current score when of them is a 1. (Hint: you will need Css to position the second dice, so take a look at the css code for the first one.)
//*/
//


//Global scope allows these variables to be used by each functions
var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;


document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
        
    
//1. Random number
 var dice1 = Math.floor(Math.random() * 6) +1;
 var dice2 = Math.floor(Math.random() * 6) +1;
    
    //2.Display the result
     
document.getElementById('dice-1').style.display = 'block';
document.getElementById('dice-2').style.display = 'block';
diceDOM.style.display = 'block';
 document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
 document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
    
   
    if(dice === 6 && lastDice ===6){
//       Player loses score 
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = 
        '0';
        nextPlayer();
      //3. Update the round score If the rolled number was Not a 1.   
    }else if (dice !== 1){
        //Add score
        
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //Next player
        nextPlayer();
        
    }
        
         lastDice = dice;
    }
    
});
  
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //Add current score to global score
    scores[activePlayer] += roundScore;
  
    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
   
        
    var input = document.querySelector('.final-score').value;
    var winningScore;
    // Undefined , 0, null or "" are COERCED to false
    //Anything else is coerced to true
    if(input){
         winningScore = input;    
    }else{
        winningScore = 100;
    }
        
    
     //Check if player won the game
    if (scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
       document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }else{
         //NextPlayer
    nextPlayer();
    }
   
    }
   
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        
}


document.querySelector('.btn-new').addEventListener('click', init);


function init(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;    
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-0-panel').classList.add('active');
}












