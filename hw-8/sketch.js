// createCanvas window width/height run setup function
function setup() {
	createCanvas(windowWidth, windowHeight);
  //set noStroke for function
	noStroke();
}

//define variables
let color1 = 255
let color2 = 0
pos_x = 0
pos_y = 0
let d = 10
let r = 5
let i = 0
let k = 0
let eighty = 80

//run draw function; set d for ellipse diameter to make 80 ellipses with for loop
function draw() {
  let d = width/eighty
  let r = d/2
	background( abs(color1) );
  for (let pos_y = d; pos_y < height; pos_y += d) {
  //1st row of ellipses using for fuction to draw ellipses every
	for (let i = 0; i < eighty; i++) {
    //fill to scale white to grey over ellipses
    fill((255/eighty*i), color2, random(255));
    //make ellipse pos_x+radius of circle pos_y+radius of circle to keep circle on screen
		ellipse(pos_x+r, pos_y+r, d);
    //shift ellipses on x axis with k variable increasing every frame
    //pos_x is width divided by 80xi to get 80 evenly spaced circles along x axis
    pos_x = width/eighty*i;
    ellipse(((width/255)*color2), 30, 30)
  }
}
}
//increases pos_y +1 every frame and reset to 0 when it is greater than windowHeight
  //  pos_y++;)
    //if (pos_y > height) {
  //    pos_y = 0;
//	}
  //increases k variable by +1 every frame up to 15 and resets; added to pos_x to make ellipses move 15 pixels to the right and reset to 0
  //k++;
//  if (k > 15) {
//    k = 0
//  }
//subtract 1 from color1 and reset to 255 at -255 abs(color1) used for background
color1--;
if (color1 < -254) {
  color1 = 255
}

function mousePressed(){
  color2 += 10
  if (color2 > 255) {
    color2 = 0
  }
}
