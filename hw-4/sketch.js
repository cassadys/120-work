function setup(){
//creates an 800 pixel wide and 600 pixel high canvas
createCanvas(800, 800);
//colors the canvas black
background( "black" );
}
function draw(){
//draw body ellipse filled purple
fill(75, 62, 145);
ellipse(400, 625, 400)
//create rectangle close to center of canvas 400 pixels wide and 300 high for head
//rounded edges 100 pixels
//fill face rgb 75, 62, 154 (purple)
fill(75, 62, 154);
rect(200, 150, 400, 300, 100);
//create rectangle for nose
fill(58, 48, 145
);
rect(300, 240, 200, 120, 40);
//create triangles for horn rgb fill horn 252 251 228
fill( 252, 251, 228 );
triangle(350, 150, 450, 150, 400, 50)
//draw lines for horn spiraling
line(350, 150, 450, 140)
line(350, 130, 450, 120)
line(350, 110, 450, 100)
line(350, 90, 450, 80)
line(350, 70, 450, 60)
//draw ellipse for eye fill white center y axis 45 pixels below top edge of head
fill( "white" )
ellipse(400, 195, 80)
//draw ellipse rgb 245, 119, 34 for iris same center as eyeball 55 pixels wide
fill(245, 119, 34)
ellipse(400, 195, 55)
//draw black pupil 45 pixels wide
fill( "black" )
ellipse(400, 195, 45)
//draw pink ellipses for nostrils 45 pixels wide; centers 100 pixels apart from eachother
fill( "pink" )
ellipse(350, 300, 45)
fill( "pink" )
ellipse(450, 300, 45)
//add white triangles for teeth
fill( "white" )
triangle(290, 361, 345, 361, 318, 410)
fill( "white" )
triangle(510, 361, 455, 361, 482, 410)
//purple triangles for wings and push() to trnaslate wings into position
push()
translate(145, 0);
fill(75, 62, 154)
triangle(440, 550, 490, 500, 540, 600)
pop()
push()
translate(-225, 0)
fill(75, 62, 154)
triangle(440, 550, 390, 500, 340, 600)
pop()
//purple circles for hands
fill(75, 62, 154)
ellipse(520, 600, 60)
fill(75, 62, 154)
ellipse(280, 600, 60)
}
