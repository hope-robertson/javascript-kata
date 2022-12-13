const { capitalize } = require('./capitalize')

describe('capitalize', () => {
  it('returns a string', () => {
    expect(typeof capitalize('hello')).toBe('string')
  })

  it('should map over an array of words from the given string and then return a string where each of the words starts with a capital letter.', () => {
    expect(capitalize('check check')).toBe('Check Check')
  })

  it('returns a string that matches the one it is given (but is now capitalized).', () => {
    expect(capitalize('i can type many sentences')).toBe(
      'I Can Type Many Sentences'
    )
  })
})
