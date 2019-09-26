//Space Invaders #1
//Ben Jorgenson
//CS 30
//



//Variables Defined. In this setion I set my variables.
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

//Set All images that are used
function preload(){
    spaceman = loadImage("assets/spaceshooter.png");
    spaceinvader = loadImage("assets/spaceinvader.png");
    space = loadImage("assets/space.png");
} 

//Set the canvas to be the height and width of the screen
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
}

//draw loop
function draw(){
    //background is an image of space
    imageMode(CORNER);
    background(space);
    //drawing the spaceship from which I will shoot and setting the imagemode to the centre of the object
    imageMode(CENTER);
    image(spaceman, x, windowHeight - 25, 75, 75);
    
    //allowing the left and right arrow keys to control the movement of the spaceship
    if (keyIsDown(RIGHT_ARROW) && x < windowWidth){
        x += 10;
    }

    if (keyIsDown(LEFT_ARROW) && x > 0){
        x -= 10;
    }
    
    //Anytime the wavecome variable is true, which is every 20 seconds, I want a new wave of inavders to appear    
    if (wavecome === true){
        for (let i = 0; i < 5; i++){
            invaders.push(random(0, width))
        }
        //set the time that the last wave happed to millis()
        lastwave = millis();
        invadery = 0;
        }
        
        makeAliens();
    // move the y value of each invader down by 1 every time the program runs    
    invadery += 1; 

    checkWave();
    displayBullet();
    //check if bullet is in the same place as any given invader, splice the x value from the list of invader x values if the bullet is
    if (bulletx >= invaders[0] && bulletx <= invaders[0] - 75){
        invaders.splice(0);
        console.log("spliced");
    }
    if (bullety > invadery && bullety < invadery - 75){
        invaders.splice(1);
        console.log("spliced");
    }
    if (bullety > invadery && bullety < invadery - 75){
        invaders.splice(2);
        console.log("spliced");
    }
    if (bullety > invadery && bullety < invadery - 75){
        invaders.splice(3);
        console.log("spliced");
    }
    if (bullety > invadery && bullety < invadery - 75){
        invaders.splice(4);
        console.log("spliced");
    }
}

//when the mouse is clicked, it checks if there is another bullet on the screen. If so, it sets the x and y for the bullet which is drawn in displayBullet()
function mouseClicked(){
    if (canshoot == true){
        bullety = height - 100;
        bulletx = x;
        canshoot = false;
    }
    invaders.splice(0, 1);
}

//takes away from the y value of the bullet so that it moves up continually. Also redraws the bullet
function displayBullet() {        
    bullety -= 10;
    //if the bullet has left the screen, allow the user to shoot again
    if (bullety < 0){
        canshoot = true;
    }
    fill(255);
    noStroke();
    rect(bulletx, bullety, 5, 30);
}

//if millis() minus the last wave is 20000, or 20 seconds since the last time a wave of invaders was spawned, then empty the array that has the invader x values and then allow another wave to spawn
function checkWave(){
    if (millis() - lastwave >= 20000){
        wavecome = true;
        invaders = [];
    }
    else{
        wavecome = false;
    }
}

//Draws aliens. x values are set randomly and come from the invaders array
function makeAliens(){
    image(spaceinvader, invaders[0], invadery, 80, 75);
    image(spaceinvader, invaders[1], invadery, 80, 75);
    image(spaceinvader, invaders[2], invadery, 80, 75);
    image(spaceinvader, invaders[3], invadery, 80, 75);
    image(spaceinvader, invaders[4], invadery, 80, 75);
}

