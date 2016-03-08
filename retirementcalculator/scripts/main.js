// What is your current age? 25
// At what age would you like to retire? 65
// You have 40 years left until you can retire.
// It's 2015, so you can retire in 2055.


// Date.UTC(year, month, day[, hours[, minutes[, seconds[,ms]]]]) 


var age = prompt("What is your current age?");
var retireAge = prompt("At what age would you like to retire?");
var yearsToRetire = (retireAge - age);

var today = new Date();
// today.getFullYear();

var yearYouCanRetire = today.getFullYear() + (yearsToRetire);


document.write( " You have " + (yearsToRetire) + " years until you can retire! The year will be " + (yearYouCanRetire))

//dateObj.getFullYear();

// var today = newDate();  //will print out todays date

// var todayTwo = Date.now(); //seconds  as of 1970 weird

// today.getHours() //will get the hours of the variable today