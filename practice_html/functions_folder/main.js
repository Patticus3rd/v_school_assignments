let counter = 0;


function add() {

    let beginningOfTime = new Date(counter);
    let minutes = beginningOfTime.getUTCMinutes();
    let seconds = beginningOfTime.getUTCSeconds();
    let mills = beginningOfTime.getUTCMilliseconds();
    console.log(minutes + ":" + seconds + ":" + mills)
    counter += 10;

    if (counter === 6000) {
        clearInterval(timer);
    }
}


let timer = setInterval(add, 10);