const { concatMyArray } = require('./concatMyArray')

describe('concatMyArray', () => {
  it('returns a string', () => {
    expect(typeof concatMyArray(['hi'])).toBe('string')
  })

  it('returns a string where all the strings in the given array are joined together', () => {
    expect(concatMyArray(['zoom', 'zoom', '!'])).toBe('zoomzoom!')
  })

  it('returns a string that matches the string given, but now joined together', () => {
    expect(
      concatMyArray(['super', 'cali', 'fragi', 'listic', 'expiali', 'docious'])
    ).toBe('supercalifragilisticexpialidocious')
  })
})
