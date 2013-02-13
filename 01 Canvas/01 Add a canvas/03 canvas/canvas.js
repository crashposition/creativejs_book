    // screen size
var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,

    // canvas element and 2D context
    canvas = document.createElement( 'canvas' ),
    context = canvas.getContext( '2d' );

init();

function init() {
    // set up canvas
    document.body.appendChild(canvas);
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
}