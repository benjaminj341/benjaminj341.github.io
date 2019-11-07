
let george;
let jenna;

function setup(){
    createCanvas(windowWidth, windowHeight);
    george = new Walker(width/2 + 200, width/2);
    jenna = new Walker(width/2 - 200, width/2);
}

function draw(){
    george.move();
    jenna.move();
    george.display();
    jenna.display();
}

class Walker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.fillColor = color(random(255), random(255), random(255));
        this.stepSize = 3;
        this.radius = 3;
    }

    display() {
        fill(this.fillColor);
        noStroke();
        circle(this.x, this.y, this.radius * 2);
    }

    move() {
        let choice = random(100);
        if (choice < 25){
            this.y -= this.stepSize;
        }
        else if (choice < 50){
            this.y += this.stepSize;
        }
        else if (choice < 75){
            this.x -= this.stepSize;
        }
        else {
            this.x += this.stepSize;
        }
    }
}