// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM"
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
let fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
let fuelLevel = "100%"; 
let weatherStatus = !"clear";
let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {
    (preparedForLiftOff = true);
}

// add logic below to verify all astronauts are ready

else if (astronautStatus === "ready") {
    (preparedForLiftOff = true);
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

else if (totalMassKg <= maximumMassLimit) {
    (preparedForLiftOff = true);
} 
    
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

else if (fuelTempCelsius < -150 && fuelTempCelsius > -300) {
    (preparedForLiftOff = true);
}

// add logic below to verify the fuel level is at 100%

else if (fuelLevel === "100%") {
    (preparedForLiftOff = true);
}

// add logic below to verify the weather status is clear

else if (weatherStatus === "clear") {
    (preparedForLiftOff = true);
}
else {
    (preparedForLiftOff = false);
}
// Verify shuttle launch can proceed based on above conditions

if (preparedForLiftOff = true) {
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log("----------------------------------------------------------------");
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Astronaut Count: " + astronautCount);
    console.log("Crew Mass: " + crewMassKg + " kg");
    console.log("Fuel Mass: " + fuelMassKg + " kg");
    console.log("Shuttle Mass: " + shuttleMassKg + " kg");
    console.log("Total Mass: " + totalMassKg + " kg");
    console.log("Fuel Temperature: " + fuelTempCelsius + " °C");
    console.log("Weather Status: " + weatherStatus);
    console.log("----------------------------------------------------------------");
    console.log("Have a safe trip astronauts!");
} else {
    console.log("LAUNCH ABORTED! CHECK SHUTTLE SYSTEMS!");
}
