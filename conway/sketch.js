let grid;
let rows = 30;
let cols = 30;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function keyTyped() {
  if (key === "r") {
    grid = createRandom2dArray(cols, rows);
  }
  if (key === "c") {
    grid = createEmptyGrid();
  }
  if (key === " "){
    update();
  }
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

function update(){
  let nextTurn = createEmptyGrid();

  for (let x = 0; x < cols; x++){
    for (let y = 0; y < rows; y++){
      let neighbours = 0;

      for (i = -1; i <= 1; i++){
        for (let j = -1; j <= 1; j++){
          if (x+i >= 0 && x+i < cols && y+j >= 0 && y+j < rows){
            neighbours += grid[y+j][x+i];
          }
        }
      }
      neighbours -= grid[y][x];

      if (grid[y][x] === 1){
        if (neighbours === 2 || neighbours === 3){
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }

      if (grid [y][x] === 0){
        if (neighbours === 3){
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }
  grid = nextTurn;
}

function mousePressed() {
  let cellSize = width/cols;

  let xCoord = floor(mouseX / cellSize);
  let yCoord = floor(mouseY / cellSize);
  
  if (grid[yCoord][xCoord] === 1) {
    grid[yCoord][xCoord] = 0;
  }
  else {
    grid[yCoord][xCoord] = 1;
  }
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(1);
      }
      else {
        randomGrid[x].push(0);
      }
    }
  }
  return randomGrid;
}