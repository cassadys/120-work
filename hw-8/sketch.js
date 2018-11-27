// createCanvas window width/height run setup function
function setup() {
	createCanvas(windowWidth, windowHeight);
  //set noStroke for function
	noStroke();
}

//define variables
pos_x = 0
pos_y = 0
let d = 10
let r = 5
let i = 0
let k = 0

//run draw function; set d for ellipse diameter to make 80 ellipses with for loop
function draw() {
  let d = width/81
	background("green");
  //1st row of ellipses
	for (let i = 0; i < 80; i++) {
    //fill to scale white to grey over ellipses
    fill((255/80*i));
		ellipse(pos_x+r, pos_y+r, d);
    //shift ellipses on x axis with k variable increasing every frame
    pos_x = width/80*i+k;
  }
//2nd row of 80 ellipses
  for (let i = 0; i < 80; i++) {
    fill((255/80*i));
    ellipse(pos_x+r, pos_y+r+1/10*height, d);
    pos_x = width/80*i+k;
  }
//3rd row of ellipses
  for (let i = 0; i < 80; i++) {
    fill((255/80*i));
    ellipse(pos_x+r, pos_y+r+2/10*height, d);
    pos_x = width/80*i+k;
  }
//4th row of ellipses
  for (let i = 0; i < 80; i++) {
    fill((255/80*i));
    ellipse(pos_x+r, pos_y+r+3/10*height, d);
    pos_x = width/80*i+k;
  }
//5th row of ellipses
  for (let i = 0; i < 80; i++) {
    fill((255/80*i));
    ellipse(pos_x+r, pos_y+r+4/10*height, d);
    pos_x = width/80*i+k;
  }
//6th row of ellipses
  for (let i = 0; i < 80; i++) {
    fill((255/80*i));
    ellipse(pos_x+r, pos_y+r+5/10*height, d);
    pos_x = width/80*i+k;
  }
//7th row of ellipses
  for (let i = 0; i < 80; i++) {
    fill((255/80*i));
    ellipse(pos_x+r, pos_y+r+6/10*height, d);
    pos_x = width/80*i+k;
  }
//8th row of ellipses
  for (let i = 0; i < 80; i++) {
    fill((255/80*i));
    ellipse(pos_x+r, pos_y+r+7/10*height, d);
    pos_x = width/80*i+k;
  }
//9th row of ellipses
  for (let i = 0; i < 80; i++) {
    fill((255/80*i));
    ellipse(pos_x+r, pos_y+r+8/10*height, d);
    pos_x = width/80*i+k;
  }
//10th row of ellipses
  for (let i = 0; i < 80; i++) {
    fill((255/80*i));
    ellipse(pos_x+r, pos_y+r+9/10*height, d);
    pos_x = width/80*i+k;
  }
//increases pos_y +1 every frame and reset to 0 when it is greater than windowHeight
    pos_y++;
    if (pos_y > height) {
      pos_y = 0;
	}
  //increases k variable by +1 every frame up to 15 and resets; added to pos_x to make ellipses move 15 pixels to the right and reset to 0 
  k++;
  if (k > 15) {
    k = 0
  }
}
