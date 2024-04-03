// This function takes an array of individual strings
// and then will need to .join() them together to return one string.

function concatMyArray(arrayOfStrings) {
  let joinedString = arrayOfStrings.join('')
  return joinedString
}
let arrayOfStrings = ['zoom', 'zoom', '!']
let result = concatMyArray(arrayOfStrings)
module.exports = { concatMyArray }
