//STRING METHODS

//.concat()
var word1 = "This is a nice place to stay"
var word3 = " "
var word2 = "it looks like my room"
var fullWord = word1.concat(word3, word2)
function actualWord() {
    return fullWord
}
console.log(actualWord());

var userName = ["Lily", "Ted", "Robin", "Barney", "Robins Dogs"]
var postDefault = " has posted this"
var userPost = function getRandomUser() {
    for ( i=0; i < 5; i++)
    return Math.floor(Math.random()*userName.length)
}

console.log(userPost())