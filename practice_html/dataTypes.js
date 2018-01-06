

const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]  
// console.log(multiD1.every(checkTypes))
// // returns false (inner arrays aren't consistent with each other's data types)

const multiD2 = [[true,false,true],[false,false,true]]  
// console.log(multiD2.some(checkTypes))
// returns true (each inner array contains the same data type as the others)

function checkTypes(arr) {  
    let initial = arr[0][0];
    return arr.every(subArr =>
        subArr.every(value =>
            typeof (value) === typeof (initial)
        )
    )
}

console.log(checkTypes(multiD2))


