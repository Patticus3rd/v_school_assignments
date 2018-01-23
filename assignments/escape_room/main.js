const rs = require("readline-sync");

console.log("You're walking in the woods...Theres no one around and your phone is dead Out of the corner of your eye, you spot him");

let inv = [];
let isAlive = true;

while(isAlive) {
    let userinput = rs.question("Its Shia LaBeouf!!!! What do you do?! Run Hide or Look in you bag for a Knife? ");
    userinput = userinput.toLowerCase();
    if(userinput.includes("hide") || userinput.includes("run")) {
        console.log("Sorry... um ... you died");
        isAlive = false;
        console.log("You let Shia Labeouf Win");
    } else if(userinput.includes("look") && userinput.includes("bag")) {
        if(inv.includes("knife")) {
            console.log("Good Job! Shia saw you pull the knife out.  He ran away!");
            break;
        } else {
            console.log("Sorry you dont have the knife you idiot.");
        }
    } else if(userinput.includes("look") || userinput.includes("bag")) {
        console.log("You find yourself back in time with a heavy metal object protuding out of your bag");
        inv.push("knife");
    } else if(userinput.includes("look")) {
        console.log("You are in a locked room.\nThere is a door, a hidden key and a hole in the wall.");        
    } else {
        console.log("Thats not one of the commands hurry and pick something else!");
    }
}