const { superFizzbuzz } = require('./super-fizzbuzz')

describe('superFizzbuzz', () => {
  it('should return an empty array when passed an empty array', () => {
    expect(superFizzbuzz([])).toDeeplyEqual([])
  })

  it('should return an array of [1, 2] as is', () => {
    expect(superFizzbuzz([1, 2])).toDeeplyEqual([1, 2])
  })

  it("should convert numbers divisble by 3 to 'Fizz'", () => {
    expect(superFizzbuzz([3, 7])).toDeeplyEqual(['Fizz', 7])
  })
  it("should convert numbers divisible by 5 to 'Buzz'", () => {
    expect(superFizzbuzz([1, 5])).toDeeplyEqual([1, 'Buzz'])
  })

  it("should convert numbers divisible by 3 and by 5 to 'FizzBuzz'", () => {
    expect(superFizzbuzz([30])).toDeeplyEqual(['FizzBuzz'])
  })
})
