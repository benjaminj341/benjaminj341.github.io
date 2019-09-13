let x = 200;
let spaceman;
let spaceinvader;



function preload(){
    spaceman = loadImage("assets/spaceshooter.png");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
    
}
function draw(){
    background(0);
    image(spaceman, x, 750, 75, 75);
    imageMode(CENTER);

    let starx = random(0, windowWidth);
    let stary = random(0, windowHeight);
    ellipse(starx, stary, 10, 10);
    fill(255);

    if (keyIsDown(RIGHT_ARROW) && x < windowWidth){
        x += 5;
    }
    if (keyIsDown(LEFT_ARROW) && x > 0){
        x -= 5;
    }
}

