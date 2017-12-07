function someParameters(num1, num2) {
    return (num1 + num2)
};
console.log(someParameters( 6, 4 ));

function threeNumbers(num1, num2, num3){
    if (num1 > num2 && num3 )
    return num1
    if ( num2 > num1 && num3 )
    return num2
    if ( num3 > num1 && num2 )
    return num3
}

console.log(threeNumbers( 10, 7, 6))


var someFunction = function helloWorld(emptyString) {
    var emptyString = "";
    if (emptyString.length <= 20)
    return "this" + "plus"
    if (emptyString.length > 20)
    return "this one"
};

console.log(someFunction("This string is more than 20 characters long right?"))