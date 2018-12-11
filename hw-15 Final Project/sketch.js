//call setup function createCanvas widthxheight pixels
//definte star
let stars = [];
// let starX = 1
// let starY = 1
let redStar = [];
let redNumber = 4
let starNumber = 1
let fallSpeed = 1
let fruitX = 50
let fruitY = 50
let fruitZ = 20
let fruit = []
let fruitNumber = 91
let orange;
let fruit1;
//fall speed array
let fallArray1 = [.7, 1, 1.1, 1.3, 1.5, .9, .8, 1.6, 1.4, 1.2];
let basket;
let basket1;
let basketX;
let basketY;
let basketScale = 1
let orangeScale = 1
let score = 0

function preload(){
  orange = loadImage('imgs/orange3.png')
  basket = loadImage('imgs/basket.png')
}

function mousePressed(){
  for (let i = 0; i < fruitNumber; i++){
if (fruit[i].clicked()) {
  fruit.splice(i, 1);
  i--;
  score += 100;
  function draw(){

  }

}

}
}
//call setup function
function setup(){
//create windowWith/windowHeight canvas
createCanvas(windowWidth, windowHeight);
//align text center
textAlign(CENTER, CENTER);
//set text size 30
textSize(30);
//for loop to add fruitNumber of random fall speed values to array
for (let i = 0; i < fruitNumber; i++){
  fallValue = random(16)/10 + .5
  fallArray1.push(fallValue);
}
//adjust basket size/orientation to fit screen
let basketY = windowHeight/basketScale - 100
let basketW = 300
let basketH = 180
basket1 = new Basket(basketY, basketW, basketH);
for (let i = 0; i < fruitNumber; i++){
let fruitX = random(windowWidth/orangeScale)
//make fruitY negative random so some fruit will appear far above screen and take a while to fall
let fruitY = -random(8000)
let fruitW = 100
let fruitH = 100
fruit[i] = new Fruit(fruitX, fruitY, fruitW, fruitH);
// let fruit1 = new Fruit(fruitX, fruitY);
// fruit.push(fruit1);
}
// commented out early code
// for (let i = 0; i < redNumber; i++){
// let x2 = random(width);
// let y2 = random(height);
// let z2 = random(150);
// let rStar = new RedStar(x2, y2, z2);
// redStar.push(rStar);
// }
// for (let i = 0; i < starNumber; i++){
//   let x = random(width);
//   let y = random(height);
//   let z = random(100);
//   stars[i] = new Star(x, y, z);
// }
//star1 = new Star(100, 200, 50);
//star2 = new Star(200, 100, 100);
//str = new STR(100, 100);
//str1 = new STR(200, 200);
}

function draw(){
  background(0);
  push();
  fill(255);
  text(score, 50, 100);
  pop();
  // let basketX = mouseX
  basket1.show();
    for(let i = 0; i < fruit.length; i++){
      fruit[i].show();
      fruit[i].fall(fallArray1[i]);
      fruit[i].clicked();
      fruit[i].fallen(i);
    }

  for (let i = 0; i < fruit.length; i++){
  fruit[i].show();
  fruit[i].fall(fallArray1[i]);
  fruit[i].clicked();
  fruit[i].fallen(i);
}
}


//   for (let i = 0; i < redStar.length; i++){
// redStar[i].move();
// redStar[i].show();
// }
// for (let i = 0; i < stars.length; i++){
//   stars[i].move();
//   stars[i].show();
//}

//commented out Star and RedStar class
//create redStar class ClassName {
// class RedStar {
//   constructor(x2, y2, z2) {
//     this.x = x2
//     this.y = y2
//     this.z = z2
//   }
//
//   //function to enable random movement of object 10 pixels up or down x and  y
//   move(){
//   this.x = this.x + random( -10, 10 );
//   this.y = this.y + random( -10, 10 );
// }
//
// //function to check distance from center of circle to mouse pointer, if it is less than the radius of the circle 'this.z' then the pointer is in side the circle and the message is sent to conosle.log
//   clicked(){
//     let d = dist(mouseX, mouseY, this.x, this.y);
//     if ( d < this.z ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// collision(){
//   let d2 = dist(redStar[i].x, redStar[i].y, stars[i].x, stars[i].y);
//   if ((redStar[i].r + stars[i].r) < d2){
//     stars.splice(i, 1);
//     i--;
//   }
// }
//   show(){
//   stroke("Red");
//   strokeWeight(3);
//   ellipse(this.x, this.y, this.z*2);
//   }
// }
//
// //create "Star" class
//
// class Star {
//   //constructor function
//   constructor(x, y, z){
//     this.x = x
//     this.y = y
//     this.z = z
// }
//
// move(){
// this.x = this.x + random( -10, 10 );
// this.y = this.y + random( -10, 10 );
// }
//
// collision(){
//   let d2 = dist(redStar[i].x, redStar[i].y, stars[i].x, stars[i].y);
//   if ((redStar[i].r + stars[i].r) < d2){
//     stars.splice(i, 1);
//     i--;
//   }
// }
// // clicked(){
// //   let d = dist(mouseX, mouseY, this.x, this.y);
// //   if ( d < this.z ) {
// //     console.log("CLICKED ON CIRCLE");
// //   }
// // }
//
// show(){
// stroke(255);
// strokeWeight(3);
// noFill();
// ellipse(this.x, this.y, this.z*2);
// }
// }

class Fruit {
  constructor(fruitX, fruitY, fruitR, fruitH){
    this.x = fruitX
    this.y = fruitY
    this.r = fruitR
    this.h = fruitH
  }
  fall(fallSpeed){
this.y = this.y + fallSpeed/orangeScale;
  }
    show(){
      push();
      scale(orangeScale)
      imageMode(CENTER);
      image(orange, this.x, this.y, this.r, this.h);
      pop();
    //   push();
    // fill("Orange");
    // ellipse(this.x, this.y, this.z*2);
    // pop();
  }
  clicked(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if ( d < 50 ) {
    return true;
  } else {
    return false;
  }
}
fallen(index){
  if ( this.y > height + 50){
    score = score - 200;
    fruit.splice(index, 1);
    //i--;
  }
}
}

class Basket {
  constructor(basketY, basketW, basketH){
  // this.x = basketX
  this.y = basketY
  this.w = basketW
  this.h = basketH
}
show(){
  push();
  scale(basketScale);
  imageMode(CENTER);
  image(basket, mouseX/basketScale, this.y, this.w, this.h);
  pop();
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
