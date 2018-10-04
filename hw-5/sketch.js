//define variables
let circleSize = 1
let colorX = 1
let colorY = 1
let colorZ = 1
//hide cursor
//needed to be inside of setup function to work
//noCursor();
//setup canvas and color background black
function setup(){
  createCanvas( windowWidth, 600);
  //createCanvas( 600, 600 );
  background(0);
  //moved from outside setup function
  noCursor();

}
//call draw function
function draw(){
//draw ellipse at cursor circleSize=viarable set to start at 1
  ellipse(mouseX, mouseY, circleSize);
  //fill rgb mouseX and mouseY multiplied by .425 to get 255 numbers out of 600px
  fill(colorX, colorY, colorZ);

//draw orange ellipse that rotates around an axis framecount/2 degrees
  push();
  translate(width/2, 500);
  rotate(radians(frameCount/2));
fill( "purple" );
  //fill( "orange" );
  ellipse(300, 100, 80);
  pop();

//make white outlined hollow triangle
push();
stroke( "white" );
noFill()
triangle(mouseX, 540, mouseX-30, 590, mouseX+30, 590);
triangle(mouseX, 60, mouseX-30, 10, mouseX+30, 10);
triangle(10, mouseY+30, 10, mouseY-30, 60, mouseY);
triangle(width-10, mouseY+30, width-10, mouseY-30, width-60, mouseY);
pop();
//make triangle on top of screen
//push();
//nofill();
//stroke( "white" );
//(mouseX, 100, mouseX-30, 50, mouseX+30, 50);
//pop();

    //add +1 to circleSize every frame
  circleSize = circleSize+1;
  //.425x600=255 600 pixels
  colorX = mouseX*(255/width);
  colorY = mouseY*.425;
  //.5*X+.5Y for 1-255 possible
  colorZ = colorX*.5+colorY*.5;
}

//reset circleSize to 1 when mouse is pressed
function mousePressed(){
  circleSize = 1;
//commented out color changing background
  //background(colorY, colorX, colorZ);
}
