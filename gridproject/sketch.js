let grid = [];
let Xcor = 10;
let Ycor = 10;
let rows = 80;
let cols = 39.5 * 2;
let moveMode = "right";
let t1;
let foodx;
let foody;
let snakeLength = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorGrid();
  t1 = millis();

  genFood();
}



function draw(){
  CreateGrid();
  if (millis() - t1 >= 250){
    update();
    t1 = millis();
  }
}


function colorGrid(){
  for (x = 0; x < cols; x++){
    grid.push([]);
    for (y = 0; y < rows; y++){
      if (x === Xcor && y === Ycor){
        grid[x].push(1);
      }
      else {
        grid[x].push(0);
      }      
    }
  } 
}

function CreateGrid(){
  for (x=0; x < cols; x++){
    for (y=0; y < rows; y++){
      if (grid[x][y] === 1) {
        fill(255);
      }
      else if (grid[x][y] === 2){
        fill("red");
      }
      else {
        fill(0);
      }    
      rect(x * 20, y * 20, 20, 20);    
    }
  }
}

function keyTyped() {
  if (key === 'd'){
    moveMode = "right";
  }
  
  else if (key === 'w'){
    moveMode = "up";
  }

  else if (key === 'a'){
    moveMode = "left";
  }

  else if (key === 's'){
    moveMode = "down";
  }
}

function update(){
  if (moveMode === "down"){
    if (grid[Xcor][Ycor + 1] === 2){
      eat();
    }

    grid[Xcor][Ycor] = 0;
    Ycor += 1;
    grid[Xcor][Ycor] = 1;
    for (let i=0; i < snakeLength; i++){
      grid[Xcor][Ycor - i] = 1;
    }


  }
  else if (moveMode === "up"){
    if (grid[Xcor][Ycor - 1] === 2){
      eat();
    }

    grid[Xcor][Ycor] = 0;
    Ycor -= 1;
    grid[Xcor][Ycor] = 1;
    for (let i=0; i < snakeLength; i++){
      grid[Xcor][Ycor + i] = 1;
    }


  }
  else if (moveMode === "left"){
    if (grid[Xcor - 1][Ycor] === 2){
      eat();
    }


    grid[Xcor][Ycor] = 0;
    Xcor -= 1;
    grid[Xcor][Ycor] = 1;
    for (let i=0; i < snakeLength; i++){
      grid[Xcor + i][Ycor] = 1;
    }


  }
  else if (moveMode === "right"){
    if (grid[Xcor + 1][Ycor] === 2){
      eat();
    }


    grid[Xcor][Ycor] = 0;
    Xcor += 1;
    grid[Xcor][Ycor] = 1;
    for (let i=0; i < snakeLength; i++){
      grid[Xcor - i][Ycor] = 1;
    }
  } 
}

function genFood(){
  foodx = Math.round(random(0, 50));
  foody = Math.round(random(0, 50));

  grid[foodx][foody] = 2;
}


function eat(){
  snakeLength += 1;
  genFood();
}