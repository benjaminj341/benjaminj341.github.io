
let spaceman;
let spaceinvader;
let shoot = false;
let bullety;
let bulletx;
let canshoot = true;
var inavders = []
let invadery = 0;
let wavecome = true;
let lastwave;
let startingy;
let x = 500;

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
    
    for (i = 0; i < 5; i++){
        image(spaceinvader, random(0, width), invadery, 80, 75);
    }
        

    if (wavecome === true){
        lastwave = millis();
        invadery = 0;
        
        
        }
    
    invadery -= 0.003;
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
    if (millis() - lastwave >= 40000){
        wavecome = true;
    }
    else{
        wavecome = false;
    }
}