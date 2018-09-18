function setup(){
//creates an 800 pixel wide and 600 pixel high canvas
createCanvas(800, 600);
//colors the canvas black
background( "black" );
}
function draw(){
//create rectangle close to center of canvas 400 pixels wide and 300 high for head
//rounded edges 100 pixels
//fill face "purple"
fill( "purple" );
rect(200, 150, 400, 300, 100);
//create rectangle for nose
rect(300, 240, 200, 120, 40);
//create triangles for horn rgb fill horn 252 251 228
fill( 252, 251, 228 );
triangle(350, 150, 450, 150, 400, 50)
line(350, 150, 450, 140)
line(350, 130, 450, 120)
line(350, 110, 450, 100)
line(350, 90, 450, 80)
line(350, 70, 450, 60)
}
