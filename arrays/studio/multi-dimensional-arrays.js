let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
const input = require('readline-sync');

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(',').sort();
equipment = equipment.split(',').sort();
pets = pets.split(',').sort();
sleepAids = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [
    food.push(),
    equipment.push(),
    pets.push(),
    sleepAids.push(),
];

console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let answer = input.question("Select a cabinet, 0-3: ");

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (answer === "0") {
    console.log(food);
} else if (answer === "1") {
    console.log(equipment);
} else if (answer === "2") {
    console.log(pets);
} else if (answer === "3") {
    console.log(sleepAids);
} else {
    console.log("ERROR");
}


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
