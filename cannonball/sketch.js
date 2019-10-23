let cannonX;
let cannonY;
let cannonWidth;
let cannonLength;
let cannonAngle;
let bullets = [];

function setup(){
    createCanvas(windowWidth, windowHeight);

    cannonX = 75;
    cannonY = height - 150;
    cannonWidth = 50;
    cannonLength = 125;
    cannonAngle = 0;
}

function draw() {
    background(220);

    displayCannon();
    updateBullets();

    if (mouseIsPressed){
        fire();        
    }
}

function displayCannon(){
    push();
    translate(cannonX, cannonY);
    cannonAngle = atan2(mouseY - cannonY, mouseX - cannonX);
    rotate(cannonAngle);
    rect(0, -cannonWidth/2, cannonLength, cannonWidth);
    circle(0, 0, cannonWidth);
    pop();
}



function fire(){
    let thisBullet = {
        x: cannonX,
        y: cannonY,
        radius: cannonWidth,
        angle: cannonAngle,
        speed: 5
    };
    bullets.push(thisBullet);

}

function updateBullets(){
    for (let i = bullets.length - 1; i > 0; i--){
        if (bullets[i].x)


        bullets[i].x += bullets[i].speed * cos(bullets[i].angle);
        bullets[i].y += bullets[i].speed * sin(bullets[i].angle);
        ellipse(bullets[i].x, bullets[i].y, bullets[i].radius);

        if (thisBullet.x < 0 || thisBullet.x > width || thisBullet.y < 0 || thisBullet.y > height){
            bullets.splice(thisBullet);
        }   
    }
}