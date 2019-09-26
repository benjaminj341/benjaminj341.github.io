let x;
let y;
let dx = 5;
let dy = 5;
let radius = 100;
let rectsize = 100;
let mode = "menu";

function setup(){
    createCanvas(windowWidth, windowHeight);

    x = width/2;
    y = height/2;
}

function draw(){
    background(255);

    if (mode === "menu"){
        showMenu();
        checkIfButtonClicked();
    }

    x += dx;
    y += dy;
    if (mode === "circle"){
        ellipse(x, y, radius);
        fill(0);
    }
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

function showMenu(){
    rectMode(CENTER);
    fill(255, 0, 0, 125);
    rect(width/2, height/2 - 200, 200, 150);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("Rectangle", width/2, height/2 - 100);

    fill(255, 0, 0, 125);
    rect(width/2, height/2 + 100, 400, 150);
    fill(0);
    text("circle", width/2, height/2 + 100);
}

function checkIfButtonClicked(){
    if (mouseIsPressed){
        if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 - 175 && mouseY < height/2 - 25){
            mode = "rect";
        }
        if (mouseX > width/2 - 200 && mouseX < width/2 + 200 && mouseY > height/2 + 100 && mouseY < height/ 2 + 175){
            mode = "circle";
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