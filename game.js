import { update as updateSnake,draw as drawSnake,SNAKE_SPEED,getSnakeHead,snakeIntersection} from './snake.js'
import { update as updateFood , draw as drawFood} from './food.js'
import { outsideGrid} from './grid.js'
let lastRenderTime=0;
let gameOver = false;
const gameBoard=document.getElementById('game-board')

function main(currentTime) {
if(gameOver) { 
       //document.getElementById("over").innerHTML="Game Over";


    if(confirm('Game Over! . Press Okay to restart')) {
      
        window.location.href= 'index.html'
        
    }
    return 
}
window.requestAnimationFrame(main)
const SecondSinceLastRender=(currentTime-lastRenderTime) / 1000;
if(SecondSinceLastRender< 1/SNAKE_SPEED) return;
//console.log("Render");
lastRenderTime=currentTime;
update();
draw();
}
window.requestAnimationFrame(main)

function update(){
updateSnake();
updateFood();
checkDeath();
}

function draw(){
 
    document.getElementById("highestScore").innerHTML = "Highest Score:"+localStorage.getItem("highest");
gameBoard.innerHTML= '';
drawSnake(gameBoard);
drawFood(gameBoard);


}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

