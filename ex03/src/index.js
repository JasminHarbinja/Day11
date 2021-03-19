// Create a temps array here
myPetsArray = ["Dog", "Cat"];
// End of temps  array 

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];

    // Only change code below this line
    //var myNewPets = myPetsArray();
    myNewPets.push("Bird", "Fish");
    var firstPet = myNewPets.shift();
    var lastPet = myNewPets.pop();
    myNewPets.unshift("Lion");
    return myNewPets;
    // Only change code above this line
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;