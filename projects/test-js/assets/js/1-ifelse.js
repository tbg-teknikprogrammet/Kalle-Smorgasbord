var name = "Kalaiselwen";
var age = 18;

if (age < 18) {
   console.log("LMAO, you are only " + age + " years old")
}

else if(age > 18 && age < 48) {
   console.log("Youre age is too cool 4 school")
}

else {
   console.log("Watch this xd!")
}

var number = 7;

var userInput = Number(prompt("Gissa ett nummer mellan 1-10"));
if(userInput === number) {
   document.writeln("Bra jobbat, bro! <br>");
}
else if(userInput >= 9001) {
   document.writeln("It's over 9000!");
}
else if(userInput === 6 || userInput === 8){
   document.writeln("Du är riktigt nära! Försök igen.");
}
else if(userInput > number) {
   document.writeln("Gissa lägre.");
}
else if(userInput < number) {
   document.writeln("Gissa högre.");
}
else {
   document.writeln("Endast siffror!");
}

var age = Number(prompt("Din ålder"));
if(age < 0) {
   document.writeln("u are yet to be born! nani?");
}
else if(age % 2 == 0) {
    document.writeln("even =");
}
else if(age % 2 != 0) {
   document.writeln("odd ≈");
}