let grid = [];
let fillcolor;
let Xcor = 10;
let Ycor = 10;
let rows = 400;
let cols = 400;
let moveMode = "right";


function setup(){
  createCanvas(windowWidth, windowHeight);
  colorGrid();
  
}

function draw(){
  CreateGrid();
  let t1 = millis();

  if (millis() - t1 >= 1000){
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
      else {
        fill(0);
      }    
      rect(x * 10, y * 10, 10, 10);    
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
    grid[Xcor][Ycor] = 0;
    Ycor += 1;
    grid[Xcor][Ycor] = 1;
  }
  else if (moveMode === "up"){
    grid[Xcor][Ycor] = 0;
    Ycor -= 1;
    grid[Xcor][Ycor] = 1;
  }
  else if (moveMode === "left"){
    grid[Xcor][Ycor] = 0;
    Xcor -= 1;
    grid[Xcor][Ycor] = 1;
  }
  else if (moveMode === "right"){
    grid[Xcor][Ycor] = 0
    Xcor += 1;
    grid[Xcor][Ycor] = 1;
    console.log(1);
  } 
}