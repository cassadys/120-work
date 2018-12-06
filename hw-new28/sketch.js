// createCanvas window width/height run setup function
function setup() {
	createCanvas(windowWidth, windowHeight);
  //set noStroke for function
	noStroke();
}

//define variables
//add array for color changng values
let color1 = 255
let color2 = 0
let pos_x = 0
let pos_y = 0
let d = 10
let r = 5
let i = 0
let k = 0
//use variable to make number of ellipses change over time tried differfent amounts and liked 60-80
//too choppy making numbers closer together
//let eighty = [80, 75, 70, 65, 60, 55, 50, 55, 60, 65, 70, 75]
let idx = 0
let eighty = [80, 78, 76, 74, 72, 70, 68, 66, 64, 62, 60, 58, 56, 54, 52, 50, 48, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78]
//make array for x and y scale stretch effect
//let xStretchArray = [.1, .2, .3, .5, .8, 1.1, .8, .5, .3, .1]
//let yStretchArray = [.1, .2, .3, .5, .8, 1.1, .8, .5, .3, .1]
let xIdx = 0
let yIdx = 0
//make varialbe to change amount color value is changed by
let color2Mod = 5
//make array for different shapesArray * undone

//run draw function; set d for ellipse diameter to make 80 ellipses with for loop
function draw() {
	color2 += color2Mod
	if ( color2 > 255 ) {
		color2Mod = color2Mod * -1
	}
	if ( color2 < 0 ) {
		color2Mod = color2Mod * -1
	}
	color1--;
	if (color1 < -254) {
	  color1 = 255
	}
	idx++
	if (idx == (eighty.length - 1)) {
		idx = 0
	}
  let d = width/eighty[idx]
  let r = d/2
	background( abs(color1) );
  for (let pos_y = 0; pos_y < height; pos_y += d) {
  //1st row of ellipses using for fuction to draw ellipses every
	for (let i = 0; i < eighty[idx]; i++) {
    //fill to scale white to grey over ellipses
    fill((255/eighty[idx]*i), color2, random(255));
    //make ellipse pos_x+radius of circle pos_y+radius of circle to keep circle on screen
	ellipse(pos_x+r, pos_y+r, d);
		//use drawEllipse() function
		//drawEllipse();
    //pos_x is width divided by 80xi to get 80 evenly spaced circles along x axis
    pos_x = width/eighty[idx]*i;
    drawSliderEllipse();
  }
	//commented out, had weird unintentional effect on sketch not sure what it caused it
//	idx++
//if (idx == (eighty.length - 1)) {
//	idx = 0
//}
}
}

function drawSliderEllipse() {
  ellipse(((width/255)*color2), 15, 30)
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
color2 += 5
if ( color2 > 255 ) {
	color2 = 0
}
color1--;
if (color1 < -254) {
  color1 = 255
}

//function mousePressed() {
	//changed to idx++ in draw function
//	idx++
//	if (idx = (eighty.length -1)) {
	//	idx = 0
//	}


//commented out color2 click change to make color2Array
//  color2 += 10
//  if (color2 > 255) {
//    color2 = 0
//  }
//}
