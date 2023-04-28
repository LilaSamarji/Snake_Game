import { onSnake, expandSnake } from "./snake.js";
import { RandomGridPosition } from "./grid.js";
let food= getRandomFoodPosition();
const EXPANSION_RATE=1;
var game_score=0;
var highest_score;
export  function update() {
  if(onSnake(food)) {
   
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition();
    game_score++;
    document.getElementById("score").innerHTML="score : "+game_score;
    if (typeof(Storage) !== "undefined") {
      // Store
      if( localStorage.getItem("highest")===null) {
        highest_score=0;
        localStorage.setItem("highest",highest_score);
        document.getElementById("highestScore").innerHTML ="Highest Score: "+highest_score;
      }
      else {
        if(game_score > localStorage.getItem("highest") ) {
          highest_score = game_score;
          localStorage.setItem("highest",highest_score);
          console.log(highest_score)
          document.getElementById("highestScore").innerHTML ="Highest Score:"+localStorage.getItem("highest");
        }
      }
     
    } else {
      document.getElementById("highestScore").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
  }

  }
   
   
   
   
    
    export  function draw(gameBoard) {
        const foodElement=document.createElement('div');
        const pic=document.createElement('img');
        pic.src='images/apple.png';
        pic.style.width='40px';
        pic.style.height='40px';
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        //foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
        foodElement.appendChild(pic);
        foodElement.style.alignItems='top'
      }
      //to create a new random position for the food every time the snake eats it 
      function getRandomFoodPosition() { 
        let newFoodPosition
        while(newFoodPosition ==null || onSnake(newFoodPosition)) {
          newFoodPosition = RandomGridPosition();
        }
        return newFoodPosition
      }
