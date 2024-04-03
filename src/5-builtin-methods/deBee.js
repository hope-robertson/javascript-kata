// This function takes a string.
// You will need to split the string into individual words before you filter out all those annoying buzzing sounds!
// It might be helpful to look at the deBee tests in the index.test.js file or use console.log inside of the function.

function deBee(sentence) {
  // split the sentence into words
  let words = sentence.split(' ')
  // filter out instances of the word 'buzz', in a case-insensitive way so that all instances get picked up regardless of capitalisation
  let filteredWords = words.filter((word) => word.toLowerCase() !== 'buzz')
  // join the now filtered words into a sentence
  let deeBeedSentence = filteredWords.join(' ')
  return deeBeedSentence
}

// write your code above this line----------------------------------
// -----------------------------------------------------------------
module.exports = { deBee }
