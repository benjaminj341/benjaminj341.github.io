let x = 200;
let spaceman;
let spaceinvader;
let shoot = false;
let bullety;
let bulletx;
let canshoot = true;
var inavders = []
let invadery = 0;


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
    image(spaceinvader, random(0, width), invadery, 80, 75);

    displayBullet();
    displayInvader();
}
function mouseClicked(){
    if (canshoot == true){
        bullety = height - 100;
        bulletx = x;
        canshoot = false;
    }
}


function displayBullet() {    
    if (bullety >= 0){
        bullety -= 5;
    }
    else if (bullety < 0){
        canshoot = true;
    }
    fill(255);
    rect(bulletx, bullety, 5, 30);
}

function displayInvader(){
    let y = 1;
    invadery = y;
    if (y < height){
        y += 1;
    }
}