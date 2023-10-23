img = "";
status = "";


function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function preload() {
    img = loadImage('epicBedroom.jpg')
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill('#42f5e9');
    text('Bed',310, 165);
    noFill();
    stroke('#42f5e9');
    rect(300, 150, 300, 175);

    fill('#42f5e9');
    text('Couch', 95, 205);
    noFill();
    stroke('#42f5e9');
   rect(90, 190, 90, 120);
}

function modelLoaded() {
    console.log('Model Loaded');
    status = true;
    objectDetector.detect(image, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);

    }
    console.log(results);
}