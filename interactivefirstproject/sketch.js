
let spaceman;
let spaceinvader;
let shoot = false;
let bullety;
let bulletx;
let canshoot = true;
let invaders = []
let invadery = 0;
let wavecome = true;
let lastwave;
let startingy;
let x = 500;


function preload(){
    spaceman = loadImage("assets/spaceshooter.png");
    spaceinvader = loadImage("assets/spaceinvader.png");
    space = loadImage("assets/space.png");
} 


function setup(){
    createCanvas(windowWidth, windowHeight);
    background(space);
}


function draw(){
    background(0);
    image(spaceman, x, windowHeight - 25, 75, 75);
    imageMode(CENTER);

    if (keyIsDown(RIGHT_ARROW) && x < windowWidth){
        x += 10;
    }

    if (keyIsDown(LEFT_ARROW) && x > 0){
        x -= 10;
    }
    
        
    if (wavecome === true){
        for (let i = 0; i < 5; i++){
            invaders.push(random(0, width))
        }
        lastwave = millis();
        invadery = 0;
        }
        
        makeAliens();
    
    invadery += 1;
    checkWave();
    displayBullet();
}

function mouseClicked(){
    if (canshoot == true){
        bullety = height - 100;
        bulletx = x;
        canshoot = false;
    }
}


function displayBullet() {    
    
    bullety -= 10;
    
    if (bullety < 0){
        canshoot = true;
    }
    fill(255);
    rect(bulletx, bullety, 5, 30);
}

function checkWave(){
    if (millis() - lastwave >= 4000){
        wavecome = true;
    }
    else{
        wavecome = false;
    }
}

function makeAliens(){
    image(spaceinvader, invaders[0], invadery, 80, 75);
    image(spaceinvader, invaders[1], invadery, 80, 75);
    image(spaceinvader, invaders[2], invadery, 80, 75);
    image(spaceinvader, invaders[3], invadery, 80, 75);
    image(spaceinvader, invaders[4], invadery, 80, 75);
}