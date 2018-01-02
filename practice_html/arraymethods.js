// function sortedDogOwners(arr) {
//     var vals = [];
//     for (var item of sortedDogOwners) {
//         vals.push(item.val);
//     }
// }

sortedDogOwners = ([{
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
    pets: ["dog", "cat"]
}, {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
    pets: ["dog"]
}, {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
    pets: ["cat", "parrot"]
}, {
    firstName: "Morty",
    lastName: "Smith",
    age: 13,
    pets: ["cat", "parrot", "dog"]
}, {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
    pets: ["dog"]
}])

var result = sortedDogOwners.map( dogs => ({ owners: dogs.firstName,}));
var sortResult = dogs
console.log(result)