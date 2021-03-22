const p1_score = document.querySelector('#p1-score');
const p2_score = document.querySelector('#p2-score');

const p1_button = document.querySelector('.player1');
const p2_button = document.querySelector('.player2');
const reset = document.querySelector('.reset');


p1_button.addEventListener('click', function(){
   let target_score = document.querySelector('.target').value;

   p1_score.innerText++;
   let check1 = p1_score.innerText;
   if(check1 === target_score){
       alert('Player1 won the game');
       resetScore();
   }
})

p2_button.addEventListener('click', function(){
    let target_score = document.querySelector('.target').value;

    p2_score.innerText++;
    let check2 = p2_score.innerText;
    if(check2 === target_score){
        alert('Player2 won the game');
        resetScore()
    }
 })
 
reset.addEventListener('click', resetScore)

function resetScore(){
    p1_score.innerText = 0;
    p2_score.innerText = 0;
}

