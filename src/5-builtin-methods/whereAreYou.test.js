const { whereAreYou } = require('./whereAreYou')

describe('whereAreYou', () => {
  it('returns the first object where the value of hiding is "Scooby".', () => {
    expect(
      whereAreYou([
        { doorNumber: 1, hiding: 'Shaggy' },
        { doorNumber: 2, hiding: 'Scooby' },
        { doorNumber: 3, hiding: 'The Monster!' },
      ])
    ).toStrictEqual({ doorNumber: 2, hiding: 'Scooby' })

    expect(
      whereAreYou([
        { doorNumber: 1, hiding: 'Daphne' },
        { doorNumber: 2, hiding: 'Shaggy' },
        { doorNumber: 3, hiding: 'Velma' },
        { doorNumber: 4, hiding: 'Fred' },
        { doorNumber: 5, hiding: 'Scooby' },
      ])
    ).toStrictEqual({ doorNumber: 5, hiding: 'Scooby' })

    expect(
      whereAreYou([
        { doorNumber: 4, hiding: 'Scooby' },
        { doorNumber: 1, hiding: 'Scooby' },
        { doorNumber: 3, hiding: 'Scooby' },
        { doorNumber: 2, hiding: 'Scooby' },
      ])
    ).toStrictEqual({ doorNumber: 4, hiding: 'Scooby' })
  })
})
