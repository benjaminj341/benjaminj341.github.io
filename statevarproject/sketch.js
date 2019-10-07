let pop = 500;
let phase = "start";
let devstage = 1;
let onus = 5;
let parkcount = 0;
let windmillcount = 0;
let housecount = 0;
let schoolcount = 0;
let hospitalcount = 0;
let officetowercount = 0;
let bux = 5;
let popchange;

function preload(){
  girl = loadImage('assets/startinggirl.png');
  smalltown1 = loadImage('assets/smalltown1.png');
  speechbubble = loadImage('assets/speechbubble.png');
  windmill = loadImage('assets/Windmill.png');
  house = loadImage('assets/house.png');
  hospital = loadImage('assets/hospital.png');
  school = loadImage('assets/school.png');
  officetower = loadImage('assets/officetower.png');
  park = loadImage('assets/park.png');
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
    text(Math.round(pop), width/2 - 125, height/2 - 100);

    textSize(25);
    text("Parks: " + parkcount, 100, 100);
    text("Windmills: " + windmillcount, 100, 125);
    text("Houses: " + housecount, 100, 150);
    text("Schools: " + schoolcount, 100, 175);
    text("Hospitals: " + hospitalcount, 100, 200);
    text("Office Towers: " + officetowercount, 100, 225);


    fill("green");
    rect(width/2 + 600, height/2 - 400, 400, 200);
    textSize(25);
    fill("black");
    text("Next Year", width/2 + 650, height/2 - 300);

    textSize(45);
    fill("yellow");
    text("Bux: " + bux, width/2 + 450, height/2 - 300);

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
    rect(width/2 - 600, height/2 + 150, 200, 200);
    image(park, width/2 - 575, height + 150, 150, 150);
    textSize(15);
    fill("black");
    text("Buy Park(10 bux)", width/2 - 575, height/2 + 145);

    fill("grey");
    rect(width/2 - 400, height/2 + 150, 200, 200);
    image(windmill, width/2 - 375, height/2 + 150, 150, 150);
    textSize(15);
    fill("black");
    text("Buy Windmill(5 bux)", width/2 - 375, height/2 + 145);

    fill("grey");
    rect(width/2 - 200, height/2 + 150, 200, 200);
    image(house, width/2 - 175, height/2 + 150, 150, 150);
    textSize(15);
    fill("black");
    text("Buy House(2 bux)", width/2 - 175, height/2 + 145);
     
    fill("grey");
    rect(width/2, height/2 + 150, 200, 200);
    image(hospital, width/2 + 25, height/2 + 150, 150, 150);
    textSize(15);
    fill("black")
    text("Buy Hospital(25 bux)", width/2 + 25, height/2 + 145);
    
    fill("grey");
    rect(width/2 + 200, height/2 + 150, 200, 200);
    image(school, width/2 + 225, height/2 + 150, 150, 150);
    textSize(15);
    fill("black");
    text("Buy School(20 bux)", width/2 + 225, height/2 + 145);
    
    fill("grey");
    rect(width/2 + 400, height/2 + 150, 200, 200);
    image(officetower, width/2 + 425, height/2 + 150, 150, 150);
    textSize(15);
    fill("black");
    text("Buy Office Tower(100 bux)", width/2 + 425, height/2 + 145);
  }
}

function mouseClicked(){
  console.log(mouseX, mouseY);
  if (mouseX > width/2 + 400 && mouseX < width/2 + 600){
    if (mouseY > height/2 + 25 && mouseY < height/2 + 325){
      if (bux - 100 >= 0){
        officetowercount += 1;
        bux -= 100;
      }
    }
  }
  else if(mouseX > width/2 + 200 && mouseX < width/2 + 400){
    if (mouseY > height/2 + 25 && mouseY < height/2 + 325){
      if (bux - 25 >= 0){
        schoolcount += 1;
        bux -= 25;
      }
    }
  }
  else if (mouseX > width/2 - 200 && mouseX < width/2){
    if (mouseY > height/2 + 25 && mouseY < height/2 + 325){
      if (bux - 2 >= 0){
        housecount += 1;
        bux -= 2;
      }
    }
  }
  else if (mouseX > width/2 - 400 && mouseX < width/2 - 200){
    if (mouseY > height/2 + 25 && mouseY < height/2 + 325){
      if (bux - 5 >= 0){
        windmillcount += 1;
        bux -= 5;
      }
    }
  }
  else if (mouseX > width/2 && mouseX < width/2 + 200){
    if (mouseY > height/2 + 25 && mouseY < height/2 + 325){
      if (bux - 25 >= 0){
        hospitalcount += 1;
        bux -= 25;
      }
    }
  }
  else if (mouseX > width/2 - 600 && mouseX < width/2 - 400){
    if (mouseY > height/2 + 25 && mouseY < height/2 + 325){
      if (bux - 10 >= 0){
        parkcount += 1;
        bux -= 10;
      }
    }
  }
  else if (mouseX > width/2 + 600 && mouseX < width/2 + 1000){
    if (mouseY > height/2 - 400 && mouseY < height/2 - 200){
      newYear();   
  }
}

function newYear(){
  popchange = (housecount / 2) + windmillcount + (schoolcount * 2) + (hospitalcount * 2.5) + (parkcount * 1.5) + (officetowercount * 4) - onus;
  pop += popchange;
  bux += Math.round(pop/100);
  }
}
