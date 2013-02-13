    // grab screen size
var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,

    // init canvas element and 2D context
    canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

    // init canvas size
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;

draw();

function draw(){
    // draw a rectangle
    context.fillStyle = "blue";
    context.fillRect(50,50,200,100);

    // draw a red rectangle with a yellow border
    context.beginPath();
    context.rect(50, 200, 200, 100);
    context.fillStyle = 'red';
    context.fill();
    context.lineWidth = 4;
    context.strokeStyle = 'yellow';
    context.stroke();
}

