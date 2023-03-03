// Write your JavaScript code here!


window.addEventListener("load", function () {
    let listedPlanets;
    //   Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse
      .then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
      })
      .then(function () {
        console.log(listedPlanets);
       let myPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(
          document,
          myPlanet.name,
          myPlanet.diameter,
          myPlanet.star,
          myPlanet.distance,
          myPlanet.moons,
          myPlanet.image
        ); //need to pass in info here
         console.log("OMG");
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      });
  
    let list = document.getElementById("faultyItems");
    let form = document.querySelector("form");
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevels = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    list.style.visibility = "hidden";
    console.log("hello");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      formSubmission(
        document,
        list,
        pilotName.value,
        copilotName.value,
        fuelLevels.value,
        cargoMass.value
      );
      console.log(pilotName.value);
    });
  });
  