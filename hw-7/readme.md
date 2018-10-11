Skyler Cassady,
50

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

The Original code defines variables for the width, scale and x/y coordinates of an ellipse, creates a canvas 400 pixels high and as wide as the browser window.  It then draws a 40 pixel wide ellipse starting at the coordinate 10, 10.  Every frame x and  y coordinates for the ellipse are raised or lowered(with positive or negative delta value) by ball.delta_x/y * ball.scale_x/y. When X or Y go above height/width or below 0 the delta is flipped between negative and positive causing the x or y direction to switch.  ball.delta_x/y are mapped to mouseX and mouseY every mouse click between 0.5 and 10 causing the rate of movement to decrease or increase.

Depending on the X and Y coordinate of your mouse click you can change the direction and rate of movement of the ellipse.  High/low mouseX/Y values increase/decrease the rate of ball.x/y growth.

## How did you alter the sketch?

Added a variable (growthFActor) to increase the size of the ellipse by between 0 and 1 pixel per frame.  Mapped variable to mouseX on mouse click.  Added random(255) fill to R and B values, set G at 1.  Reset ball.width to 40 when mouse is pressed.  Changed canvas height from 400 pixels to windowHeight.
