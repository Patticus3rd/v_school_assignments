//write two functions that mimic the every method.
function callEvery(arr){
    for(i=0; i < arr.length; i++){
       return arr.map(() => {
           true
       })
    }
}

console.log(callEvery([1, 2, "a" ]))