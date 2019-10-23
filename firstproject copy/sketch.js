let grid = [];


function setup(){
  createCanvas(windowWidth, windowHeight);
  grid = create2dArray(20, 20);
}

function draw() {
  background(220);
  displayGrid(grid);
}

function displayGrid(theGrid){
  for (let y=0; y < theGrid[0].length; y++){
    for (let x=0; x < theGrid[0].length; x++){
      if (theGrid[y][x === 0]){
        fill(255);
      }
      else {
        fill(0);
      }
      let cellsize = width/theGrid[0].length
      rect(x * cellsize, y * cellsize, cellsize, cellsize);
    }
  }
}

function create2dArray(cols, rows) {
  let someArray = [];
  for (let i=0; i<cols; i++){
    someArray.push([]);
    for (let j=0; j<rows; j++){
      if (random(100) < 50){
        someArray[i].push(0);
    }
      else someArray[i].push(1);
    }
  }
  
}