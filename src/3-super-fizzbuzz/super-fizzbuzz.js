/** @format */

const { fizzbuzz } = require('./fizzbuzz')
// The above line of code is importing your fizzbuzz function from the previous file you were working on
// This allows you to use that function in this exercise

// Write a function called superFizzbuzz which takes an array of numbers as its input.

// It should loop over that array and then return a "fizzbuzzed" array
// i.e. the array is identical to the original, but with the following changes:
// For example:

// superFizzbuzz([1,2,3])         will return [1, 2, "Fizz"]
// superFizzbuzz([1,2,5])         will return [1, 2, "Buzz"]
// superFizzbuzz([1,2,15])        will return [1, 2, "FizzBuzz"]
// superFizzbuzz([30, 9, 20, 1])  will return ["FizzBuzz", "Fizz", "Buzz", 1]

// write your code below this line---------------------------------

function superFizzbuzz(arrayParameter) {
  // Create a new empty array to store fizzbuzzed results
  const fizzbuzzedArray = []
  // Loop with each element in the array
  for (let i = 0; i < arrayParameter.length; i++) {
    const currentNumber = arrayParameter[i]
    // call the imported fizzbuzz function on current number
    const fizzbuzzResult = fizzbuzz(currentNumber)
    // push the fizzbuzz result into new array=
    fizzbuzzedArray.push(fizzbuzzResult)
  }
  return fizzbuzzedArray
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { superFizzbuzz }

