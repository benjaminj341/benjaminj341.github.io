let x = 200;
let spaceman;
let spaceinvader;
let shoot = false;

function preload(){
    spaceman = loadImage("assets/spaceshooter.png");
    spaceinvader = loadImage("assets/spaceinvader.png")
} 


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw(){
    background(0);
    image(spaceman, x, windowHeight - 25, 75, 75);
    imageMode(CENTER);

    if (keyIsDown(RIGHT_ARROW) && x < windowWidth){
        x += 5;
    }
    if (keyIsDown(LEFT_ARROW) && x > 0){
        x -= 5;
    }
    let y = 0;

}
function mouseClicked(){
    let y = windowHeight - 40;
    rect(x, y, 5, 30);
    fill(255);
    y -= 5; 
}