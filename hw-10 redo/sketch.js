

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
let idx = 0
//added growthFactor variable
growthFactor = 0;
//create array to modify ball delta
let ballScaleArray = [ 1, 3, 4, 7, 11, 18, 29, 47, 76, 47, 29, 18, 11, 7, 4, 3, 1 ];



function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}



function draw() {
//adds ball.x to ball.x and ball.y to ball.y each frame mouse press changes scale and alters speed of growth
    ball.x += ( ball.delta_x * ball.scale_x + ballScaleArray[idx] );
    ball.y += ( ball.delta_y * ball.scale_y + ballScaleArray[idx] );
}

idx++
//flips delta every time x crosses 0 or width
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fill(random(255), 1, random(255));
    ellipse(ball.x, ball.y, ball.width, ball.width);

    ball.width = ball.width + growthFactor


}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
    ball.width = 40
    //change rate of growth from 0 per frame on mouseX=0 to +1 pixel per frame at MouseX=windowWidth
    growthFactor = map(mouseX, 0, width, 0, 1);
}
