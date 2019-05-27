var pic = document.getElementById("images");
var picArray = ["assets/img/PoE.jpg", "assets/img/RoE.png", "assets/img/LoL.jpg", "assets/img/RO.jpg"];
var picIndex =  1;

function slidesShowRight (){
    pic.setAttribute("src", picArray[picIndex]);
    picIndex = picIndex +1;
    if (picIndex > 3 ) {picIndex = 0;}
}

function slidesShowLeft (){
    pic.setAttribute("src", picArray[picIndex]);
    picIndex = picIndex -1;
    if (picIndex > 3 ) {picIndex = 0;}
}