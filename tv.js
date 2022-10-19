img="";

function preload() {
   img = loadImage('TvWall.jpg')
    
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
} 

function draw() {
    image(img, 0,0,640,420);
    fill("#FF0000")
    text("Tv room", 45, 75);
    noFill();
    stroke("#FF0000")
    rect(30,60,450,350);

    fill("#FF0000")
    text("Bed and Lamp", 320, 120);
    noFill();
    stroke('#FF0000');
    rect(300,90,270,320);
}