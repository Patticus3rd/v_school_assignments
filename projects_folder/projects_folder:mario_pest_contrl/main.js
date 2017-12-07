var goomba = document.getElementById("goomba");
var magiKoopa = document.getElementById("magikoopa");
var hammerBro = document.getElementById("hammerbro");
var koopaTroopa = document.getElementById("koopatroopa");
var dryBones = document.getElementById("drybones");
var shyGuy = document.getElementById("shyguy");
var output = document.getElementById("output");

// Baddie Var
var totalGoomba = document.getElementById("totalgoomba");
var totalMagiKoopa = document.getElementById("totalmagikoopa");
var totalHammerBro = document.getElementById("totalhammerbro");
var totalKoopaTroopa = document.getElementById("totalkoopatroopa");
var totalDryBones = document.getElementById("totaldrybones");
var totalShyGuy = document.getElementById("totalshyguy");

// Event Listeners
goomba.addEventListener("click", addGoomba);
magiKoopa.addEventListener("click", addMagiKoopa);
hammerBro.addEventListener("click", addHammer);
koopaTroopa.addEventListener("click", addKoopaTroopa);
dryBones.addEventListener("click", addBones);
shyGuy.addEventListener("click", addShyGuy);

// All Counters
var counter = 0;
var totalBaddie1 = 0;
var totalBaddie2 = 0;
var totalBaddie3 = 0;
var totalBaddie4 = 0;
var totalBaddie5 = 0;
var totalBaddie6 = 0;



// Functions to push for Listeneners
function addGoomba() {
    counter += 5;
    totalBaddie1++;
    output.innerHTML = "The total is: " + counter;
    totalGoomba.innerHTML = "Caught:" + totalBaddie1;
}

function addMagiKoopa() {
    counter += 7;
    totalBaddie2++;
    output.innerHTML = "The total is: " + counter;
    totalMagiKoopa.innerHTML = "Caught:" + totalBaddie2;
}

function addHammer() {
    counter += 9;
    totalBaddie3++;
    output.innerHTML = "The total is: " + counter;
    totalHammerBro.innerHTML = "Caught:" + totalBaddie3;
}

function addKoopaTroopa() {
    counter += 11;
    totalBaddie4++;
    output.innerHTML = "The total is: " + counter;
    totalKoopaTroopa.innerHTML = "Caught:" + totalBaddie4;
}

function addBones() {
    counter += 13;
    totalBaddie5++;
    output.innerHTML = "The total is: " + counter;
    totalDryBones.innerHTML = "Caught:" + totalBaddie5;
}

function addShyGuy() {
    counter += 15;
    totalBaddie6++;
    output.innerHTML = "The total is: " + counter;
    totalShyGuy.innerHTML = "Caught:" + totalBaddie6;
}


//HTML OUTPUT
output.innerHTML = "Total Gold: " + counter;
totalGoomba.innerHTML = "Caught:" + totalBaddie1;
totalMagiKoopa.innerHTML = "Caught:" + totalBaddie2;
totalHammerBro.innerHTML = "Caught:" + totalBaddie3;
totalKoopaTroopa.innerHTML = "Caught:" + totalBaddie4;
totalDryBones.innerHTML = "Caught:" + totalBaddie5;
totalShyGuy.innerHTML = "Caught:" + totalBaddie6;