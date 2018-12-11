//call setup function createCanvas widthxheight pixels
//definte star
let stars = [];
// let starX = 1
// let starY = 1
let redStar = [];
let redNumber = 1
let starNumber = 1
let fallSpeed = 1
let fruitX = 50
let fruitY = 50
let fruitZ = 20
let fruit = []
let fruitNumber = 5
let orange;
let fruit1;

function preload(){
  orange = loadImage('imgs/orange2.png')
}

function mousePressed(){
  for (let i = 0; i < redNumber; i++){
if (redStar[i].clicked()) {
  redStar.splice(i, 1);
  i--;
}
}
}

function setup(){
createCanvas(windowWidth, windowHeight);
for (let i = 0; i < fruitNumber; i++){
let fruitX = random(width)
let fruitY = 50
let fruit1 = new Fruit(fruitX, fruitY);
fruit.push(fruit1);
}
for (let i = 0; i < redNumber; i++){
let x2 = random(width);
let y2 = random(height);
let z2 = random(150);
let rStar = new RedStar(x2, y2, z2);
redStar.push(rStar);
}
for (let i = 0; i < starNumber; i++){
  let x = random(width);
  let y = random(height);
  let z = random(100);
  stars[i] = new Star(x, y, z);
}
//star1 = new Star(100, 200, 50);
//star2 = new Star(200, 100, 100);
//str = new STR(100, 100);
//str1 = new STR(200, 200);
}

function draw(){
  background(0);
  for (let i = 0; i < fruit.length; i++){
  fruit[i].show();
  fruit[i].fall(1);
}
  for (let i = 0; i < redStar.length; i++){
redStar[i].move();
redStar[i].show();
}
for (let i = 0; i < stars.length; i++){
  stars[i].move();
  stars[i].show();
}
}

//create redStar class ClassName {
class RedStar {
  constructor(x2, y2, z2) {
    this.x = x2
    this.y = y2
    this.z = z2
  }

  //function to enable random movement of object 10 pixels up or down x and  y
  move(){
  this.x = this.x + random( -10, 10 );
  this.y = this.y + random( -10, 10 );
}

//function to check distance from center of circle to mouse pointer, if it is less than the radius of the circle 'this.z' then the pointer is in side the circle and the message is sent to conosle.log
  clicked(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if ( d < this.z ) {
    return true;
  } else {
    return false;
  }
}
collision(){
  let d2 = dist(redStar[i].x, redStar[i].y, stars[i].x, stars[i].y);
  if ((redStar[i].r + stars[i].r) < d2){
    stars.splice(i, 1);
    i--;
  }
}
  show(){
  stroke("Red");
  strokeWeight(3);
  ellipse(this.x, this.y, this.z*2);
  }
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

collision(){
  let d2 = dist(redStar[i].x, redStar[i].y, stars[i].x, stars[i].y);
  if ((redStar[i].r + stars[i].r) < d2){
    stars.splice(i, 1);
    i--;
  }
}
// clicked(){
//   let d = dist(mouseX, mouseY, this.x, this.y);
//   if ( d < this.z ) {
//     console.log("CLICKED ON CIRCLE");
//   }
// }

show(){
stroke(255);
strokeWeight(3);
noFill();
ellipse(this.x, this.y, this.z*2);
}
}

class Fruit {
  constructor(fruitX, fruitY){
    this.x = fruitX
    this.y = fruitY
  }
  fall(fallSpeed){
this.y = this.y + fallSpeed
  }
    show(){
      background(255);
      image(orange, this.x, this.y);
    //   push();
    // fill("Orange");
    // ellipse(this.x, this.y, this.z*2);
    // pop();
  }
}

//              /\
//             |||
//             \\
//            |||
//            \/
// class STR {
//   constructor(starX, starY){
//     this.x = starX
//     this.y = starY
//   }
//
//   star(){
//     line(this.x, this.y, this.x, this.y - 30);
//     line(this.x + 10, this.y, this.x + 10, this.y - 30);
//     line(this.x + 20, this.y, this.x + 20, this.y - 30);
//     line(this.x, this.y - 40, this.x, this.y - 70);
//     line(this.x +10, this.y - 40, this.x +10, this.y - 70);
//     line(this.x + 20, this.y - 40, this.x + 20, this.y - 70);
//     line(this.x, this.y, this.x + 10, this.y + 10);
//     line(this.x +10, this.y +10, this.x +20, this.y);
//     line(this.x , this.y - 30, this.x + 10, this.y - 40);
//     line(this.x + 10, this.y - 30, this.x + 20, this.y - 40);
//     line(this.x, this.y - 40, this.x + 5, this.y - 35);
//     line(this.x + 15, this.y - 35, this.x +20, this.y - 30);
//     line(this.x, this.y - 70, this.x + 10, this.y - 80);
//     line(this.x + 10, this.y - 80, this.x + 20, this.y - 70);
//   }
// }
