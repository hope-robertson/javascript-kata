const { deBee } = require('./deBee')

describe('deBee', () => {
  it('returns a string', () => {
    expect(typeof deBee('bizz buzz')).toBe('string')
  })

  it('returns a string where the word buzz has been removed.', () => {
    expect(
      deBee("Help! buzz I'm buzz buzz surrounded buzz by buzz buzz bees!!")
    ).toBe("Help! I'm surrounded by bees!!")
  })

  it('returns a string where the word buzz has been removed, regardless of capitalization.', () => {
    expect(deBee('Buzz BUzz BuZZ help BUZZ buzz')).toBe('help')
  })
})
