var gridSize = 20;
var snakeX = [];
var snakeY = [];
var snake = {
    up : false,
    left : false,
    right : false,
    down : false,
    alive : true,
}
var i = 0;
var food = {
    x : [0],
    y : [0],
    
}
var snakehead;
var turn = true;
function preload() {
     snakehead = loadImage("snakehead.png");
}

var rows = 20;
var cols = 20;
var alive = false;
function setup(){
  createCanvas(rows * gridSize, cols * gridSize);
  for (var i = 0; i < 1; i++){
    snakeX[i] = int(rows/2) * gridSize;
    snakeY[i] = int(cols/2) * gridSize;
  }
  background(100);
}
var highscore = 0;

function draw(){
    if(snake.alive == false){
        background(100);
        text("You died. Click to restart!", int(rows/2) * gridSize - 50, int(cols/2) * gridSize);
        text("Score: " + snakeX.length, int(rows/2) * gridSize - 50, int(cols/2) * gridSize + 50);
        if(snakeX.length > highscore){
            highscore = snakeX.length;
        }
        text("High Score: " + highscore, int(rows/2) * gridSize - 50, int(cols/2) * gridSize + 100);
    }
  if (frameCount%5 == 0 && snake.alive == true){ //slows it down to make visible
    background(100);
      
        
      drawSnake();
      
     image(snakehead, snakeX[snakeX.length-1], snakeY[snakeY.length-1], 20, 25);
    moveSnake();
                
      turn = true;
      
      for(var i = 0; i < snakeX.length-1; i++){
          print(snakeX[snakeX.length - 1]);
          if(snakeX[snakeX.length-1] == snakeX[i] && snakeY[snakeY.length-1] == snakeY[i]){
             snake.alive = false;
        
              snakeX.splice(0, snakeX.length-1);
              snakeY.splice(0, snakeY.length-1);
              snake.down = false;
              snake.up = false;
              snake.right = false;
              snake.left = false;
          }  
          }
      

      }

   
  
      if (alive == false){
          x = int(random(0,20)) * gridSize;
         y = int(random(0,20)) * gridSize;
          
          for(i = 0; i < snakeX.length; i++){
             if(x == snakeX[i] && y == snakeY[i]){
                 x = int(random(0,20)) * gridSize;
         y = int(random(0,20)) * gridSize;
                 i = 0;
             }
          }
              
              
      
        append(food.x, x);
        append(food.y, y);
          
        //print(food.x[food.x.length - 1]);
        
        
          alive = true;
      }
    fill(255, 0, 0);
    if(snake.alive == true){
    rect(food.x[food.x.length - 1],food.y[food.y.length - 1], 20, 20);
    }
   if(snakeX[snakeX.length-1] == food.x[food.x.length - 1] && snakeY[snakeY.length-1] == food.y[food.y.length - 1]){
        if(snake.right == true){
            snakeX.push(snakeX[snakeX.length-1] + gridSize);
            snakeY.push(snakeY[snakeY.length-1]);
            alive = false;
        }
        else if(snake.left == true){
            snakeX.push(snakeX[snakeX.length-1] - gridSize);
            snakeY.push(snakeY[snakeY.length-1]);
            alive = false;
        }
       else if(snake.up == true){
            snakeY.push(snakeY[snakeY.length-1] - gridSize);
           snakeX.push(snakeX[snakeX.length-1]);
            alive = false;
        }
       else if(snake.down == true){
            snakeY.push(snakeY[snakeY.length-1] + gridSize);
           snakeX.push(snakeX[snakeX.length-1]);
            alive = false;
        }
    }


}
function drawSnake(){
  fill(255);
     
  for(var i = 0; i < snakeX.length; i++){
    
    rect(snakeX[i], snakeY[i], gridSize, gridSize);
  }
    
}

function moveSnake(){
  if(snake.right == true) {
      snakeX.push(snakeX[snakeX.length-1] + gridSize);
      snakeX.splice(0,1);
      snakeY.push(snakeY[snakeY.length-1]);
      snakeY.splice(0,1);
  if (snakeX[snakeX.length-1] >= 400){
    snakeX[snakeX.length-1] = 0;
  }
      if (snakeX[snakeX.length-1] < 0){
    snakeX[snakeX.length-1] = width + gridSize;
  }  

  }
    if(snake.left == true){
      snakeX.push(snakeX[snakeX.length-1] - gridSize);
  snakeX.splice(0,1);
        snakeY.push(snakeY[snakeY.length-1]);
        snakeY.splice(0,1);
  if (snakeX[snakeX.length-1] >= 400){
    snakeX[snakeX.length-1] = cols * gridSize;
  }
  if (snakeX[snakeX.length-1] < 0){
    snakeX[snakeX.length-1] = width + gridSize;
  }  
    }
    
      if (snake.up == true){
      snakeY.push(snakeY[snakeY.length-1] - gridSize);
  snakeY.splice(0,1);
          snakeX.push(snakeX[snakeX.length-1]);
      snakeX.splice(0,1);
  if (snakeY[snakeY.length-1] >= 400){
    snakeY[snakeY.length-1] = rows * gridSize;
  }
  if (snakeY[snakeY.length-1] < 0){
    snakeY[snakeY.length-1] = height + gridSize;
  }  
    }
    
    if(snake.down == true){
    snakeY.push(snakeY[snakeY.length-1] + gridSize);
  snakeY.splice(0,1);
        snakeX.push(snakeX[snakeX.length-1]);
      snakeX.splice(0,1);
  if (snakeY[snakeY.length-1] >= 400){
    snakeY[snakeY.length-1] = 0;
  }
  if (snakeY[snakeY.length-1] < 0){
    snakeY[snakeY.length-1] = height + gridSize;
  }  
    }
}





function keyPressed(){
   if(turn == true){
    if (keyCode == UP_ARROW && snake.down == false){
        snake.up = true;
        snake.right = false;
        snake.down = false;
        snake.left = false;
        turn = false;
    }
   else if (keyCode == DOWN_ARROW && snake.up == false){
        snake.down = true;
        snake.right = false;
        snake.up = false;
        snake.left = false;
       turn = false;
    }
   else if(keyCode == LEFT_ARROW && snake.right == false){
        snake.left = true;
        snake.right = false;
        snake.up = false;
        snake.down = false;
       turn = false;
    }
   else if(keyCode == RIGHT_ARROW && snake.left == false){
        snake.right = true;
        snake.left = false;
        snake.down = false;
        snake.up = false;
       turn = false;
    }
}
}






function mouseClicked(){
     snakeX[snakeX.length-1] = int(rows/2) * gridSize;
    snakeY[snakeY.length-1] = int(cols/2) * gridSize;
    snake.alive = true;
    
}




