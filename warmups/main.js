//accepts a string and returns a string
//


function isCaps(letter) {  
    return letter === letter.toUpperCase();
}


function antiCaps(string){
    var output = "";
    for( var i = 0; i < string.length; i++){
        if( isCaps(string[i])){
            output += string[i].toLowerCase();
        }else{
            output += string[i].toUpperCase();
        }

    }
    return output
}


console.log(antiCaps("String"));

