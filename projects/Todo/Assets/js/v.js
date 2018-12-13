//fresh
document.getElementsByTagName("button")[0].addEventListener("click",menu);
//on the button click starts the while loop
function menu(vector) { //runs the function meny and creates a empty array
    var vector = [];
    var input = 0;
    while(input != "quit"){
        input = prompt("What do you want to modify")
        switch (input) {// same as if else
            case "new"://adds item to the end of the array
            input = prompt("What do you want to remember?");
            vector.push(input);
            console.log("you have added: " + input)
                break;
            case "list"://shows all in the array
            for(var i = 0; i <= vector.length-1; i++) 
                {
                    console.log(vector[i])
                }
                console.log("this is all the todo in your todo list")
                break;
            case "delete"://delets the item on the list via index
                input = prompt("What shit do you want to remove?");
                vector.splice(input , 1);
                console.log("you have deleted index: " + input + " from the list!")
                break;
            case "quit":

                break;
            default://same as try catch in C#
                console.log("please try again.")
                break;
    }
    
}}