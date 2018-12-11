//call setup function createCanvas widthxheight pixels
//definte star
let star1;
let star2;

function setup(){
createCanvas(600, 400);
star1 = new Star(100, 200, 50);
star2 = new Star(200, 100, 100);
}

function draw(){
  background(0);
  star1.move();
  star1.show();
  star2.move();
  star2.show();
}
//create "Star" class

class Star {
  //constructor function
  constructor(x, y, z){
    this.x = x
    this.y = y
    this.z = z
}

move(){
this.x = this.x + random( -10, 10 );
this.y = this.y + random( -10, 10 );
}

show(){
stroke(255);
strokeWeight(3);
noFill();
ellipse(this.x, this.y, this.z*2);
}
}
