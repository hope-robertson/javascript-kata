// This function takes a sentence, which is a string.
// It needs to .map() over every word in that sentence and Capitalize The First Letter Of Every Word.
// The function should return the modified sentence as a string.

function capitalize(string) {
  // this defines a function named capitalize which takes a string as input
  let words = string.split(' ') // this splits the input string into an array of individual words. The split method takes a delimiter (here is it the space character) and separates the string based on that delimiter. Each word will become an element in the array (words).
  let capitalizedWords = words.map((word) => {
    // this is using the map method on the words array, which iterates over each element in the array and applies a transformation function.
    return word[0].toUpperCase() + word.slice(1) // word[0].toUpperCase accesses the first character of the current word and converts it to uppercase using toUpperCase(). word.slice(1) extracts a substring of the word starting from the second character using slice. this gets rid of the word after the first character. the whole line of code put together joins the uppercasefirst character with the remaining substring and returns the transformed word with the capitalised first letter.
  })
  let capitalizedSentence = capitalizedWords.join(' ') // this joins the elements of the capitalizedWords array back into a single string using the join method. the space character is the separator.
  return capitalizedSentence // this returns the final capitalized sentence
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { capitalize }
