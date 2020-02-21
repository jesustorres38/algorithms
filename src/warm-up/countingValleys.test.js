const countingValleys = require('./countingValleys')

test('Counting Valleys', () => {

  const path = 'DDUUDDUDUUUD'
  const steps = path.length

  expect(countingValleys(steps, path)).toBe(2)
})