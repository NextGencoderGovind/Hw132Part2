img="";

function preload() {
   img = loadImage('myDinning.jpg')
    
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
} 

function draw() {
    image(img, 0,0,640,420);
    fill("#FF0000")
    text("Dinning Room", 45, 75);
    noFill();
    stroke("#FF0000")
    rect(30,60,450,350);

    fill("#FF0000")
    text("Dinning table", 320, 120);
    noFill();
    stroke('#FF0000');
    rect(300,90,270,320);
}