// This function takes an array of objects.
// Use the .find() method and return the first object that “Scooby” is hiding within.
// Look at the whereAreYou tests in the index.test.js file or use console.log inside of the function to determine the structure of objects in the array.

// define function named whereAreYou which takes a single argument named arrayOfObjects
function whereAreYou(arrayOfObjects) {
  // use the find method to iterate through each object in the array and apply a callback function
  let discoveredObject = arrayOfObjects.find(
    // instructions for the callback function to check if the argument named 'hiding' within the current object has the value 'Scooby' using strict equality
    (object) => object.hiding === 'Scooby' // if this condition is true for an object in the array, the method will stop iterating and return that object
  )

  // return the value of discoveredObject
  return discoveredObject
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { whereAreYou }
