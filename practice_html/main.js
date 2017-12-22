//create a function that converts str param to an array
//create a function that will check the array ( which should be the same as the original str)
//then seperates the array by a space and

let isPalindrome = (str) => {
    str = str.replace(/[^A-z]/g, "");
    for( let i = 0; i < str.length / 2; i++ ){
        let first = str[i].toLowerCase();
        let last = str[str.length - 1 - i].toLowerCase();
        if( first !== last) {
            return false;
        }
    }
    return true;
}

isPalindrome("yay")