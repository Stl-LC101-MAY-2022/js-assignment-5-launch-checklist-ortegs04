// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
                document.getElementById("missionTarget").innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `
}

function validateInput(testInput) {
    let validationResponse = ["Empty", "Not a Number", "Is a Number"];
    if (testInput === "" || testInput === undefined) {
        return validationResponse[0];
    }
    if (isNaN(testInput)) {
        return validationResponse[1];
    } else {
        return validationResponse[2];
    }   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  
    if(validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "Empty"){
        alert("All fields are required!");
        console.log("empty"); 

    }else if(validateInput(pilot) == "Is a Number" || validateInput(copilot) == "Is a Number"){      
        alert("Make sure to enter valid iformation for each field!");
        console.log("is a number");  

    }else if(validateInput(fuelLevel) == "Not a Number" || validateInput(cargoLevel) == "Not a Number"){
        alert("Make sure to enter valid iformation for each field!");
        console.log("not a number");

    }else{
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        list.style.visibility = "visible";
        
        if(fuelLevel > 10000 && cargoLevel < 10000){
            document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
            document.getElementById("launchStatus").style.color = "green";
            list.style.visibility = "visible";
            console.log("ready");

        }else if(fuelLevel < 10000){
            document.getElementById("fuelStatus").innerHTML = `Fuel level to low for launch`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
            document.getElementById("launchStatus").style.color = "red";
            list.style.visibility = "visible";
            console.log("too low fuel");
            
        }else if(cargoLevel > 10000){
            document.getElementById("cargoStatus").innerHTML = `There is too much mass for the shuttle to take off`;
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`;
            document.getElementById("launchStatus").style.color = "red";
            list.style.visibility = "visible";
            console.log("too much cargoMass");
        }
   
    }
  
}

async function myFetch() {
    let planetsReturned;

    await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        planetsReturned = response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let onePlanet = Math.floor(Math.random()*planets.length);
    return planets[onePlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
