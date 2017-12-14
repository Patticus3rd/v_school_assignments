var rs = require("readline-sync")

var firstInput = rs.question("What is the first number?")
var secondInput = rs.question("What is the second number?")
var whichOperator = rs.question("What operator would you like to use?")


function totalOutput() {
    if( whichOperator === "+" ){
        console.log("Your total is:" + " " + Number(firstInput) + Number(secondInput)); 
    }if( whichOperator === "-"){
        console.log(firstInput - secondInput);
    }if( whichOperator === "*" ){
        console.log(firstInput * secondInput);
    }if( whichOperator === "%"){
        console.log(firstInput/secondInput);
    }else
    null
}

totalOutput()
