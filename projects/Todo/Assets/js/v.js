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
            break;
        case "list":
        for(var i = 0; i <= vector.length-1; i++) 
            {
                console.log(vector[i])
            }
            break;
        case "delete":
            input = prompt("What shit do you want to remove?");
            vector.splice(input , 1);
            break;
        case "quit":

            break;
        default:
            Console.writeline("please try again.")
            break;
    }
}}