let grid = [];
let fillcolor;
let phase = "start";
let Xcor = 50;
let Ycor = 20;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  
}



function mouseClicked(){
  colorGrid();
  phase = "play";
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
        fill(255)
      }
      else {
        fill(0);
      }    
      rect(x * 10, y * 10, 10, 10);    
    }
  }
}

function keyPressed() {
  if (phase === "play"){
    if (keyCode === 68){
      Xcor += 1;
    }
  }
}