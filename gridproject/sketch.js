function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  let grid = [];
  for (x=0; x < width; x++){
    grid.push([]);
    for (y=0; y < height; y++){
      c = random(0, 255);

      fill(c);
      rect(x * 10, y * 10, 10, 10);
      grid[x].push(y);
    }
  }
}