let value = 0;

function popup() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

function playerMove (move){
  const pcMove = computerMove();
  if (move === 'rock'){
    SecondHTML('rock');
    if(pcMove === 'rock'){
      thirdHTML('rock');
      results('draw');
    }
    else if(pcMove === 'paper'){
      thirdHTML('paper');
      results('YOU LOSE');
    }
    else if(pcMove === 'scissors'){
      thirdHTML('scissors');
      results('YOU WIN');
    }
  }
  if (move === 'paper'){
    SecondHTML('paper');
    if(pcMove === 'rock'){ 
      thirdHTML('rock');
      results('YOU WIN');
    }
    else if(pcMove === 'paper'){
      thirdHTML('paper');
      results('DRAW');
    }
    else if(pcMove === 'scissors'){
      thirdHTML('scissors');
      results('YOU LOSE');
    }
  }
  if (move === 'scissors'){
    SecondHTML('scissors');
    if(pcMove === 'rock'){ 
      thirdHTML('rock');
      results('YOU LOSE');
    }
    if(pcMove === 'paper'){
      thirdHTML('paper');
      results('YOU WIN');
    }
    if(pcMove === 'scissors'){
      thirdHTML('scissors');
      results('DRAW');
    }
  }
  return move;
}

function computerMove(pcMove){
  const random = Math.random();
  if(random >= 0 && random< 0.33 ){
    pcMove = ('rock');
  }
  if(random > 0.33 && random< 0.66 ){
    pcMove = ('paper');
  }
  if(random > 0.66 && random< 1 ){
    pcMove = ('scissors');
  }
  return pcMove;
}

function SecondHTML(move){
  document.querySelector('.buttonsContanier').innerHTML = `
  <div class="afterContanier">
    <div class="PickedContanier">
      <p class="youPicked">YOU PICKED</p>
      <div class="imgAfterContanier"  id="icon1"><img class="icon" src="images/icon-${move}.svg"></div>
    </div>
    <div class="palyAgain"></div>
    <div class="PickedContanier">
      <p class="housePicked">THE HOUSE PICKED</p>
      <div class="html3">
        <div class="empty">
        </div>
      </div>
  </div>
  `;
  if(move === 'rock'){
    document.getElementById("icon1").style.borderColor = 'hsl(349, 71%, 52%)';
  }
  else if(move === 'paper'){
    document.getElementById("icon1").style.borderColor = 'hsl(230, 89%, 62%)';
  }
  else if(move === 'scissors'){
    document.getElementById("icon1").style.borderColor = 'hsl(39, 89%, 49%)';
  }
}

function thirdHTML(pcMove){
  setTimeout(function(){
  document.querySelector('.html3').innerHTML = `<div class="imgAfterContanier"  id="icon2"><img class="icon" src="images/icon-${pcMove}.svg"></div>
  </div>`;
  if(pcMove === 'rock'){
    document.getElementById("icon2").style.borderColor = 'hsl(349, 71%, 52%)';
  }
  else if(pcMove === 'paper'){
    document.getElementById("icon2").style.borderColor = 'hsl(230, 89%, 62%)';
  }
  else if(pcMove === 'scissors'){
    document.getElementById("icon2").style.borderColor = 'hsl(39, 89%, 49%)';
  }
  }, 700);
}

function results(result){
  setTimeout(function(){
  document.querySelector('.palyAgain').innerHTML = `
  <div class = "againContanier">
    <p class= "result">
      ${result}
    </p>
    <button class = "playAgainButton">
      PLAY AGAIN
    </button>
  </div>  
    `;
    setTimeout(function(){
      if(result === 'YOU WIN'){
        value++;
        document.querySelector('.js-score').innerHTML = value;
     }
   }, 20);
   onceMoreTime();
  }, 1200);
}

function onceMoreTime(){
  const resultRemove = document.querySelector('.palyAgain');
  const secondRemove = document.querySelector('.afterContanier')
  const game = document.querySelector('.buttonsContanier');
  const playAgain = document.querySelector('.playAgainButton');
  playAgain.addEventListener('click', ()=>{
    resultRemove.innerHTML = '';
    secondRemove.innerHTML = '';
    game.innerHTML = `   
    <div class="triangle"><img class="triImg" src="images/bg-triangle.svg"></div>
    <div class="RPcontanier">
      <button class="paperButton"><img class="paperimg" src="images/icon-paper.svg"></button>
      <button class="scissorButton"><img class="scissorimg" src="images/icon-scissors.svg"></button>
      <button class="rockButton"><img class="rockimg" src="images/icon-rock.svg"></button>
    </div>
`
  document.querySelector('.rockButton').addEventListener('click',()=>{
    playerMove('rock');
  });

  document.querySelector('.paperButton').addEventListener('click',()=>{
    playerMove('paper');
  });

  document.querySelector('.scissorButton').addEventListener('click',()=>{
    playerMove('scissors');
  });

  });
}


document.querySelector('.rockButton').addEventListener('click',()=>{
  playerMove('rock');
});

document.querySelector('.paperButton').addEventListener('click',()=>{
  playerMove('paper');
});

document.querySelector('.scissorButton').addEventListener('click',()=>{
  playerMove('scissors');
});

