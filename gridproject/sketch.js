let grid = [];
let fillcolor;
let Xcor = 50;
let Ycor = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  colorGrid();

  if (millis() === 10000){

  }
}


function colorGrid(){
  for (x = 0; x < width; x++){
    grid.push([]);
    for (y = 0; y < height; y++){
      if (x === Xcor && y === Ycor){
        grid[x].push(1);
      }
      else {
        grid[x].push(0);
      }      
    }
  }
  CreateGrid();
}

function CreateGrid(){
  for (x=0; x < width; x++){
    for (y=0; y < height; y++){
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
    grid[Xcor][Ycor] = grid[Xcor + 1][Ycor];
  }
  
  else if (key === 'w'){
    grid = [];
    Ycor -= 1;   
  }

  else if (key === 'a'){
    grid = [];
    Xcor -= 1;   
  }

  else if (key === 's'){
    grid = [];
    Ycor += 1;   
  }
}