# Javascript Katas

First get all set up by running `npm install` in this directory, this can take a few minutes.

This challenge is broken into 5 a suite, you can run them each individually by running `npm run` followed by the name of the suite, like this:

```sh
$ npm test 1-variables-and-objects
```

The suites are called:

1. `1-variables-and-objects`
2. `2-manipulating-objects`
3. `3-fizzbuzz`
4. `4-gradebook`
5. `5-builtin-methods`

or you can run them all at once like this:

```sh
$ npm test
```

When you've completed all 5 suites the output should look a little like this

```sh
$ npm test

> test
> jest

 PASS  src/5-builtin-methods/whereAreYou.test.js
 PASS  src/4-gradebook/index.test.js
 PASS  src/2-manipulating-objects/index.test.js
 PASS  src/5-builtin-methods/concatMyArray.test.js
 PASS  src/1-variables-and-objects/index.test.js
 PASS  src/3-fizzbuzz/super-fizzbuzz.test.js
 PASS  src/5-builtin-methods/capitalize.test.js
 PASS  src/5-builtin-methods/deBee.test.js
 PASS  src/3-fizzbuzz/fizzbuzz.test.js

Test Suites: 9 passed, 9 total
Tests:       2 skipped, 58 passed, 60 total
Snapshots:   0 total
Time:        0.883 s, estimated 1 s
Ran all test suites.
```
