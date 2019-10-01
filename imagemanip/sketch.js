let oldman;
let filteredImage;

function preload(){
    oldman = loadImage("assets/oldman.jpg");
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    filteredImage = grayScale(oldman);
}

function draw(){
    background(220);

    imageMode(CENTER);
    image(filteredImage, mouseX, mouseY);

    grayScale();
}

function grayScale(){
    let img = createImage(sourceImage.width, sourceImage.height);

    img.loadPixels();
    sourceImage.loadPixels();

    for (let x = 0; x < sourceImage.width; x++){
        for (let y = 0; y < sourceImage.height; y++){
            let p = sourceImage.get(x, y);

            img.set(x, y, color(255, 0, 0));
        }
    }
    img.updatePixels();
    return img;
}