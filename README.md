# Javascript Katas

First get all set up by running `npm install` in this directory, this can take a few minutes.

This challenge is broken into 5 suites, you can run them each individually by running `npm run` followed by the name of the suite, like this:

```sh
$ npm test 1-variables-and-objects
```

The suites are called:

1. `1-variables-and-objects`
2. `2-manipulating-objects`
3. `3-super-fizzbuzz`
4. `4-gradebook`
5. `5-builtin-methods`
6. `6-js-olympics`

or you can run them all at once like this:

```sh
$ npm test
```

When you first run the suites you'll see that all the tests are failing, your job is to go through each suite in order and update the code so that the tests pass.

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

The last test suite is optional, so it currently starts like this:

```js
describe.skip('The JS Olympics (stretch)', () => {
```

This means the tests won't run, to active these tests just remove the `.skip` so it looks like this:

```js
describe('The JS Olympics (stretch)', () => {
```
