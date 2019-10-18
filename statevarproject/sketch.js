//CS30
//Mr. Schellenberg
//Ben Jorgenson
//Town Builder game
//
//





//defining all variables we will be needing + arrays
let pop = 500;
let phase = "start";
let devstage = 1;
let onus = 4;
let parkcount = 0;
let windmillcount = 0;
let housecount = 0;
let schoolcount = 0;
let hospitalcount = 0;
let officetowercount = 0;
let bux = 10;
let popchange;
let onuschange = [-1, 0, 1, 2, 3];
let disaster = [false, false, false, false, false, false, false, false, false, true];
let losingPeople;
let gainingPeople;
let displayDisasterMessage = false;
let pressed = 0;
let startingtext;
let popcolour;

//loading in all the images that are used in the project
function preload(){
  girl = loadImage('assets/startinggirl.png');
  smalltown1 = loadImage('assets/smalltown1.png');
  smalltown2 = loadImage('assets/smalltown2.png');
  speechbubble = loadImage('assets/speechbubble.png');
  windmill = loadImage('assets/Windmill.png');
  house = loadImage('assets/house.png');
  hospital = loadImage('assets/hospital.png');
  school = loadImage('assets/school.png');
  officetower = loadImage('assets/officetower.png');
  park = loadImage('assets/park.png');
  uparrow = loadImage('assets/uparrow.png');
  downarrow = loadImage('assets/downarrow.png');
  city1 = loadImage('assets/city1.png');
  city2 = loadImage('assets/city2.png');
}


//the canvas is the height and width of the screen
function setup(){
  createCanvas(windowWidth, windowHeight);
  backgroundSet();
}

//draw loop
function draw(){
  backgroundSet();
  //the phase variable is set to start at the beginning. It displays a sprite who tells the user what to do
  if (phase === "start"){

    image(girl, width/2, height/2 - 100, 500, 500);
    image(speechbubble, width/2 - 100, height/2 - 250, 450, 300);
    textSize(25);
    text(startingtext, width/2 - 50, height/2 - 200);
    //depending on how many times the enter key is pressed, the pressed variable goes up and the message changes. If it is clicked four times, the phase is changed to play
    if (pressed === 0){
      startingtext = "Welcome to town builder";
    }
  }

  else if (phase === "play"){
    //text displayng the population and the change in population from the last year
    fill(popcolour);
    textSize(40);
    text("Population", width/2 - 150, height/2 - 200);
    textSize(80);
    text(Math.round(pop), width/2 - 125, height/2 - 100);

    //text on the left side displays the amount of each builsing that the user has accumulated
    textSize(25);
    text("Parks: " + parkcount, 100, 100);
    text("Windmills: " + windmillcount, 100, 125);
    text("Houses: " + housecount, 100, 150);
    text("Schools: " + schoolcount, 100, 175);
    text("Hospitals: " + hospitalcount, 100, 200);
    text("Office Towers: " + officetowercount, 100, 225);

    //next year button. user presses this if they are done buying things for the year or are out of bux. Triggers nextYear function
    fill("green");
    rect(width/2 + 600, height/2 - 400, 400, 200);
    textSize(25);
    fill("black");
    text("Next Year", width/2 + 650, height/2 - 300);

    //amount of bux that the player has
    textSize(45);
    fill("yellow");
    text("Bux: " + bux, width/2 + 450, height/2 - 300);
    
    //variables losingPeople and gainingPeople are set depending on the change in population from the last year. This is how we know whether to display the up arrow or the down arrow next to the population change
    if (losingPeople === true){
      image(downarrow, width/2 + 125, height/2 - 175 , 80, 80);
      
    }
    else if (gainingPeople === true){
      image(uparrow, width/2 + 125, height/2 - 175, 80, 80);      
    }
    
    //displays message indicating that there has been a disaster
    if (displayDisasterMessage === true){
      textSize(30);
      fill("red");
      text("OH NO! A disaster has occured!", width/2 - 150, height/2 - 300);
    }

    textSize(30);
    fill("black");
    text(Math.round(popchange), width/2 + 100, height/2 - 140);
  }
  drawBuyBoxes();
}

function keyPressed(){
  if (phase === "start"){
    if (keyCode === ENTER){
      pressed += 1;
    }
    if (pressed === 0){
      startingtext = "Welcome to town builder";
    }
    if (pressed === 1){
      startingtext = "You are the mayor of a failing town";
    }
    if (pressed === 2){
      startingtext = "Buy things to make people come to your town";
    }
    if (pressed === 3){
      phase = "play";
    }
  }
}

function backgroundSet(){
  if (pop < 1000){
    background(255);
    imageMode(CORNER);
    background(smalltown1);
    popcolour = "black";
  }
  else if (pop >= 1000 && pop < 10000){
    background(255);
    imageMode(CORNER);
    background(smalltown2);
    popcolour = "black";
  }
  else if (pop >= 10000 && pop < 100000){
    background(255);
    imageMode(CORNER);
    background(city1);
    popcolour = "black";
  }
  else if (pop >= 100000 && pop < 1000000){
    background(255);
    imageMode(CORNER);
    background(city2);
    popcolour = "grey";
  }
}

function drawBuyBoxes(){
  if (phase === "play"){
    fill("grey");
    rect(width/2 - 600, height/2 + 150, 200, 200);
    image(park, width/2 - 575, height/2 + 150, 150, 150);
    textSize(15);
    fill("black");
    text("Buy Park(10 bux)", width/2 - 575, height/2 + 330);

    fill("grey");
    rect(width/2 - 400, height/2 + 150, 200, 200);
    image(windmill, width/2 - 375, height/2 + 150, 150, 150);
    textSize(15);
    fill("black");
    text("Buy Windmill(5 bux)", width/2 - 375, height/2 + 330);

    fill("grey");
    rect(width/2 - 200, height/2 + 150, 200, 200);
    image(house, width/2 - 175, height/2 + 150, 150, 150);
    textSize(15);
    fill("black");
    text("Buy House(2 bux)", width/2 - 175, height/2 + 330);
     
    fill("grey");
    rect(width/2, height/2 + 150, 200, 200);
    image(hospital, width/2 + 25, height/2 + 150, 150, 150);
    textSize(15);
    fill("black")
    text("Buy Hospital(25 bux)", width/2 + 25, height/2 + 330);
    
    fill("grey");
    rect(width/2 + 200, height/2 + 150, 200, 200);
    image(school, width/2 + 225, height/2 + 150, 150, 150);
    textSize(15);
    fill("black");
    text("Buy School(20 bux)", width/2 + 225, height/2 + 330);
    
    fill("grey");
    rect(width/2 + 400, height/2 + 150, 200, 200);
    image(officetower, width/2 + 425, height/2 + 150, 150, 150);
    textSize(15);
    fill("black");
    text("Buy Office Tower(100 bux)", width/2 + 425, height/2 + 330);
  }
}

function mouseClicked(){
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
      if (bux - 20 >= 0){
        schoolcount += 1;
        bux -= 20;
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
  onus += random(onuschange);

  if (pop <= 0){
    pop = 0;
  }
  if (random(disaster) === true){
    bux = 0;
    displayDisasterMessage = true;
  }
  else displayDisasterMessage = false;
  
  updateChange();
  }
}


function updateChange(){
  if (popchange > 0){
    gainingPeople = true;
    losingPeople = false;
  }
  else if (popchange < 0){
    losingPeople = true;
    gainingPeople = false;    
  }
}