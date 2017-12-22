//track how many times the user clicks anywhere on the page or a button?
//and dislays the click on the count
//use local storage to make it so the number of click swill remain on the screen


var button = document.getElementById("button");
var counter = document.getElementById("counter");


let countClicks = 0;

function addCounter(event){
    countClicks++;
    let output = counter.innerHTML = `You Have Clicked This ${countClicks} times`;
}



button.onclick = addCounter;
