// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;

   // Set listedPlanetsResponse equal to the value returned by calling myFetch()

   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);

   }).then(function () {
       console.log(listedPlanets);

       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let pickedPlanetOne = pickPlanet(listedPlanets);
       addDestinationInfo(document, pickedPlanetOne.name, pickedPlanetOne.diameter, pickedPlanetOne.star, pickedPlanetOne.distance, pickedPlanetOne.moons, pickedPlanetOne.image);
   })
   
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
       let pilotName = document.querySelector('input[name="pilotName"]');
       let copilotName = document.querySelector('input[name="copilotName"]');
       let fuelLevel = document.querySelector('input[name="fuelLevel"]');
       let cargoMass = document.querySelector('input[name="cargoMass"]');
       let list = document.getElementById("faultyItems");
   
       formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
       event.preventDefault();
    });

});