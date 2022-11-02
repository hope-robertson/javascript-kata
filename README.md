# Kata prototype

First get all set up by running `npm install` in this directory, this can take a few minutes.

[/src/index.js](./src/index.js) contains some incomplete functions, complete them to finish this kata.

Run `npm test` to test your code. When you're finished it should look like this.

```sh
╭─gerard@Gerards-MacBook-Air ~/code/kata-prototype 
╰─$ npm test
> test
> jest

 PASS  src/index.test.js
  concatMyArray
    ✓ returns a string (3 ms)
    ✓ returns a string where all the strings in the given array are joined together (1 ms)
    ✓ returns a string that matches the string given, but now joined together
  capitalize
    ✓ returns a string
    ✓ should map over an array of words from the given string and then return a string where each of the words starts with a capital letter. (1 ms)
    ✓ returns a string that matches the one it is given (but is now capitalized). (1 ms)
  whereAreYou
    ✓ returns the first object where the value of hiding is "Scooby". (2 ms)
  deBee
    ✓ returns a string
    ✓ returns a string where the word buzz has been removed.
    ✓ returns a string where the word buzz has been removed, regardless of capitalization. (1 ms)

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        0.781 s, estimated 1 s
Ran all test suites.
```