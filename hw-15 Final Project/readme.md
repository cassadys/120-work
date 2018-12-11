Skyler Cassady, 50

[Live Link](cassadys.github.io/120-work/hw-15%20Final%20Project)

# HW 15 | Final Project | Falling Orange Game

## Steps to Create the Falling Orange Game

1. Create arrays for falling orange shapes and fall speeds
2. Define variables(including score variable to keep track of clicked oranges)
3. createCanvas windowWidth x windowHeight
4. preload() PNG of basket and orange
5. Make mousePressed() function reference clicked() function inside of Fruit group to check distance between center of orange picture x, y and mouseX, mouseY; if the distance is less than the radius of the orange(mouse clicks inside of shape) then 100 points are added to "score" variable
6. Use text() function to display "score" variable as a number on top left of screen
7. Use orangeScale and basketScale variables to adjust size of basket/orange but decide against it because it makes coordinates distort and orange clicking not work
8. Use for loop to add fruitNumber of random fall speed values between .5 and 2.1
9. render basket image at mouseX and bottom of screen
10. Use for loop to draw "fruitNumber" of orange images at random x and y values, y values go up to -8000 px so the fruits will fall for a long time
11. adjust basket and orange to fit properly on screen
12. Use for loop and functions defined within Fruit class to make many random orange shapes that fall at variable speeds and will disappear when clicked adding 100 to "score" or subtract 200 from score if they fall above windowHeight
13. Adjust number of oranges and variables to make the game playable

### Issues

Had problems resizing a PNG image before saving it to the imgs folder causing the background to lose its opacity.  

Used scale to adjust the size of basket and orange and had another issue that stopped the clicked() function from working because of the distortion of distance

### Here is a screenshot of the Orange game
![Orange Game](imgs/Capture.JPG)
![Orange Game](imgs/Capture2.JPG)
