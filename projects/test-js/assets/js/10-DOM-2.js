document.URL;
document.links;
document.body;
document.head;

//select

var element = document.getElementById("highlight");

var elements = document.getElementsByClassName("bolded");

var eles = document.getElementsByTagName("li");

var queryTag = document.querySelector(".bolded");

var queryAllTag = document.querySelectorAll(".bolded");
//1-5
var p1 = document.querySelectorAll("#first");
var p2 = document.querySelector("#first");
var p3 = document.getElementById("first");
var p4 = document.getElementsByTagName("p")[0];
var p5 = document.getElementsByClassName("special")[0];
