function setup() {
  createCanvas(410, 610); 
  textAlign (CENTER);
  text ("Click To Start", 200, 300);
}
var snake = {
    length : 5,
    actualLength : 5,
    x : [200],
    y : [300],
    up : false,
    left : false,
    right : false,
    down : false,
}
var grid = {
    x : 0,
    y : 0,
}

var food = {
    x : [0],
    y : [0],
    
}
var start = false;
var alive = false;
var score = 0;
var x = 0;
var y = 0;

    
   

function keyPressed (){
    if (keyCode == UP_ARROW && snake.down == false) {
        snake.up = true;   
        snake.left = false;
        snake.right = false;
        snake.down = false;
        }
    if  (keyCode == LEFT_ARROW && snake.right == false){
        snake.left = true; 
        snake.right = false;
        snake.up = false;
        snake.down = false;
    }
    if (keyCode == DOWN_ARROW && snake.up == false){
        snake.up = false;
        snake.down = true;
        snake.left = false;
        snake.right = false;
    }
    if (keyCode == RIGHT_ARROW && snake.left == false){
        snake.up = false;
        snake. left = false;
        snake.right = true;
        snake.down = false;
    }
    
        }

function draw(){
    background(100);
   if (snake.up == true) {
       for (i = 0; i < 5; i++){
        append(snake.y, snake.y[snake.y.length-1]-1);
        snake.y.splice(0, 1);
       }
       
    
   }
    if (snake.left == true){
        for (i = 0; i < 5; i++){
            append(snake.x, snake.x[snake.x.length-1]-1);
            snake.x.splice(0, 1);
        }
    
        
    }
    if (snake.down==true){
     
         append(snake.y, snake.y[snake.y.length-1]+1);
         snake.y.splice(0, 1)
     
    }
    if (snake.right == true){
        
            append(snake.x, snake.x[snake.x.length-1]+1);
            snake.x.splice(0, 1);
        }
    
    
    
    if (snake.x[0] == 0 || snake.x[0] == 400 || snake.y[0] == 0 || snake.y[0] == 600){
        snake.x[0] = 200;
        snake.y[0] = 300;
        snake.up = false;
        snake.left = false;
        snake.right = false;
        snake.down = false;
    }
   
    
    
   for (v = snake.length; v > 0;  v --){
       rect(snake.x[v], snake.y[v], 10, 10);
       
   }
       
    
     
     
    
    if(snake.x > food.x[food.x.length - 1]-1 && snake.x < food.x[food.x.length - 1] + 10 && snake.y < food.y[food.y.length - 1] + 10 && snake.y > food.y[food.y.length - 1]-1) {
         snake.length = snake.length + 1;
         alive = false;
         
         
     }
    
     if (alive == false){
          x = int(random(0,40)) * 10;
         y = int(random(0,60)) * 10;
        append(food.x, x);
        append(food.y, y);
        print(food.x[food.x.length - 1]);
        alive = true;
        }
    rect(food.x[food.x.length - 1],food.y[food.y.length - 1], 10, 10);
}