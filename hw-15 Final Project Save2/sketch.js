//call setup function createCanvas widthxheight pixels
//definte star
let star1;
let star2;

function setup(){
createCanvas(600, 400);
star1 = new Star(100, 200, 50);
star2 = new Star(200, 100, 100);
str = new STR(100, 100);
str1 = new STR(200, 200);
}

function draw(){
  background(0);
  star1.move();
  star1.show();
  star2.move();
  star2.show();
  str.star();
  str1.star();
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

class STR {
  constructor(starX, starY){
    this.x = starX
    this.y = starY
  }

  star(){
    line(this.x, this.y, this.x, this.y - 30);
    line(this.x + 10, this.y, this.x + 10, this.y - 30);
    line(this.x + 20, this.y, this.x + 20, this.y - 30);
    line(this.x, this.y - 40, this.x, this.y - 70);
    line(this.x +10, this.y - 40, this.x +10, this.y - 70);
    line(this.x + 20, this.y - 40, this.x + 20, this.y - 70);
    line(this.x, this.y, this.x + 10, this.y + 10);
    line(this.x +10, this.y +10, this.x +20, this.y);
    line(this.x , this.y - 30, this.x + 10, this.y - 40);
    line(this.x + 10, this.y - 30, this.x + 20, this.y - 40);
    line(this.x, this.y - 40, this.x + 5, this.y - 35);
    line(this.x + 15, this.y - 35, this.x +20, this.y - 30);
    line(this.x, this.y - 70, this.x + 10, this.y - 80);
    line(this.x + 10, this.y - 80, this.x + 20, this.y - 70);
  }
}
