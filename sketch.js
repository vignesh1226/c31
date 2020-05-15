var snake;
var v = 20;
var food;
var w;
var h;

function setup() {
  //creating canvas
  createCanvas(400, 400);

  //defining w and h
  w = floor(width / v);
  h = floor(height / v);

  //number of frames the snake covers per second(speed)
  frameRate(3);

  //creats the snake
  snake = new Snake();

  //calling the user defined function
  foodLocation();
}

//creating a user defined function
function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  //moving the snake according to the directions of the arrow keys
  if (keyCode === LEFT_ARROW) {
    snake.setDir(1, 0);
  }
  if (keyCode === RIGHT_ARROW) {
    snake.setDir(-1, 0);
  }
  if (keyCode === DOWN_ARROW) {
    snake.setDir(0, -1);
  }
  if (keyCode === UP_ARROW) {
    snake.setDir(0, 1);
  }

}

function draw() {
  //floor scale
  scale(v);
  
  //background
  background(220);
  
  //changes the foods location
  if (snake.eat(food)) {
    foodLocation();
  }

  //updates the head and body of the snake
  snake.update();

  //displays the snake
  snake.display();

  //game over or end screen
  if (snake.end()) {
    background(255, 0, 0);
    noLoop();
  }

  //creats the food
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
