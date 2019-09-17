let x;
let y;
let dx = 5;
let dy = 5;
let radius = 100;
let rectsize = 100;
let mode = "circle";

function setup(){
    createCanvas(windowWidth, windowHeight);

    x = width/2;
    y = height/2;
}

function draw(){
    background(255);

    x += dx;
    y += dy;
    if (mode === "circle"){
        ellipse(x, y, radius);
        fill(0);}
    else if (mode === "rect"){
        rect(x, y, radius, radius)
        fill(0);
    }
    
    if (mode === "circle"){
        if (x > width || x < 0){
            dx *= -1;
        }
     
        if (y > height || y < 0){
            dy *= -1;
    }
  }
    else if (mode === "rect"){
        rect(x, y, rectsize, rectsize)
        if (x > width - rectsize || x < 0){
            dx *= -1;
        }
        if (y > height - rectsize || y < 0){
            dy *= -1;
        }
    }
}

function windowResized(){
    setup();
}

function mouseClicked(){
    if (mode === "circle"){
        mode = "rect";
    }
    else if (mode === "rect"){
        mode = "circle";
    }
}