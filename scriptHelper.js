// Write your helper functions here!


require("isomorphic-fetch");

function addDestinationInfo( document, name, diameter, star, distance, moons, imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  let missionDestination = document.getElementById("missionTarget");
  missionDestination.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
  numberInput = Number(testInput);
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(numberInput)) {
    return "Not a Number";
  } else if (isNaN(numberInput) === false) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let pilotStatus = document.getElementById("pilotStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let launchStatus = document.getElementById("launchStatus");

  if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ) {
      alert("All fields are required!");
      return;
      //console.log("help!!!")
  } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
    alert("Make sure to enter valid information for each field!");
      return;
  } else { //if all forms are filled in with appropriate values
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  }
  
  if (fuelLevel < 10000 && cargoLevel > 10000 ) {
    list.style.visibility = "visible";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
  } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
    list.style.visibility= "visible";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
  } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
    list.style.visibility= "visible";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
  } else {
    list.style.visibility= "visible";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "rgb(65, 159, 106)";
  }
  
}
//add document, list, back to formSubmission
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
   return response.json();
  });

  return planetsReturned;
}
//math.Random <=0 less than 1. need to round (down? so we can get index 0?) and have enough numbers for planets (6) in the array of objects.
//return the planet object at random indexes... 
function pickPlanet(planets) {
 let randomPlanet = Math.floor(Math.random()*planets.length);
 return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
