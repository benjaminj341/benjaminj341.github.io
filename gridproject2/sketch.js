//Block Dropper
//Ben Jorgenson 
//CS 30
//Mr Schellenebrg
//Nov 12 2019


//All variables needed are defined
let grid = [];
let colors = ["red", "blue", "purple", "green", "yellow", "orange"];
let t;
let t2;
let bricks = [];
let stop = false;
let score = 0;
let lossScreen = false;
let hiScore = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  fillGrid();
  //the first brick is created and added to the array
  aBrick = new Brick();
  bricks.push(aBrick);

  //all varaibles that use time are defined for the first time as millis
  t = millis();
  t2 = millis();
}

function draw() {
  background(220);
  displayGrid();
  
  //every half second, every brick on the screen is displayed and has its position updated
  if (millis() - t >= 500){
    t = millis();
    for (let i = 0; i < bricks.length; i++){
      bricks[i].display();
      bricks[i].update();
    }
  }
  //Every six seconds(enough time for one block to move all the way down), a new brick is created
  if (millis() - t2 >= 6000){
    newBrick();
    t2 = millis();
  }
  //the text for the score and high score counters
  textSize(60);
  fill(0);
  text("Score: " + score, 400, 200);
  textSize(30);
  text("Hi-score: " + hiScore, 400, 250);
  
  //the function lossCheck is also constantly run throughout, checking if there is a brick in the top column
  lossCheck();
}

//displayGrid function. Draws empty rectangles and fills each one with the assigned value in the grid array
function displayGrid(){
  for (let i = 0; i <= 4; i++){
    for (let j = 0; j <= 8; j++){
      fill(grid[i][j]);
      rect(i * 60, j * 60, 60, 60);
    }
  }
}

//function called in the setup and when the player wants to start a new game. grid array is created and every value is white
function fillGrid(){  
  for (let i = 0; i <= 4; i++){
    grid.push([]);
    for (let j = 0; j <= 8; j++){
      grid[i].push("white");
    }
  }
}




class Brick {
  constructor(){
    // brick appears in a random column and starts off at 0
    this.x = Math.round(random(4));
    this.y = 0;
    this.color = random(colors);
    this.moving = true;
  }
  
  update() {
    //checks to see if there is either another brick or the bottom of the grid beneath, if not, the brick will continue to move
    if (this.y + 1 !== 9 && grid[this.x][this.y + 1] !== "red" && grid[this.x][this.y + 1] !== "blue" && grid[this.x][this.y + 1] !== "purple" && grid[this.x][this.y + 1] !== "green" && grid[this.x][this.y + 1] !== "yellow" && grid[this.x][this.y + 1] !== "orange"){
      this.y += 1
      this.moving = true;
    }
    else {
      //if it is true, then the block is no longer moving and the eraseCheck function is called to see if it completes a set of 4
      this.moving = false;
      eraseCheck();
    }
    
    
  }
  
  display() {
    //the brick is displayed, and if it is still moving, its position is updated by changing the y value and setting the old y value back to white
    grid[this.x][this.y] = this.color;
    if (this.moving === true){
      grid[this.x][this.y - 1] = "white";
    }
  }
} 

function newBrick(){
  //called to make a new brick appear. new object created and pushed into the array
  anotherBrick = new Brick();
  bricks.push(anotherBrick);
}

//movement
function keyPressed(){
  if (keyCode === LEFT_ARROW){
    //removes the last element of the array and checks if the brick to the left of it is safe to move to
    let movedBrick = bricks.pop();
    if (movedBrick.x - 1 !== -1 && grid[movedBrick.x - 1][movedBrick.y] !== "blue" && grid[movedBrick.x - 1][movedBrick.y] !== "red" && grid[movedBrick.x - 1][movedBrick.y] !== "purple" && grid[movedBrick.x - 1][movedBrick.y] !== "green" && grid[movedBrick.x - 1][movedBrick.y] !== "yellow" && grid[movedBrick.x - 1][movedBrick.y] !== "orange"){
      
      //if so, the current spot of the brick is changed to white, the y value switched, and the brick put back into the array
      grid[movedBrick.x][movedBrick.y - 1] = "white";
      movedBrick.x -=1;      
    }
    bricks.push(movedBrick);
  }
  else if (keyCode === RIGHT_ARROW){
    //same thing as moving left expect right
    let movedBrick = bricks.pop();
    if (movedBrick.x + 1 !== 5 && grid[movedBrick.x + 1][movedBrick.y] !== "blue" && grid[movedBrick.x + 1][movedBrick.y] !== "red" && grid[movedBrick.x + 1][movedBrick.y] !== "purple" && grid[movedBrick.x + 1][movedBrick.y] !== "green" && grid[movedBrick.x + 1][movedBrick.y] !== "yellow" && grid[movedBrick.x + 1][movedBrick.y] !== "orange"){
      grid[movedBrick.x][movedBrick.y - 1] = "white";
      movedBrick.x +=1;      
    }
    bricks.push(movedBrick);
  }
  if (lossScreen === true){
    //if you have lost the game, you are allowed to press n to restart it
    if (key === 'n'){
      //empties the grid and refills it with all white values
      grid = [];
      fillGrid();
      //if you got a high score that round, it set as your new score
      if (score > hiScore){
        hiScore = score;
      }
      //score reset to zero
      score = 0;
    }
  }
}

function eraseCheck(){
  //removes the last element of the array
  let topBrick = bricks.pop();
  
  //if the colour of the brick removed is the same as the three underneath it, 
  if (topBrick.color === grid[topBrick.x][topBrick.y + 1] && topBrick.color === grid[topBrick.x][topBrick.y + 2] && topBrick.color === grid[topBrick.x][topBrick.y + 3]){
    
    //a for loop iterates through each one of those and makes them all white
    for (let i = 0; i < 4; i++){
      grid[topBrick.x][topBrick.y + i] = "white";
    }
    //a point is added to the score
    score += 1;
  }
} 

function lossCheck() {
  //if any of the spaces in the top column is anything but white, the player loses the game and the youLose function is called
  if ((grid[0][0] !== "white" && grid[0][1] !== "white") || (grid[1][0] !== "white" && grid[1][1] !== "white") || (grid[2][0] !== "white" && grid[2][1] !== "white") || (grid[3][0] !== "white" && grid[3][1] !== "white") || (grid[4][0] !== "white" && grid[4][1] !== "white")){
    youLose();
  }
}

function youLose(){
  //text displayed on screen informing the player that they have lost
  textSize(60);
  fill("white");
  text("You lose! Press n to try again!", width/2 - 400, height/2 + 200);
  lossScreen = true;
}