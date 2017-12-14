const rs = require("readline-sync");
//first component is a grid
//second component is a location object that contains info about a particular coordinate
//third component is the game loop
function whetherShip() {
    let randomNum = Math.floor(Math.random() * 10);
    return randomNum === 0;
}

function Location() {
    this.isShip = whetherShip();
    this.isHit = false;
    this.display = "~";
}

function Grid() {
    this.grid = [];
    this.totalShips = 0;
}
Grid.prototype.genGrid = function () {
    for (let i = 0; i < 8; i++) {
        this.grid.push([]);
        for (let j = 0; j < 8; j++) {
            let location = new Location();
            if (location.isShip) {
                this.totalShips++;
            }
            this.grid[i].push(location);
        }
    }
}
Grid.prototype.displayGrid = function () {
    //print the grid to the screen
    for (let i = 0; i < this.grid.length; i++) {
        let row = [];
        for (let j = 0; j < this.grid[i].length; j++) {
            row.push(this.grid[i][j].display);
        }
        console.log(row.join(" "));
    }
}
Grid.prototype.attack = function (x, y) {
    let coord = this.grid[y][x];
    coord.isHit = true;
    if (coord.isShip) {
        coord.display = "x";
        this.totalShips--;
    } else {
        coord.display = "o";
    }
}

// when the game starts, show a brand new grid
// [
//     ["~", "~", "~"],
//     ["~", "~", "~"],
//     ["~", "~", "~"]
// ]

// asks you to enter in an x and y coordinate
// shows the grid again but this time it displays the result of your attack
// [
//     ["~", "~", "~"],
//     ["~", "~", "~"],
//     ["O", "~", "~"]
// ]

//above process repeats until all ships are dead

// [
//     ["X", "~", "X"],
//     ["~", "X", "~"],
//     ["O", "~", "~"]
// ];

//print a victory message to the console and end game


let game = new Grid();
game.genGrid();


//keep track of all the past attacks
//make sure that we cant enter coordinates that arent on the grid

//GAME LOOP HELPER FUNCTIONS
function validateCoord(x, y) {
    x = Number(x);
    y = Number(y);
    let length = game.grid.length;
    return x >= 0 && x < length && y >= 0 && y < length;
}

function validateAttack(x, y){
    x = Number(x);
    y = Number(y);
    return !game.grid[y][x].isHit;
}


let turnCounter = 20;
console.log("\nWelcome to battleship!!\n");
game.displayGrid();
while (true) {
    console.log("\nRemaining turns: " + turnCounter + "\n");
    console.log("\nShips Left: " + game.totalShips + "\n");
    let xLimit = game.grid.length - 1;
    let yLimit = game.grid[0].length - 1;
    let x = rs.keyIn("Choose an X coordinate between 0 and " + xLimit + "\n", {limit: "$<0-" + xLimit +">"});
    let y = rs.keyIn("Choose a Y coordinate between 0 and " + yLimit + "\n", {limit: "$<0-" + yLimit +">"});
    if(!validateCoord(x, y)){
        console.log("\nSorry that is an invalid coordinate!\n");
        continue;
    }
    if(!validateAttack(x, y)){
        console.log("\nSorry you already attacked that location!\n");
        continue;
    }
    game.attack(x, y);
    turnCounter--;
    if(game.totalShips === 0){
        break;
    }
    if(turnCounter === 0){
        break;
    }
    
    game.displayGrid();
}

if (turnCounter > 0) {
    console.log("VICTORY!!!")
} else {
    console.log("defeat. you suck");
}