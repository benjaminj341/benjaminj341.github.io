// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redAmount = 0;
let redChangeAmount = 1;

let greenamount = 50;
let greenchange = 1;

let blueamount = 100;
let bluechange = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() { 
  fill(redAmount,greenamount,blueamount);
  noStroke();
  ellipse(mouseX, mouseY, 50, 50);
  redAmount += redChangeAmount;
  greenamount += greenchange;
  blueamount += bluechange;

  if (redAmount === 255){
    redChangeAmount *= -1;
  }
  if (redAmount === 0){
    redChangeAmount *= -1;
  }
  if (greenamount === 255){
    greenchange *= -1;
  }
  if (greenamount === 0){
    greenchange *= -1;
  }
  if (blueamount === 255){
    bluechange *= -1;
  }
  if (blueamount === 0){
    bluechange *= -1;
  }
console.log(redAmount);
console.log(blueamount);
console.log(greenamount);
}
