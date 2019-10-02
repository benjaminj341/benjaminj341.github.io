let pop = 500;
let phase = "start";
let devstage = 1;
let onus = 20;

function preload(){
  girl = loadImage('assets/startinggirl.png');
  smalltown1 = loadImage('assets/smalltown1.png');
  speechbubble = loadImage('assets/speechbubble.png');
  windmill = loadImage('assets/Windmill.png');
  house = 
}



function setup(){
  createCanvas(windowWidth, windowHeight);
  backgroundSet();
}

function draw(){
  backgroundSet();
  if (phase === "start"){

    image(girl, width/2, height/2 - 100, 500, 500);
    image(speechbubble, width/2 - 50, height/2 - 250, 300, 300);
    textSize(25);
    text("Buy stuff for your town!", width/2 - 50, height/2 - 200);
  }

  else if (phase === "play"){
    fill("black");
    textSize(40);
    text("Population", width/2 - 150, height/2 - 200);
    textSize(80);
    text(pop, width/2 - 125, height/2 - 100);
  }
  drawBuyBoxes();
}

function keyPressed(){
  if (phase === "start"){
    if (keyCode === ENTER){
      phase = "play";
    }
  }
}

function backgroundSet(){
  if (devstage === 1){
    background(255);
    imageMode(CORNER);
    background(smalltown1);
  }
}

function drawBuyBoxes(){
  if (phase === "play"){
    fill("grey");
    rect(width/2 - 400, height/2 + 150, 200, 200);
    image(windmill, width/2 - 375, height/2 + 150, 150, 150);
    textSize(15);
    text("Buy Windmill(5 Bux)", width/2 - 375, height/2 + 150);


    rect(width/2 - 200, height/2 + 150, 200, 200);

  }
}
