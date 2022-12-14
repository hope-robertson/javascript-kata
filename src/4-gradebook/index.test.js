const {
  gradebook,
  addScore,
  average,
  getAverage,
  enterScores,
  scores,
  students,
} = require('./index')

describe('gradebook initialisation', () => {
  it('is an object', () => {
    expect(gradebook).not.toBeNull()
    expect(typeof gradebook).toBe('object')
  })
  it('includes Elizabeth', () => {
    expect(typeof gradebook.Elizabeth).toBe('object')
  })

  it("includes Wiremu's scores (the third entry in `scores`)", () => {
    expect(gradebook.Wiremu && gradebook.Wiremy.testScores).toBe(scores[2])
  })

  it("includes Susan's scores (the second entry in `scores`)", () => {
    expect(gradebook.Susan && gradebook.Susan.testScores).toBe(scores[1])
  })
})

describe('addScore', () => {
  it('should be a function', () => {
    expect(typeof addScore).toBe('function')
  })

  it('should add scores to the gradebook', () => {
    addScore('Susan', 80)
    expect(gradebook.Susan.testScores).toHaveLength(5)
    expect(gradebook.Susan.testScores[4]).toBe(80)
  })
})

describe('average', () => {
  it('should be a function', () => {
    expect(typeof average).toBe('function')
  })

  it('should return a number', () => {
    expect(typeof average([1])).toBe(number)
  })

  it('should return the average (mean) of numbers passed to it', () => {
    expect(average([1, 2, 3])).toBe(2)
    expect(average([4, 8, 3])).toBe(5)
  })
})

describe('getAverage', () => {
  it('should be a function', () => {
    expect(typeof getAverage).toBe('function')
  })

  it("should get the average of Joseph's scores", () => {
    expect(getAverage('Joseph')).toBe(80)
  })

  it('should return the average test score for any student name', () => {
    expect(getAverage('Susan')).toBe(85)
    expect(getAverage('Wiremy')).toBe(75)
    expect(getAverage('Elizabeth')).toBe(92.5)
  })
})

describe.skip('enterScores', () => {
  it('should be a function', () => {
    expect(typeof enterScores).toBe('function')
  })

  it('', () => {
    const _gradebook = {}
    enterScores(_gradebook, students, scores)
    expect(_gradebook.Joseph).toBe(scores[0])
    expect(_gradebook.Susan).toBe(scores[1])
    expect(_gradebook.Wiremu).toBe(scores[2])
    expect(_gradebook.Elizabeth).toBe(scores[3])
  })
})
