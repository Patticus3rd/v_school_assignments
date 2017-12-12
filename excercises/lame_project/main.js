var rs = require("readline-sync");

var response = rs.question("What is your name?");

console.log(response.toLocaleUpperCase());