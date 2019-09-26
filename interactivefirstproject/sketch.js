//Space Invaders 
//Ben Jorgenson
//CS30 period 4
//Extra for experts justification:
//I have used several things in this project which weren't taught to us in class. Some of them are:
//-adding text to the screen, colouring and sizing the text
//-array splicing
//-collision detection
//-shooting projectiles
//-adding an image from the web as your background


//Defining all needed variables.
let spaceman;
let spaceinvader;
let bullety;
let bulletx;
let canshoot = true;
let invaders = []
let invadery = 0;
let wavecome = true;
let lastwave;
let x = 500;
let score = 0;

//Loading images that I will need from the assets folder
function preload(){
    spaceman = loadImage("assets/spaceshooter.png");
    spaceinvader = loadImage("assets/spaceinvader.png");
    space = loadImage("assets/space.png");
} 

//creating our canvas. Defined as the height and width of the screen it is displayed on.
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(space);
}

//Draw loop
function draw(){
    //drawing my background and the sapceship
    ImageMode(CORNER);
    background(space);
    ImageMode(CENTER);
    image(spaceman, x, windowHeight - 25, 75, 75);
    
    //creating text in the upper right-hand corner that indicates the score, or how many invaders the user has taken out so far
    textSize(32);
    fill("blue");
    text('Score:' + score, width - 100, 20);
    
    //Controls. Moves the spaceship left and right with the arrow keys
    if (keyIsDown(RIGHT_ARROW) && x < windowWidth){
        x += 10;
    }

    if (keyIsDown(LEFT_ARROW) && x > 0){
        x -= 10;
    }
    
    // when the wavecome variable becomes true, we are throwing 5 random x values into the invaders array    
    if (wavecome === true){
        for (let i = 0; i < 5; i++){
            invaders.push(random(0, width))
        }
        //Here, after the new wave of invaders has been spawned, we set the lastwave variable to the current time and the y position of the wave back to 0 
        lastwave = millis();
        invadery = 0;
        }
        
        makeAliens();
    //the y poisiton of the invaders moves down one pixel every run of the draw loop
    invadery += 1;
    checkWave();
    displayBullet();
    collisionDetect();
}

//When the mouse is clicked, if there is no bullet already on the screen we set the coordinates for new a bullet, which will be fired via the displayBullet function
function mouseClicked(){
    if (canshoot == true){
        bullety = height - 100;
        bulletx = x;
        canshoot = false;
    }
}

function displayBullet() {    
    
    //moves the bullet up the screen
    bullety -= 10;
    
    //if the y value of the last bullet is less than zero, it is off the screen and so we can make a new one.
    if (bullety < 0){
        canshoot = true;
    }
    //draw the bullet
    fill(255);
    rect(bulletx, bullety, 5, 30);
}

//checks how long it has been since the last wave of invaders spawned. If it has been 20 seconds or more, than it is time to make a new wave
function checkWave(){
    if (millis() - lastwave >= 20000){
        wavecome = true;
    }
    else{
        wavecome = false;
    }
}

//this spawns the invaders at the x positions from the invaders array
function makeAliens(){
    image(spaceinvader, invaders[0], invadery, 80, 75);
    image(spaceinvader, invaders[1], invadery, 80, 75);
    image(spaceinvader, invaders[2], invadery, 80, 75);
    image(spaceinvader, invaders[3], invadery, 80, 75);
    image(spaceinvader, invaders[4], invadery, 80, 75);
}

//detects if the bullet is in the same place as one of the invaders, if so, it will remove that invaders x value from the array and add one point to the score
function collisionDetect(){
    if (bullety <= invadery + 75 && bullety >= invadery && bulletx >= invaders[0] && bulletx <= invaders[0] + 80){
        invaders.splice(0, 1);
        score += 1;
    }
    else if (bullety <= invadery + 75 && bullety >= invadery && bulletx >= invaders[1] && bulletx <= invaders[1] + 80){
        invaders.splice(1, 1);
        score += 1;
    }
    else if (bullety <= invadery + 75 && bullety >= invadery && bulletx >= invaders[2] && bulletx <= invaders[2] + 80){
        invaders.splice(2, 1);
        score +=1;
    }
    else if (bullety <= invadery + 75 && bullety >= invadery && bulletx >= invaders[3] && bulletx <= invaders[3] + 80){
        invaders.splice(3, 1);
        score += 1;
    }
    else if (bullety <= invadery + 75 && bullety >= invadery && bulletx >= invaders[4] && bulletx <= invaders[4] + 80){
        invaders.splice(4, 1);
        score += 1;
    }
}