if ( 5 > 3 ) {
    console.log("is greater than")
};

var cat = "cat"
var dog = "dog"
if ( cat.length === 3 ) {
    console.log("is the length of")
};

if (cat === dog ) {
    console.log("Maybe its catdog")
} else{
    console.log("not the same")
}
var person = {  
    name: "Bobby",
    age: 19
}
if(person.age > 18){
    console.log("You can go")
} else {
    console.log("Must have parentals with you")
};

var firstLetter = person.name
if(firstLetter[0] === "B" && person.age > 18) {
    console.log("You can still go")
}

if( 1 === "1" ) {
    console.log("strict");
} if( 1 === 1 ){
    console.log("loose");
} else {
    console.log("not equal at all");
}