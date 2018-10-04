let circleX = 1
let circleY = 1
let translateX = 1
let translateY = 1
let rotate1 = 1
let scale2000 = 1
let quadX1 = 200
let quadX2 = 225
let quadX3 = 250
let quadX4 = 270
let quadY1 = 275
let quadY2 = 255
let quadY3 = 300
let quadY4 = 45
let map1 = 1
let map2 = 1
  //create window width/height canvas rgb 126, 186, 247
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(126, 186, 247);
    //noCursor();
  }

  //call draw function

  function draw(){
    //text(scale2000, 10, 10);
scale(scale2000);
scale2000=scale2000*random(.9, 1.1);
    //set frameRate 20
    frameRate(15);
    //random moving white line

    push();
    circleX = (circleX + random(-3, 3)) % width
    circleY = (circleY + 1) % height
    pop();

    push();
    //random translate tangerine
    translate(translateX % width, translateY % height);
    translateX=random(width);
    translateY=random(height);
//rotate tangerine
push();
rotate(radians(rotate1));
push();
fill( "white" );
noStroke();
ellipse(circleX, circleY, 3)
pop();
//draw orange ellipse for tangerine
    push();
    //noStroke();
    fill( "orange" );
      ellipse(200, 200, 80);
//rotate1=rotate1+1
rotate1=random(360)
//draw brown stem



    push();
    noStroke();
      fill(102, 53, 11);
    rect(200, 142 , 3, 18);
    pop();
//make black points on tangerine
    point(220, 180);
    point(210, 190);
    point(230, 210);
    point(170, 200);
    point(175, 180);
    point(187, 230);
    point(190, 200);
//make green leaf and translate into place
    push();
    translate(-14, -55);
    fill( "green" );
    quad(200, 200, 210, 200, 215, 205, 205, 205);
    pop();

    pop();

    pop();

    pop();

    rect(width/2, height/2, height/10);
    constrain(scale2000, .1, 5);

//make quad that moves every frame
    push();
    frameRate(15);
    noStroke();
fill(random(255));
    quad(quadX1, quadY1, quadX2, quadY2, quadX3, quadY3, quadX4, quadY4);
//adjust variables for quad
    quadX1=quadX4+1
    quadY1=quadY4+1
    quadX2=constrain(quadX2+random(100), 0, width);
    quadY2=quadY2+(random, -10, 10);
    quadX3=sqrt(quadX1);
    quadY3=sqrt(quadY1);
    quadX4=sqrt(quadX2*10)
    quadY4=random(height/10);
    pop();

    map1 = map(mouseX, 0, width, 0, 255);
    map2 = map(mouseY, 0, height, 0, 255);

  }

//mousePressed random background color reset
function mousePressed(){

  text(scale2000, 10, 10);
  background(random(255), map2, map1);
  //background(random(255), random(255), map1));
  //text to display scale on top left when mouse is clicked
  text(scale2000, 10, 10);
  scale2000=scale2000+.02
  //random reset quadX1, quadY1, quadX4, and quadY4
  quadX1=random(500);
  quadY1=random(500);
  quadY4=random(500);
  quadX4=random(500);
}
