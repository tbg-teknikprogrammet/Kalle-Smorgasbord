//fresh
document.getElementsByTagName("button")[0].addEventListener("click",menu);

function menu(vector) {
    var vector = [];
    var input = 0;
    while(input != "quit"){
        input = prompt("What do you want to modify")
        switch (input) {
            case "new":
            input = prompt("What do you want to remember?");
            vector.push(input);
            console.log("you have added: " + input)
                break;
            case "list":
            for(var i = 0; i <= vector.length-1; i++) 
                {
                    console.log(vector[i])
                }
                console.log("this is all the todo in your todo list")
                break;
            case "delete":
                input = prompt("What shit do you want to remove?");
                vector.splice(input , 1);
                console.log("you have deleted index: " + input + " from the list!")
                break;
            case "quit":

                break;
            default:
                console.writeline("please try again.")
                break;
    }
    
}}