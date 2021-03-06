/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//Global scope allows these variables to be used by each functions
var scores, roundScore, activePlayer, gamePlaying;

init();




document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
        
    
//1. Random number
 var dice = Math.floor(Math.random() * 6) +1;
    
    //2.Display the result
     
var diceDOM =  document.querySelector('.dice');  
diceDOM.style.display = 'block';
 diceDOM.src = 'dice-' + dice + '.png';
    
    //3. Update the round score If the rolled number was Not a 1.
    if(dice !== 1){
        //Add score
        
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
        //Next player
        nextPlayer();
        
    }
    }
    
});
  
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //Add current score to global score
    scores[activePlayer] += roundScore;
  
    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //Check if player won the game
    if (scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
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

/*
3 Challenges

1.A player loses his entire score when he rolls two 6 in a row. After that, it's the next player's turn.(Hint:"Always save the previous dice roll in a separate variable")

2. Add an input field to the html where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the value property in Js, This is a good opportunity to use google to figure this out.)
3.Add another dice to the fame, so that there are two dices now. The player loses his current score when of them is a 1. (Hint: you will need Css to position the second dice, so take a look at the css code for the first one.)
*/













