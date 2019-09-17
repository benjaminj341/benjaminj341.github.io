let x = 200;
let onestarx = random(0, windowWidth);
let onestary = random(0, windowHeight);
let twostarx = random(0, windowWidth);
let twostary = random(0, windowHeight);
let threestarx = random(0, windowWidth);
let threestary = random(0, windowHeight);
let fourstarx = random(0, windowWidth);
let fourstary = random(0, windowHeight);
let fivestarx = random(0, windowWidth);
let fivestary = random(0, windowHeight);
let sixstarx = random(0, windowWidth);
let sixstary = random(0, windowHeight);
let sevenstarx = random(0, windowWidth);
let sevenstary = random(0, windowHeight);
let eightstarx = random(0, windowWidth);
let eightstary = random(0, windowHeight);
let ninestarx = random(0, windowWidth);
let ninestary = random(0, windowHeight);
let spaceman;
let spaceinvader;



function preload(){
    spaceman = loadImage("assets/spaceshooter.png");
} 


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    
}
function starset(){
    ellipse(onestarx, onestary, 10, 10);
    fill(255);
    ellipse(twostarx, twostary, 10, 10);
    fill(255);
    ellipse(threestarx, threestary, 10, 10);
    fill(255);
    ellipse(fourstarx, fourstary, 10, 10);
    fill(255);
    ellipse(fivestarx, fivestary, 10, 10);
    fill(255);
    ellipse(sixstarx, sixstary, 10, 10);
    fill(255);
    ellipse(sevenstarx, sevenstary, 10, 10);
    fill(255);
    ellipse(eightstarx, eightstary, 10, 10);
    fill(255);
    ellipse(ninestarx, ninestary, 10, 10);
    fill(255);
}
function draw(){
    background(0);
    image(spaceman, x, 750, 75, 75);
    imageMode(CENTER);
    
    starset();

    if (keyIsDown(RIGHT_ARROW) && x < windowWidth){
        x += 5;
    }
    if (keyIsDown(LEFT_ARROW) && x > 0){
        x -= 5;
    }
}

