// How many square feet do you need to paint? 360
// You will need to purchase 2 gallons of paint to cover 360 square feet.

// prompt for length and width
// one gallon covers 360 sq feet display number of gallons needed to paint the ceiling as a whole number

var lengthOfRoom = prompt("Enter the length of the room you want to paint the ceiling of");

var widthOfRoom = prompt("Enter the width of the room you want to paint the ceiling of");

var ceilingPaint = (lengthOfRoom * widthOfRoom);

var gallonsNeeded = Math.ceil(ceilingPaint/180)

document.write("You need " + (gallonsNeeded) +  " gallons of paint to paint the ceiling");




