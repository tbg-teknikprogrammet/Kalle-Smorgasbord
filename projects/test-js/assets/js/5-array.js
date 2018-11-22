var friend1 = "Ivy";
var friend2 = "Klaus";
var friend3 = "Bex";
var friend4 = "Mark";

var firends = ["Ivy", "Klaus", "Bex", "Mark"];

console.log(firends[2] + " <3 " + friends[1]);


//olika typer av array men visar samma sak 
var color = []; // standard
var color = new Array(); // rare not common 
var randomeArray = ["string", 31, true, false];


//push()

color = ["red", "green", "blue"];
console.log(color);
color.push("purple");
console.log(color);

//pop()
color.pop();//tar bort sista värdet

//unshift()
color.unshift("yellow");

//shift()
color.shift()

//indexOf()

//slice()

var fruits = ["Bannana", "Orange", "Lemon", "Mango", "Pear"];


var citrus = fruits.slice(1, 3);
console.log(citrus);
