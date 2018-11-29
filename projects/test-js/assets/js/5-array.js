
var v = [1, 1, 1, 1]
function mirror(v) {
    console.log(v)
    
    for(var i = 0; i <= v.length-1; i++) {
        if(v[0] != v[i]) {
            console.log("false")
            return false;
        }
    }
    console.log("true")
    return true;
}
mirror(v)